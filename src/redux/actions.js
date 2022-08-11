export const addTodoAction = (data) => {
  return { type: "todoList/addTodo", payload: data };
};
// search
export const searchTodoAction = (data) => {
  return { type: "todoList/search", payload: data };
};
