import { createSlice } from '@reduxjs/toolkit';

export type EventState = {
  favourites: any;
};
  
type EventPayload = {
    payload: Partial<EventState>;
};

const slice = createSlice({
  name: 'event',
  initialState: {
    favourites: null
  } as EventState,
  reducers: {
    setFavourite: (
        state,
        { payload: { favourites } }: EventPayload,
      ) => {
        if (typeof favourites !== 'undefined') {
          state.favourites = favourites;
        }
      },
  },
});

export const { setFavourite } = slice.actions;

export default slice.reducer;
