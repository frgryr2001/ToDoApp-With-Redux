export const todoListSelector = (state) => {
  const todosRemaining = state.todoList.filter((todo) => {
    return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
  });
  return todosRemaining;
};
export const searchTextSelector = (state) => state.filters.search;
