import React, { useState } from "react";
import { connect } from "react-redux";
import FilmCard from "./FilmCard";
import {includesCommonElement} from "../../utils/commonElem";

const FilmsList = props => {
  const [filmsCount, setFilmsCount] = useState(10);

  const filteredFavoritesList = props.onlyFavorites
    ? props.films.filter(film => props.favorites.includes(film.id))
    : props.films;

  const filteredByTags = props.activeTags.length !== 0 ?
      filteredFavoritesList.filter(film => includesCommonElement(film.tags, props.activeTags)) :
      filteredFavoritesList

  const list = props.searchText
    ? filteredByTags.filter(film =>
        film.title.toLowerCase().includes(props.searchText.toLowerCase())
      )
    : filteredByTags;


  const allFilmsCount = list.length;
  if (allFilmsCount === 0)
    return (
      <div className="d-flex justify-content-center">
        <h2>Список пуст</h2>
      </div>
    );

  return (
    <div id="films-block">
      {list.slice(0, filmsCount).map(film => (
        <FilmCard film={film} key={"film-" + film.id} />
      ))}
      {filmsCount <= allFilmsCount && (
        <div className="d-flex justify-content-center">
          <button
            className="btn"
            onClick={() => setFilmsCount(filmsCount + 10)}
          >
            Показать еще
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(state => ({
  films: state.films,
  searchText: state.searchText,
  favorites: state.favorites,
   activeTags: state.activeTags
}))(FilmsList);
