import axios from "axios";

export default class GeocodingService {
  static async reverse({ street, city, state, country, postalCode }) {
    const queryAddress = `https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=${street} ${city} ${state} ${country}&components=postal_code:${postalCode}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    return await axios.get(queryAddress);
  }

  static async getElevation({ latitude, longitude }) {
    const queryAddress = `https://maps.googleapis.com/maps/api/elevation/json?locations=${latitude}%2C${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    return await axios.get(queryAddress);
  }

  static async getTimezone({ latitude, longitude }) {
    const queryAddress = `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude}%2C${longitude}&timestamp=${Math.round(
      new Date().getTime() / 1000
    )}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    return await axios.get(queryAddress);
  }
}
