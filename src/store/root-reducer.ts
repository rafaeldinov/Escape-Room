import { combineReducers } from '@reduxjs/toolkit';
import { questSlice } from './quest-reducer';


export const rootReducer = combineReducers({
  'quest': questSlice.reducer,
});
