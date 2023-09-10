export default function Home(props) {
  const { message, children } = props;

  return (
    <body>
      {children}
      <h1>{message}</h1>
    </body>
  );
}
