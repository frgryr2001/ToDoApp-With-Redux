export const addTodoAction = (data) => {
  return { type: "todoList/addTodo", payload: data };
};
// search
export const searchTodoAction = (data) => {
  return { type: "todoList/search", payload: data };
};
export const statusFilterChange = (status) => {
  return { type: "todoList/statusFilterChange", payload: status };
};
export const priorityFilterChange = (priority) => {
  return { type: "todoList/priorityFilterChange", payload: priority };
};
export const toggleTodoStatus = (todoId) => {
  return { type: "todoList/toggleTodoStatus", payload: todoId };
};
