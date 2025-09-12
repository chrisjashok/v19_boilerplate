// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/reducer';

const store = configureStore({
  reducer: {
    user: userReducer, // add more reducers as needed
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // thunk is included by default
});

export default store;
