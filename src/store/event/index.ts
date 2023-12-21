import { createSlice } from '@reduxjs/toolkit';

export type EventState = {
  favourites: any[];
};
  
type EventPayload = {
    payload: Partial<EventState>;
};

const slice = createSlice({
  name: 'event',
  initialState: {
    favourites: []
  } as EventState,
  reducers: {
    setFavourites: (
        state,
        { payload: { favourites } }: EventPayload,
      ) => {
        if (typeof favourites !== 'undefined') {
          state.favourites = favourites;
        }
      },
  },
});

export const { setFavourites } = slice.actions;

export default slice.reducer;
