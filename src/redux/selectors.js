import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const filterPrioritySelector = (state) => state.filters.priority;
export const todosRemaining = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText.toLowerCase());
      }
      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
