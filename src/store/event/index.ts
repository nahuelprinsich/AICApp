import { createSlice } from '@reduxjs/toolkit';

import { EventData } from '../../services/apis/types';

export type EventState = {
  favorites: EventData[];
};
  
type EventPayload = {
    payload: Partial<EventState>;
};

const slice = createSlice({
  name: 'event',
  initialState: {
    favorites: []
  } as EventState,
  reducers: {
    setFavorites: (
      state,
      { payload: { favorites } }: EventPayload,
    ) => {
      if (typeof favorites !== 'undefined') {
        state.favorites = favorites;
      }
    },
    pushFavorite: (
      state,
      action,
    ) => {
      state.favorites.push(action.payload);
    },
    popFavorite: (
      state,
      action,
    ) => {
      const idToRemove = action.payload;
      state.favorites = state.favorites.filter(favorite => favorite.id !== idToRemove);
    },
  },
});

export const { setFavorites, pushFavorite, popFavorite } = slice.actions;

export default slice.reducer;
