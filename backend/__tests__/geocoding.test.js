import "../src/server.js";
import axios from "axios";

describe("Geocoding test", () => {
  it("should find address", async () => {
    const response = await axios.post(
      `http://localhost:${process.env.PORT || 3000}/api/geocoding/search`,
      {
        street: "Rua 916",
        city: "Balneario Camboriu",
        state: "Santa Catarina",
        country: "Brazil",
        postalCode: "88330-570",
      }
    );

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("address");
    expect(response.data).toHaveProperty("latitude");
    expect(response.data).toHaveProperty("longitude");
    expect(response.data).toHaveProperty("elevation");
  });
});
