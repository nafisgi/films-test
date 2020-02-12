import React from "react";
import { connect } from "react-redux";

const SearchForm = props => {
  return (
    <div className="row">
      <div className="input-field search-form">
        <input
          id="search"
          onChange={e => props.setSearchText(e.target.value)}
          value={props.searchText}
          type="text"
          className="validate"
        />
        <label className="active" htmlFor="search">
          Поиск
        </label>
        {props.searchText && (
          <button className="icon-btn" onClick={() => props.setSearchText("")}>
            <i className="material-icons close-icon icon-btn">close</i>
          </button>
        )}
      </div>
    </div>
  );
};

export default connect(
  state => ({
    searchText: state.searchText
  }),
  dispatch => ({
    setSearchText: text => {
      dispatch({ type: "SET_SEARCH_TEXT", payload: text });
    }
  })
)(SearchForm);
