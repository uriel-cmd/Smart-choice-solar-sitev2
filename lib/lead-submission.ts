"use client";

// A synchronous lock closes the gap before React renders disabled buttons.
// Keep the ID on errors and across remounts/reloads for the same request.
export function createLeadSubmitter() {
  let busy = false;
  const attempts = new Map<string, string>();
  return async (url: string, payload: unknown): Promise<boolean> => {
    if (busy) return false;
    busy = true;
    try {
      const body = JSON.stringify(payload);
      const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${url}:${body}`));
      const key = `scs-lead:${Array.from(new Uint8Array(digest), n => n.toString(16).padStart(2, "0")).join("")}`;
      let id = attempts.get(key);
      if (!id) {
        try {
          const stored = JSON.parse(sessionStorage.getItem(key) || "null");
          if (stored && Date.now() - stored.createdAt < 86400000) id = stored.id;
        } catch { /* Storage may be disabled. In-memory retries still reuse the ID. */ }
        id ||= crypto.randomUUID();
        attempts.set(key, id);
        try { sessionStorage.setItem(key, JSON.stringify({ id, createdAt: Date.now() })); } catch { /* optional */ }
      }
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": id },
        body
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const error = new Error(data.error || "Submission failed");
        error.name = data.code || "SubmissionError";
        throw error;
      }
      return true;
    } finally {
      busy = false;
    }
  };
}
