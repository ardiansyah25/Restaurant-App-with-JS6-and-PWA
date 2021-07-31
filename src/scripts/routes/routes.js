import AllRestaurant from '../views/pages/all-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': AllRestaurant,
  '/all-restaurant': AllRestaurant,
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;
