#!/usr/bin/env node
/**
 * Static build for GitHub Pages.
 *
 * Nitro's github-pages preset prerenders every route, then Vite 8 throws
 * "rolldownOptions.input should not be an html file when building for SSR"
 * on a trailing server pass that Pages cannot run. The HTML is already in
 * .output/public when that happens. Exit 0 only for that specific error.
 */
import { spawn } from "node:child_process";
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";

const child = spawn("node", ["scripts/with-app-env.mjs", "vite", "build"], {
  env: {
    ...process.env,
    NITRO_PRESET: "github-pages",
    VITE_AUTH_ENABLED: "false",
  },
  stdio: ["inherit", "pipe", "pipe"],
});

let log = "";
function tap(stream, dest) {
  stream.on("data", (buf) => {
    log += buf.toString();
    dest.write(buf);
  });
}
tap(child.stdout, process.stdout);
tap(child.stderr, process.stderr);

const KNOWN = "rolldownOptions.input should not be an html file when building for SSR";

child.on("exit", (code) => {
  const indexPath = ".output/public/index.html";
  const prerendered = log.includes("Prerendered");
  const knownTail = log.includes(KNOWN);
  if (code !== 0 && !(prerendered && knownTail)) {
    process.exit(code ?? 1);
  }
  if (!existsSync(indexPath) || !readFileSync(indexPath, "utf8").includes("Clew")) {
    console.error("[pages] prerender did not write the Clew homepage");
    process.exit(1);
  }
  copyFileSync(indexPath, ".output/public/404.html");
  writeFileSync(".output/public/.nojekyll", "");
  if (code !== 0) {
    console.log("[pages] prerender succeeded; ignored the trailing static-preset SSR error.");
  }
  process.exit(0);
});
