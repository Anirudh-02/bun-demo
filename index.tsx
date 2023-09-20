import { renderToReadableStream } from "react-dom/server";
import { log } from "console";
import { App } from "./App";

const PORT = process.env.PORT || 3000;

const rootRequestHeaders = { "Content-Type": "text/html" };

const requestHandler = async (req: Request) => {
  const url = req.url;
  const path = url.split(`${PORT}`).at(1);

  let streamResponse;

  switch (path) {
    case "":
    case "/":
      {
        streamResponse = await renderToReadableStream(<App req={req} />);
      }
      break;
    case "/clicked":
      {
        streamResponse = await renderToReadableStream(
          <span>This is the response</span>,
        );
      }
      break;
    default: {
      streamResponse = await renderToReadableStream(
        <div>Page not found: 404</div>,
      );
    }
  }

  return new Response(streamResponse, {
    headers: rootRequestHeaders,
  });
};

const serverInitalizer = {
  port: PORT,
  fetch: requestHandler,
};

Bun.serve(serverInitalizer);

log(`server running at http://localhost:${PORT}`);
