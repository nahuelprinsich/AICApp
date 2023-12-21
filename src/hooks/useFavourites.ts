import { useDispatch, useSelector } from 'react-redux';

import { EventState, setFavourites } from '../store/event';

export default function () {

  const dispatch = useDispatch();

  const favourites = useSelector(
    (state: { event: EventState }) => state.event.favourites,
  );

  const addFavourites = ({ favourites }: Partial<EventState>) => {
    dispatch(setFavourites({ favourites }));
  };

  const deleteFavourite = (item) => {
    const index = favourites.findIndex(favourite => favourite.id === item.id);
    const length = favourites.length
    let newFavourites;

    if(index === 0) {
        newFavourites = favourites.slice(1);
    } else if(index === length - 1) {
        newFavourites = favourites.slice(0, length - 1);
    } else {
        newFavourites = [
        ...favourites.slice(0, index), 
        ...favourites.slice(index + 1)
        ]
    }
    addFavourites({favourites: newFavourites})
}

  return {
    favourites,
    addFavourites,
    deleteFavourite
  };

}
