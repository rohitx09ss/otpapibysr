import { countries } from "./_data.js";
import { cors } from "./_utils.js";

// GET /api  -> API ki info
export default function handler(req, res) {
  cors(res);
  res.json({
    name: "otp-dummy-api",
    status: "ok",
    total_countries: countries.length,
    endpoints: {
      countries: "/api/countries?q=&page=&per_page=",
      number: "/api/number?country=IN&count=10&page=1",
      otp: "/api/otp?number=+916043388827",
    },
  });
}
