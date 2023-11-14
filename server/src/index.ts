import express, { Request, Response } from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "products_bd",
});

db.connect((err) => {
  if (err) {
    console.error("erreur de connexion :" + err.stack);
    return;
  }
  console.log("Connexion réussie à la bdd");
});

app.get("/products", async (req: Request, res: Response) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/cart", async (req: Request, res: Response) => {
  const q = "SELECT * FROM cart";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/add-to-cart", async (req: Request, res: Response) => {
  const productId = req.body.productId;

  // Vérifier d'abord si le produit est en stock
  const checkStockQuery = "SELECT inventory FROM products WHERE id = ?";
  db.query(checkStockQuery, [productId], (stockErr, stockData) => {
    if (stockErr) return res.status(500).json(stockErr);

    const currentStock = stockData[0].inventory;

    if (currentStock <= 0) {
      return res.status(400).json({ message: "Le produit est en rupture de stock." });
    }

    // Si le produit est en stock, effectuer l'ajout au panier et décrémentez le stock
    const addToCartQuery = "INSERT INTO cart ( product_id) VALUES (?)";
    db.query(addToCartQuery, [productId], (addToCartErr) => {
      if (addToCartErr) return res.status(500).json(addToCartErr);

      // Décrémenter le stock
      const updateStockQuery = "UPDATE products SET inventory = ? WHERE id = ?";
      db.query(updateStockQuery, [currentStock - 1, productId], (updateStockErr) => {
        if (updateStockErr) return res.status(500).json(updateStockErr);

        return res.status(200).json({ message: "Produit ajouté au panier avec succès." });
      });
    });
  });
});


app.listen(5000, () => {
  console.log("server en ligne!");
});
