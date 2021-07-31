import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const AllRestaurant = {
  async render() {
    return `
       <div class="main_header">
       <h1>Explore Restaurant</h1>
            </div>  
            <section class="content" id="content">
                <div class="posts">      
                </div>
            </section>
       `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.list();
    const restaurantContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default AllRestaurant;
