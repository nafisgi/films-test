import React from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const FilmCard = props => {
  const isFavorite = props.favorites.includes(props.film.id)

  const setFavorite = () => {
    if(isFavorite) props.delFavorites(props.film.id)
    else props.addFavorites(props.film.id)
  }
  return (
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content d-flex justify-content-between align-items-center">
          <div className="flex-1">
            <Link to={`/film/${props.film.id}`}>{props.film.title}</Link>
            {
              props.film.tags.map((tag, index) => (
                  <span className={props.activeTags.includes(tag) &&  "badge amber darken-1" || "badge"} onClick={props.setTag(tag)} key={"tag-" + index}>#{tag}</span>
              ))
            }
          </div>
          <div>
            <button className="icon-btn" onClick={setFavorite}>
              <i className="material-icons yellow-text text-darken-4">{isFavorite && "bookmark" || "bookmark_border"}</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
    state => ({
      favorites: state.favorites,
      activeTags: state.activeTags

    }),
    dispatch =>({
      addFavorites: id => {
        dispatch({type: "ADD_FAV", payload: id})
      },
      delFavorites: id => {
        dispatch({type: "DEL_FAV", payload: id})
      },
      setTag: tag => () => {
        dispatch({type: "SET_ACTIVE_TAG", payload:tag})
      }
    })
)(FilmCard);
