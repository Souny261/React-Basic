import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const TodoListComponent = () => {
  // call data
  const selectTodos = (state) => state.todos;
  const todos = useSelector(selectTodos);
  // call action on reducer
  const dispatch = useDispatch();
  return (
    <div>
      {todos.todos.map((e) => {
        return (
          <h3 key={uuidv4()}>
            {e.title}-{e.des}
          </h3>
        );
      })}
      {/* <button
        onClick={() =>
          dispatch({
            type: "INSERT",
            payload: { title: "Heeee", des: "dededed" },
          })
        }
      >
        ADD
      </button> */}
    </div>
  );
};

export default TodoListComponent;
