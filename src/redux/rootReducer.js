import { combineReducers } from "redux";

import screenReducer from "./reducers/screenReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["screen"],
};

const rootReducer = combineReducers({
  screen: screenReducer,
});

export default persistReducer(persistConfig, rootReducer);
