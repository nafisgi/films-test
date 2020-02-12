import React from "react";
import { connect } from "react-redux";

const FilmPage = props => {
  const id = props.location.pathname.split("/").pop();

  const film = props.films.find(film => film.id === Number(id));

  const isFavorite = props.favorites.includes(film.id);
  return (
    <div id="film-page">
      <div className="header">
        <button className="back-btn" onClick={() => props.history.goBack()}>
          <i className="material-icons">arrow_back</i> назад
        </button>
      </div>
      <div className="row">
        <div className="col s12 l3">
          <img src="https://picsum.photos/180/300" alt="ava" />
        </div>
        <div className="col">
          <h4>{film.title}</h4>
          <button
            className={
              (isFavorite && "btn blue-grey lighten-4") || "btn amber darken-1"
            }
            onClick={
              (isFavorite && props.delFavorites(film.id) || props.addFavorites(film.id))
            }
          >
            {(isFavorite && "Удалить с заклакдок") || "Добавить в закладки"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(
  state => ({
    films: state.films,
    favorites: state.favorites
  }),
  dispatch => ({
    addFavorites: id => () => {
      dispatch({ type: "ADD_FAV", payload: id });
    },
    delFavorites: id => () => {
      dispatch({ type: "DEL_FAV", payload: id });
    }
  })
)(FilmPage);
