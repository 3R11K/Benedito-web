const newDbConn = require("../services/dbConn");
const express = require("express")
const router = express.Router();

router.get("/get/", async (req, res) => {
    const dbConn = new newDbConn();
    const events = await dbConn.getEvents();
    res.json(events);
})

module.exports = router