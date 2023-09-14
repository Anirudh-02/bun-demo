type HomeProps = {
  message: String;
  children: JSX.Element;
};

const styles = {
  containerStyles: {
    display: "grid",
    placeItems: "center",
  },
};

export default function Home(props: HomeProps) {
  const { message, children } = props;

  return (
    <div style={styles.containerStyles}>
      {message && <h1>{message}</h1>}
      {children}
    </div>
  );
}
