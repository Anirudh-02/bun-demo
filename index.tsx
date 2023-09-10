import { renderToReadableStream } from "react-dom/server";
import { log } from "console";
import Home from "./components/Home";
import ChildComp from "./components/DemoChildComp";

const PORT = 3000;

// components

const requestHandler = async (req: Request) => {
  const url = new URL(req.url);
  const params = url.searchParams;
  const message = params.get("message") ?? "default greeting";
  const messageToShow = decodeURIComponent(message.replace(/%22/g, ""));

  const stream = await renderToReadableStream(
    <Home message={messageToShow}>
      <ChildComp childmsg={messageToShow + "hello from child"} />
    </Home>,
  );

  return new Response(stream, {
    headers: { "Content-Type": "text/html" },
  });
};

const serverInitalizer = {
  port: PORT,
  fetch: requestHandler,
};

Bun.serve(serverInitalizer);

log(`server running at http://localhost:${PORT}`);
