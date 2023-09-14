import { renderToReadableStream } from "react-dom/server";
import { log } from "console";
import { App } from "./App";

const PORT = process.env.PORT || 3000;

const rootRequestHeaders = { "Content-Type": "text/html" };

const requestHandler = async (req: Request) => {
  const url = req.url;
  const path = url.split(`${PORT}`).at(1);

  let stream;

  switch (path) {
    case "":
    case "/":
      {
        stream = await renderToReadableStream(<App req={req} />);
      }
      break;
    case "/clicked":
      {
        stream = await renderToReadableStream(
          <span>This is the response</span>,
        );
      }
      break;
    default: {
      stream = await renderToReadableStream(<div>Page not found: 404</div>);
    }
  }

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
