const assert = require('assert');

Feature('Like and unlike Restaurant');
  Scenario('liking restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.post_item_title a');

    const firstRestaurant = locate('.post_item_title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post_item');
    const likedRestaurantTitle = await I.grabTextFrom('.post_item_title');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });

  Scenario('unlike restaurant', async ({ I }) => {
  
    I.amOnPage('/');
    I.seeElement('.post_item_title a');
    I.click(locate('.post_item_title a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post_item_title a');
    const firstLikedRestaurant = locate('.post_item_title a').first();
    const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
    I.click(firstLikedRestaurant);
    
    I.seeElement('.detail_title');
    const likedRestaurantTitle = await I.grabTextFrom('.detail_title');
    assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.click('[aria-label="unlike this restaurant"]');

    I.amOnPage('/#/favorite');
    I.seeElement('#favoriteEmpty');
  });
