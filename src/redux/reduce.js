const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: true, priority: "High" },
    { id: 2, name: "Learn Javascript", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Typescript", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "todoList/search":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};
export default rootReducer;
