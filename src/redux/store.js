// store.js
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducer/reducer';

const store = configureStore({
  reducer: {
    user: homeReducer, // add more reducers as needed
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // thunk is included by default
});

export default store;
