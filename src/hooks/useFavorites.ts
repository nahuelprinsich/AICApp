import { useDispatch, useSelector } from 'react-redux';

import { EventState, pushFavorite, popFavorite } from '../store/event';
import { EventData } from '../services/apis/types';

export default function () {

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: { event: EventState }) => state.event.favorites,
  );

  const addFavorite = (event: EventData) => {
    dispatch(pushFavorite(event));
  };

  const deleteFavorite = (id: number) => {
    dispatch(popFavorite(id));
  }

  return {
    favorites,
    addFavorite,
    deleteFavorite
  };

}
