type HomeProps = {
  message: String;
  children: JSX.Element;
};

export default function Home(props: HomeProps) {
  const { message, children } = props;

  return (
    <body>
      <h1>{message}</h1>
      {children}
    </body>
  );
}
