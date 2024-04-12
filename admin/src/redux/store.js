// store.js
import { configureStore } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  // Define your initial state properties here if needed
};

// Define a reducer function
const rootReducer = (state = initialState, action) => {
  // Handle actions here if needed
  return state;
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer
});

export default store;
