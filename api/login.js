import bcrypt from "bcryptjs";
import { sql } from "./_lib/db.js";
import { signToken } from "./_lib/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body || {};

  const { rows } =
    await sql`SELECT id, name, email, password_hash FROM users WHERE email = ${email}`;

  if (rows.length === 0) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password_hash);

  if (!match) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = signToken({ id: user.id, email: user.email });

  return res.status(200).json({ token, user });
}
