const express = require('express');
const router = express.Router();

router.get("/login", (req, res) => {
    res.json("true");
});

module.exports = router;