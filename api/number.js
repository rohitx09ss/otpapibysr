import { countries } from "./_data.js";
import { generateNational } from "./_format.js";
import { flag, cors } from "./_utils.js";

// GET /api/number?country=IN            -> 1 number
// GET /api/number?country=IN&count=10   -> 10 alag-alag numbers
// &page=2 optional: bot jaisa "page" (har page par naye numbers)
export default function handler(req, res) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  const c = countries.find(
    (x) => x.code === (req.query.country || "").toUpperCase()
  );
  if (!c) return res.status(400).json({ error: "Invalid country" });
  if (generateNational(c.code) === null)
    return res.status(400).json({ error: "No number format for this country" });

  const count = Math.min(Math.max(parseInt(req.query.count) || 1, 1), 20);
  const set = new Set();
  let tries = 0;
  while (set.size < count && tries++ < count * 50) {
    set.add(c.dial + generateNational(c.code));
  }
  const numbers = [...set];

  res.json({
    country: c.code,
    name: c.name,
    flag: flag(c.code),
    price: c.price,
    dial: c.dial,
    page: Math.max(1, parseInt(req.query.page) || 1),
    number: numbers[0],
    numbers,
  });
}
