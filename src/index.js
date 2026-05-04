require('dotenv').config();

const express = require('express');

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server only when executed directly (e.g. `node src/index.js`)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
}

module.exports = app;
