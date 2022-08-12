const initState = {
  search: "",
  status: "All",
  priority: [],
};

const FilterReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/search":
      return {
        ...state,
        search: action.payload,
      };
    case "todoList/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
export default FilterReducer;
