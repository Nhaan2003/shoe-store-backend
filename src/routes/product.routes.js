const express = require('express');
const router = express.Router();

// Placeholder product routes
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get all products' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get product by ID' });
});

module.exports = router;