const initialState = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

export default (state = initialState, action) => {
  if (action.type === "ADD_FAV") {
    const favorites = [action.payload, ...state];
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return favorites;
  }
  if (action.type === "DEL_FAV") {
    const favorites = state.filter(id => id !== action.payload);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return favorites;
  }
  return state;
};
