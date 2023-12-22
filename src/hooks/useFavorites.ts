import { useDispatch, useSelector } from 'react-redux';

import { EventState, setFavorites } from '../store/event';

export default function () {

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: { event: EventState }) => state.event.favorites,
  );

  const addFavorites = ({ favorites }: Partial<EventState>) => {
    dispatch(setFavorites({ favorites }));
  };

  const deleteFavorite = (item) => {
    const index = favorites.findIndex(favorite => favorite.id === item.id);
    const length = favorites.length
    let newfavorites;

    if(index === 0) {
        newfavorites = favorites.slice(1);
    } else if(index === length - 1) {
        newfavorites = favorites.slice(0, length - 1);
    } else {
        newfavorites = [
        ...favorites.slice(0, index), 
        ...favorites.slice(index + 1)
        ]
    }
    addFavorites({favorites: newfavorites})
}

  return {
    favorites,
    addFavorites,
    deleteFavorite
  };

}
