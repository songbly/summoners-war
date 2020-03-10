import React from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../lib/ducks";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "../lib/middlewares/logger";

const Test = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

const configureStore = (initialState, options) => {
  const middlewares = [logger];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

export default withRedux(configureStore)(Test);
