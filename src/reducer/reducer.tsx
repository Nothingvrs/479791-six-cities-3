import {combineReducers} from "redux";
import {userReducer as user} from './user/user-reducer';
import {dataReducer as data} from "./data/data-reducer";
const rootReducer = combineReducers({
  user,
  data
});

export default rootReducer;
