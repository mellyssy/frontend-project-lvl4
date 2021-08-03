import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './channelsSlice.js';

export default configureStore({
  reducer: rootReducer,
});
