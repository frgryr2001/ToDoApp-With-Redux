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
    default:
      return state;
  }
};
export default FilterReducer;
