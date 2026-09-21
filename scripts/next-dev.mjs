import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextCli = require.resolve("next/dist/bin/next");
const incoming = process.argv.slice(2);
const forwarded = [];

for (let index = 0; index < incoming.length; index += 1) {
  const argument = incoming[index];

  if (argument === "--host") {
    forwarded.push("--hostname");
    continue;
  }

  if (argument === "--strictPort") {
    continue;
  }

  forwarded.push(argument);
}

const child = spawn(process.execPath, [nextCli, "dev", ...forwarded], {
  stdio: "inherit"
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
