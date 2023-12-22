import { createSlice } from '@reduxjs/toolkit';

export type EventState = {
  favorites: any[];
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
  },
});

export const { setFavorites } = slice.actions;

export default slice.reducer;
