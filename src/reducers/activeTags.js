export default (state = [], action) => {
  if (action.type === "SET_ACTIVE_TAG") {
    if (state.find(tag => tag === action.payload)) {
      return state.filter(tag => tag !== action.payload);
    }
    return [action.payload, ...state];
  }
  if (action.type === "RESET_TAG") return [];
  return state;
};
