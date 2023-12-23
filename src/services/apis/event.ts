import { api } from '../index';
import { Event } from './types';

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
