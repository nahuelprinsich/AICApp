import { api } from '../index';

export type Event = {
  data: any;
};

export const eventApi = api.injectEndpoints({
  endpoints: build => ({
    getEvents: build.query<Event, void>({
        query: () => {
            return {
                url: `/events?limit=50`
            }
        },
    }),
  }),
  overrideExisting: false,
});

export const { useGetEventsQuery } = eventApi;
