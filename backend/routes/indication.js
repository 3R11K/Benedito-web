const newDbConn = require("../services/dbConn");
const express = require("express");
const router = express.Router();

router.post("/post/", async (req, res) => {
    const dbConn = new newDbConn();
    const indication = req.body
    const result = await dbConn.createIndication(indication)
    res.json(result);
})

module.exports = router