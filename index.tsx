import { renderToReadableStream } from "react-dom/server";
import { log } from "console";
import { App } from "./App";

const PORT = process.env.PORT || 3000;

const rootRequestHeaders = { "Content-Type": "text/html" };

const requestHandler = async (req: Request) => {
  const stream = await renderToReadableStream(<App req={req} />);

  return new Response(stream, {
    headers: rootRequestHeaders,
  });
};

const serverInitalizer = {
  port: PORT,
  fetch: requestHandler,
};

Bun.serve(serverInitalizer);

log(`server running at http://localhost:${PORT}`);
