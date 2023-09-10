import { renderToReadableStream } from "react-dom/server";
import { log } from "console";
import Home from "./components/Home";
import ChildComp from "./components/DemoChildComp";
import { getParamFromRequestByName } from "./utils/utils";

const PORT = 3000;

const requestHandler = async (req: Request) => {
  const messageToShow = getParamFromRequestByName(req, "message");

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
