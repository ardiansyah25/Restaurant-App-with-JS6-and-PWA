import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
         <div class="main_header">
         <h1 class="pt-80">Favorite Restaurant</h1>
              </div>
              <section class="content" id="content">
                  <div class="posts">      
                  </div>
              </section>
         `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getRestaurantAll();
    const restaurantContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default FavoriteRestaurant;
