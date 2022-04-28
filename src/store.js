//WITHOUT TOOLKIT OF REDUX

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

//WITHOUT TOOLKIT OF REDUX
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/index";

// const initialState = {};
// const middleware = [thunk];
// const composeEnhancer = composeWithDevTools(applyMiddleware(...middleware));

// const store = createStore(rootReducer, initialState, composeEnhancer);

// export default store;

//WITH TOOLKIT WE DONOT NEED TO COMBINE THE REDUCER
// The input object should have a reducer property that defines
//  either a function to be used as the root reducer, or an object
//  of slice reducers which will be combined to create a root reducer.

// import { configureStore } from '@reduxjs/toolkit'
// import LogReducer from "./LogReducer";
// import TechReducer from "./TechReducer";

// const store = configureStore({
//   reducer : {
//     log: LogReducer,
//   tech: TechReducer,
//   }
// })

// This is enough to combine middleware , devtolls ,rootreducer with simple configureStore
