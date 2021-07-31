import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
import * as TestFactories from './helpers/testFactories';
 
const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};
 
describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestorant({ id: 'uewq1zg2zlskfw1e867' });
  })
 
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant('FavoriteRestaurantIdb');
  });
 
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'uewq1zg2zlskfw1e867' });
 
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });
 
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'uewq1zg2zlskfw1e867' });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'uewq1zg2zlskfw1e867' });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
   
    expect(await FavoriteRestaurantIdb.getRestaurantAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'uewq1zg2zlskfw1e867' });
   
    await FavoriteRestaurantIdb.deleteRestaurant('uewq1zg2zlskfw1e867');
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getRestaurantAll()).toEqual([]);
  });

});