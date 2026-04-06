import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

type OgImageOptions = {
  headline: string;
  locale: "en" | "es";
  eyebrow: string;
  supporting?: string;
};

function getLogoDataUri() {
  const logoPath = join(process.cwd(), "public/brand/smart-choice-solar-logo-dark.svg");
  const logoBase64 = readFileSync(logoPath).toString("base64");
  return `data:image/svg+xml;base64,${logoBase64}`;
}

export function createOgImage({ headline, locale, eyebrow, supporting }: OgImageOptions) {
  const logoDataUri = getLogoDataUri();
  const supportText =
    supporting ??
    (locale === "es"
      ? "Solar, baterías y techado con orientación clara para propietarios en California."
      : "Solar, battery storage, and roofing guidance for homeowners across California.");

  const localeBadge = locale === "es" ? "Español" : "English";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at top left, rgba(143,203,231,0.32), transparent 24%), radial-gradient(circle at 88% 18%, rgba(226,161,58,0.18), transparent 18%), linear-gradient(135deg, #10233c 0%, #1a3052 58%, #3d7ba9 100%)",
          color: "white",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 34,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            boxShadow: "0 30px 90px rgba(8, 19, 34, 0.35)"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            height: 8,
            borderRadius: 999,
            background: "linear-gradient(90deg, #e2a13a 0%, #8fcbe7 38%, #1a3052 100%)"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 58,
            right: 58,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.22)",
            background: "rgba(255,255,255,0.08)",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}
        >
          {localeBadge}
        </div>

        <div
          style={{
            position: "absolute",
            right: 58,
            top: 122,
            width: 350,
            height: 430,
            borderRadius: 38,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 26,
              borderRadius: 28,
              background:
                "linear-gradient(180deg, rgba(143,203,231,0.18), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.16)"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 64,
              right: 64,
              top: 82,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 999,
                  background:
                    index === 1
                      ? "linear-gradient(180deg, #e2a13a 0%, #c6891d 100%)"
                      : "linear-gradient(180deg, #8fcbe7 0%, #5b97c0 100%)",
                  boxShadow: "0 18px 30px rgba(16,35,60,0.22)"
                }}
              />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              left: 74,
              right: 74,
              bottom: 94,
              height: 26,
              borderRadius: 999,
              background: "linear-gradient(90deg, #8fcbe7 0%, #e2a13a 100%)"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 92,
              right: 92,
              bottom: 154,
              display: "flex",
              flexDirection: "column",
              gap: 18
            }}
          >
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                style={{
                  height: 16,
                  borderRadius: 999,
                  background: index === 0 ? "rgba(255,255,255,0.84)" : "rgba(255,255,255,0.3)"
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 430px 60px 68px"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <img
              src={logoDataUri}
              alt="Smart Choice Solar"
              width={360}
              height={86}
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.08)",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.84)"
              }}
            >
              {eyebrow}
            </div>

            <div
              style={{
                maxWidth: 630,
                fontSize: 66,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-0.04em"
              }}
            >
              {headline}
            </div>

            <div
              style={{
                maxWidth: 620,
                fontSize: 28,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.78)"
              }}
            >
              {supportText}
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {(locale === "es"
              ? ["Solar", "Baterías", "Techado"]
              : ["Solar", "Battery", "Roofing"]
            ).map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.08)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.9)"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
