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
