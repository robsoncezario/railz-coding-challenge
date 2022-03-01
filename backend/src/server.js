import * as dotenv from "dotenv";

dotenv.config();

import app from "./controllers/AppController/index.js";

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `[Express] 🚀 Server is running at https://localhost:${
      process.env.PORT || 3000
    }`
  );
});
