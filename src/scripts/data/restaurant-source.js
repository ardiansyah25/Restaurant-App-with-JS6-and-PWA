import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responJson = await response.json();
    return responJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responJson = await response.json();
    return responJson.restaurant;
  }
}

export default RestaurantSource;
