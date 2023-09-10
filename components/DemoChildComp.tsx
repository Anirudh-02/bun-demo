type ChildCompProps = {
  childmsg: String;
};

const ChildComp = (props: ChildCompProps) => {
  const { childmsg } = props;

  return <>{childmsg}</>;
};

export default ChildComp;
