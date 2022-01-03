const UserComponent = (props) => {
  const { username } = props;
  return (
    <div>
      <h1>Hello: {username} </h1>
    </div>
  );
};

export default UserComponent;
