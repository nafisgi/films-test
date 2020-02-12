import React, { useState } from "react";
import SearchForm from "../assets/SearchForm";
import FilmsList from "../assets/FilmsList";
import {connect} from 'react-redux'

const MainPage = props => {
  const [activeTab, setActiveTab] = useState(Number(localStorage.getItem("activeTab")) || 0);

  const changeTab = n => () => {
    localStorage.setItem("activeTab", n)
    setActiveTab(n)
  }
  return (
    <div id="main">
      <SearchForm />
      <div className="d-flex justify-content-center">
        <button
          className={(activeTab === 0 && "btn") || "btn grey lighten-1"}
          onClick={changeTab(0)}
        >
          Фильмы
        </button>
        <button
          className={(activeTab === 1 && "btn") || "btn grey lighten-1"}
          onClick={changeTab(1)}
        >
          Закладки
        </button>
      </div>
      <div id="tags" className="d-flex justify-content-center flex-wrap">
        {
          props.tags.map((tag, index) => (
            <span className={props.activeTags.includes(tag) &&  "badge amber darken-1" || "badge"} onClick={props.setTag(tag)} key={"tag-" + index}>#{tag}</span>
          ))
        }

      </div>
      <div className="d-flex justify-content-end">
        <button disabled={props.activeTags.length === 0} className="btn btn-small" onClick={props.resetTags}>Сбросить фильтры</button>
      </div>

      {(activeTab === 0 && <FilmsList  />) ||
        (activeTab === 1 && <FilmsList onlyFavorites />)}
    </div>
  );
};

export default connect(
    state => ({
      tags: state.tags,
      activeTags: state.activeTags
    }),
    dispatch => ({
        setTag: tag => () => {
            dispatch({type: "SET_ACTIVE_TAG", payload:tag})
        },
        resetTags: () => {
            dispatch({type: "RESET_TAG"})
        }
    })
)(MainPage);
