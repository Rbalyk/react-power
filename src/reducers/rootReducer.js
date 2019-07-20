import { combineReducers} from "redux";
import { videos } from "./videos";
import { currency } from "./currency";
import { articles } from "./newYorkTimes";

const rootReducer = combineReducers({
    videos,
    currency,
    articles
});

export default rootReducer;
