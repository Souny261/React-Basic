const MapStateToProps = (state) => {
  return {
    counter: state.counter,
    todos: state.todos,
  };
};



export default MapStateToProps;
