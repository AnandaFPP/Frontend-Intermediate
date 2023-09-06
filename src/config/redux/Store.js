
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";

const Store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default Store;