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

    const firstRestaurant = locate('.post_item_title a').first();
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post_item_title a');
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    
    
  });
