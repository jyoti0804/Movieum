import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';
import tvReducer from './reducers/tvSlice';
import personReducer from './reducers/personSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
  },
  // Optional: Uncomment the following to enable Redux DevTools only in development mode
//   devTools: process.env.NODE_ENV !== 'production',
});
