import express from 'express';
import  cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Sample products data
const products = [
  { id: 1, name: 'Laptop', price: 55000 },
  { id: 2, name: 'Phone', price: 20000 },
  { id: 3, name: 'Headphones', price: 1500 },
];

app.get('/api/products', (req, res) => {
    console.log("hi")
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
