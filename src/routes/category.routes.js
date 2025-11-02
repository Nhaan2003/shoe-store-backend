const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get all categories' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get category by ID' });
});

module.exports = router;