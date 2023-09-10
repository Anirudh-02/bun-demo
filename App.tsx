import Home from "./components/Home";
import ChildComp from "./components/DemoChildComp";
import { getParamFromRequestByName } from "./utils/utils";

type AppProps = {
  req: Request;
};

const MESSAGE = "message";

export const App = (props: AppProps) => {
  const { req } = props;
  const messageToShow = getParamFromRequestByName(req, MESSAGE);

  return (
    <Home message={messageToShow}>
      <ChildComp childmsg={messageToShow + "hello from child"} />
    </Home>
  );
};
