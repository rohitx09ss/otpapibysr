import { cors } from "./_utils.js";

// GET /api/otp?number=+911234567890  (dummy random OTP)
export default function handler(req, res) {
  cors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  const { number } = req.query;
  if (!number) return res.status(400).json({ error: "number required" });
  const otp = Math.floor(100000 + Math.random() * 900000);
  res.json({ number, otp: String(otp) });
}
