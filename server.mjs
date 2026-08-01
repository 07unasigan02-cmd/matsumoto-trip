import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = 3000;

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

const server = createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url ?? "/", "http://localhost");
    let filePath = decodeURIComponent(requestUrl.pathname);

    if (filePath === "/") {
      filePath = "/index.html";
    }

    const safePath = path.normalize(path.join(root, filePath));
    if (!safePath.startsWith(root)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    const fileStat = await stat(safePath);
    if (!fileStat.isFile()) {
      throw new Error("Not a file");
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = mimeTypes.get(ext) ?? "application/octet-stream";
    const body = await readFile(safePath);

    res.writeHead(200, { "Content-Type": contentType });
    res.end(body);
  } catch {
    const fallback = path.join(root, "index.html");
    const body = await readFile(fallback);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(body);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving ${root} on http://localhost:${port}/`);
});
