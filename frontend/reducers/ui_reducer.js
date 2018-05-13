import {combineReducers} from "redux";

import indexHeader from "./header_reducer";
import search from "./search_reducer";
import searchBar from "./search_bar_reducer";

export default combineReducers({
  indexHeader,
  search,
  searchBar
});
