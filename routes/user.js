const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: "User endpoint works!" });
});

module.exports = router;
