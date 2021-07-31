import truncatise from 'truncatise';
import CONFIG from '../../globals/config';

const options = {
  TruncateLength: 25,
  TruncateBy: 'words',
  Strict: false,
  StripHTML: true,
  Suffix: ' (Read More)',
};

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post_item">
                    <p class="post_item_lokasi">${restaurant.city}</p>
                    <img class="post_item_thumbnail lazyload"
                        data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
                        alt="${restaurant.name}">
                    <div class="post_item_content">
                        <p class="post_item_rate">Rating: <i>${restaurant.rating}</i></p>
                        <h1 class="post_item_title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
                        <p class="post_item_description">${truncatise(restaurant.description, options)}</p>
                    </div>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
   <div class="detail">
    <img class="detail_gambar lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}"  />
        <div class="detail_info">
            <h2 class="detail_title">${restaurant.name}</h2>
            <h4>Kategori</h4>
            <p>${restaurant.categories.map((categori) => categori.name)}</p>
            <h4>Alamat</h4>
            <p>${restaurant.address}</p>
            <h4>Kota</h4>
            <p>${restaurant.city}</p>
            <h4>Deskripsi</h4>
            <p>${restaurant.description}</p>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>Menu Makanan</h4>
            <p>${restaurant.menus.foods.map((food) => food.name)}</p>
            <h4>Menu Minuman</h4>
            <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
        </div>
          <div class="detail_reviews" id="review">
           <h3>Costumer Reviews</h3>
        </div>
    </div>
`;

const createReviewItem = (review) => `
<div class="detail_review_item">
        <h4>Nama</h4>
        <p>${review.name}</p>
        <h4>Ulasan</h4>
        <p>${review.review}</p>
        <h4>Tanggal</h4>
        <p>${review.date}</p>
</div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createReviewItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
