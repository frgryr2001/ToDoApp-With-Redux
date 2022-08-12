import FilterReducer from "../components/Filters/FiltersSlice";
import TodoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: FilterReducer(state.filters, action),
    todoList: TodoListReducer(state.todoList, action),
  };
};
export default rootReducer;
