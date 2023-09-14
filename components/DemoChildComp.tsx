type ChildCompProps = {
  childmsg: String;
};

const ChildComp = (props: ChildCompProps) => {
  const { childmsg } = props;

  return (
    <>
      {childmsg}
      <button hx-get="/clicked" hx-swap="outerHTML">
        Click me
      </button>
    </>
  );
};

export default ChildComp;
