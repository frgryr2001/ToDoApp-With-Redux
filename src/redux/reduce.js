import FilterReducer from "../components/Filters/FiltersSlice";
import TodoListReducer from "../components/TodoList/TodosSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters: FilterReducer,
  todoList: TodoListReducer,
});
export default rootReducer;
