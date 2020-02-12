import initialFilms from "../jsons/films";

const withId = initialFilms.map((film, index) => ({
  id: index + 1,
  ...film
}));

export default (state = withId, action) => {
  return state;
};
