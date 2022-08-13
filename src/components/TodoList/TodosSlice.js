const initState = [
  { id: 1, name: "Learn React", completed: true, priority: "High" },
  { id: 2, name: "Learn Javascript", completed: true, priority: "Medium" },
  { id: 3, name: "Learn Typescript", completed: false, priority: "Low" },
];

const TodoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      ];

    default:
      return state;
  }
};
export default TodoListReducer;
