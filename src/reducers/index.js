import { combineReducers } from "redux";
import films from './films'
import tags from './tags'
import favorites from "./favorites";
import searchText from "./searchText";
import activeTags from "./activeTags";

export default combineReducers({
    films,
    tags,
    favorites,
    searchText,
    activeTags
})