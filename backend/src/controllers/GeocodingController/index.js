import GeocodingService from "../../services/GeocodingService/index.js";

export default class GeocodingController {
  static async search(req, res) {
    try {
      const response = await GeocodingService.reverse(req.body);
      const data = response.data;
      const item = data.results[0];

      var geoData = {
        address: item.formatted_address,
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
      };

      const elevationResponse = await GeocodingService.getElevation({
        latitude: geoData.latitude,
        longitude: geoData.longitude,
      });
      const elevationData = elevationResponse.data;

      const timezoneResponse = await GeocodingService.getTimezone({
        latitude: geoData.latitude,
        longitude: geoData.longitude,
      });
      const timezoneData = timezoneResponse.data;

      geoData.elevation = elevationData.results[0].elevation;
      geoData.timeZoneId = timezoneData.timeZoneId;

      res.status(200).json(geoData);
    } catch (e) {
      res.status(400).send({ message: e.message });
    }
  }
}
