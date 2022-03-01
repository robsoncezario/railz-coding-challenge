import baseAPI from "../api";

export default class LocationService {
  static async findAddress({
    streetAddress,
    city,
    province,
    country,
    postalCode,
  }) {
    return await baseAPI.post("/geocoding/search", {
      street: streetAddress,
      city,
      state: province,
      country,
      postalCode,
    });
  }
}
