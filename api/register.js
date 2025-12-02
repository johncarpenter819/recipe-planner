import bcrypt from "bcryptjs";
import { swl } from "./_lib/db.js";
import { signToken } from "./_lib/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const { rows: existing } =
    await sql`SELECT id FROM users WHERE email = ${email}`;
  if (existing.length > 0) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const { rows } = await sql`INSERT INTO users (name, email, password_hash)
    values(${name}, ${email}, ${hashed})
    RETURNING id, name, email`;

  const user = rows[0];
  const token = signToken({ id: user.id, email: user.email });

  return res.status(201).json({ token, user });
}
