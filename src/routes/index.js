const express = require('express');
const router = express.Router();

// Health check route first
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

// Import và test từng route một
try {
  const authRoutes = require('./auth.routes');
  router.use('/auth', authRoutes);
} catch (error) {
  console.error('Error loading auth routes:', error.message);
}

try {
  const productRoutes = require('./product.routes');
  router.use('/products', productRoutes);
} catch (error) {
  console.error('Error loading product routes:', error.message);
}

try {
  const categoryRoutes = require('./category.routes');
  router.use('/categories', categoryRoutes);
} catch (error) {
  console.error('Error loading category routes:', error.message);
}

try {
  const brandRoutes = require('./brand.routes');
  router.use('/brands', brandRoutes);
} catch (error) {
  console.error('Error loading brand routes:', error.message);
}

// Protected routes - tạm thời comment để test
// const authMiddleware = require('../middlewares/auth.middleware');
// router.use('/users', authMiddleware, require('./user.routes'));
// router.use('/cart', authMiddleware, require('./cart.routes'));
// router.use('/orders', authMiddleware, require('./order.routes'));

// Admin routes
try {
  const adminRoutes = require('./admin');
  router.use('/admin', adminRoutes);
} catch (error) {
  console.error('Error loading admin routes:', error.message);
}

module.exports = router;