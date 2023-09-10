import { renderToReadableStream } from "react-dom/server";
import { log } from "console";
import Home from "./components/Home";
import ChildComp from "./components/DemoChildComp";
import { getParamFromRequestByName } from "./utils/utils";

const MESSAGE = "message";
const PORT = process.env.PORT || 3000;

const rootRequestHeaders = { "Content-Type": "text/html" };

const requestHandler = async (req: Request) => {
  const messageToShow = getParamFromRequestByName(req, MESSAGE);

  const stream = await renderToReadableStream(
    <Home message={messageToShow}>
      <ChildComp childmsg={messageToShow + "hello from child"} />
    </Home>,
  );

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
