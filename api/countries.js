import { countries } from "./_data.js";
import { flag, searchCountries, paginate, cors } from "./_utils.js";

// GET /api/countries                       -> poori list (array, pehle jaisa)
// GET /api/countries?q=ind                 -> search (naam / code / dial)
// GET /api/countries?page=1&per_page=16    -> pagination (bot jaisa 16/page)
export default function handler(req, res) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  const { q, page, per_page } = req.query;
  const list = searchCountries(
    countries.map((c) => ({ ...c, flag: flag(c.code) })),
    q
  );

  if (page !== undefined || per_page !== undefined) {
    return res.json(paginate(list, page, per_page));
  }
  res.json(list);
}
