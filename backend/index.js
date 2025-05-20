const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'data' directory
app.use('/data', express.static(path.join(__dirname, 'data')));

// File paths
const productsPath = path.join(__dirname, 'data', 'products.json');
const cartPath = path.join(__dirname, 'data', 'cart.json');

// Helper function to read JSON files
async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    throw error;
  }
}

// Helper function to write JSON files
async function writeJsonFile(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    throw error;
  }
}

// GET /api/products
app.get('/api/products', async (req, res) => {
  try {
    const products = await readJsonFile(productsPath);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/cart
app.get('/api/cart', async (req, res) => {
  try {
    const cart = await readJsonFile(cartPath);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

// POST /api/cart
app.post('/api/cart', async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    const products = await readJsonFile(productsPath);
    const cart = await readJsonFile(cartPath);
    
    const product = products.find(p => p.id === productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        productId,
        quantity: 1,
        ...product
      });
    }

    await writeJsonFile(cartPath, cart);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// DELETE /api/cart/:id
app.delete('/api/cart/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const cart = await readJsonFile(cartPath);
    
    const updatedCart = cart.filter(item => item.productId !== productId);
    await writeJsonFile(cartPath, updatedCart);
    
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

// POST /api/cart/buy
app.post('/api/cart/buy', async (req, res) => {
  try {
    await writeJsonFile(cartPath, []);
    res.json({ message: 'Purchase successful! Cart cleared.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process purchase' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 