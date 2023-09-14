import Home from "./components/Home";
import ChildComp from "./components/DemoChildComp";
import { getParamFromRequestByName } from "./utils/utils";

type AppProps = {
  req: Request;
};

const MESSAGE = "message";

const styles = {
  bodyStyles: {
    background: "#333",
    color: "white",
    margin: 0,
    padding: 0,
  },
};

export const App = (props: AppProps) => {
  const { req } = props;
  const messageToShow = getParamFromRequestByName(req, MESSAGE);

  return (
    <>
      <head>
        <script
          src="https://unpkg.com/htmx.org@1.9.5"
          integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO"
          crossOrigin="anonymous"
        />
      </head>
      <body style={styles.bodyStyles}>
        <Home message={messageToShow}>
          <ChildComp childmsg={messageToShow + "hello from child"} />
        </Home>
      </body>
    </>
  );
};
