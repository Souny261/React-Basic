const MapDispatchProps = (dispatch) => {
  return {
    count: (data, type) => {
      dispatch({
        type: type,
        payload: data,
      });
    },
    todo: (data, type) => {
      dispatch({
        type: type,
        payload: data,
      });
    },
  };
};

export default MapDispatchProps;
