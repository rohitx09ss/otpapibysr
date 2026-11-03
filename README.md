# Dummy OTP API (sab fake/random, sirf testing)

Sirf API hai (bot hata diya). Vercel par deploy karo, Root Directory khali rakho.

## Endpoints
- `/api` : info
- `/api/countries` : poori list (flag ke saath)
  - `?q=ind` search (naam / code / dial)
  - `?page=1&per_page=16` pagination -> `{total,page,pages,per_page,items}`
- `/api/number?country=IN&count=10&page=1` : numbers (max 20)
- `/api/otp?number=+916043388827` : random 6 digit OTP

## Price rule
- Screenshot wale countries: same price
- Top 50 (baaki): 22-78
- Baaki sab: market 113/123
