import { Router } from "express";
import pool from "../db/db";

const router = Router();

router.post("/santri", async (req, res) => {
  const { name, email, telpon, alamat } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO santri (name, email, telpon, alamat) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, telpon, alamat]
    );
    res.json(result.rows[0]);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/santri", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM santri");
    res.json(result.rows);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/santri/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, telpon, alamat } = req.body;
  try {
    const result = await pool.query(
      "UPDATE santri SET name = $1, email = $2, telpon = $3, alamat = $4 WHERE id = $5 RETURNING *",
      [name, email, telpon, alamat, id]
    );
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/santri/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM santri WHERE id = $1", [id]);
    res.json({ message: "Data berhasil dihapus" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
