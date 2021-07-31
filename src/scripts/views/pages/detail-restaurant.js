import LikeButtonInitiator from '../../utils/like-button-initiator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createReviewItem,
  createLikeButtonTemplate,
} from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
        <div class="detail_header"></div>
         <section class="content" id="content">
         </section>
         <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector('#content');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const reviewContainer = document.querySelector('#review');
    restaurant.customerReviews.forEach((res) => {
      reviewContainer.innerHTML += createReviewItem(res);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailRestaurant;
