// Bot ke helper functions ab API me (flag, search, pagination)

export function flag(code) {
  // US2 jaise code ke liye pehle 2 letters (bot wala same logic)
  return [...String(code).slice(0, 2).toUpperCase()]
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}

export function searchCountries(items, q) {
  if (!q) return items;
  const s = String(q).toLowerCase();
  return items.filter(
    (c) =>
      c.name.toLowerCase().includes(s) ||
      c.code.toLowerCase() === s ||
      c.dial.includes(s)
  );
}

export function paginate(items, page, perPage) {
  const per = Math.max(1, parseInt(perPage) || 16);
  const pages = Math.max(1, Math.ceil(items.length / per));
  const p = Math.max(1, Math.min(parseInt(page) || 1, pages));
  return {
    total: items.length,
    page: p,
    pages,
    per_page: per,
    items: items.slice((p - 1) * per, p * per),
  };
}

export function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
}
