const newDbConn = require("../services/dbConn");
const express = require("express")
const router = express.Router();

router.get("/get/", async (req, res) => {
    const dbConn = new newDbConn();
    const events = await dbConn.getEvents();
    res.json(events);
})

router.post("/post/", async (req, res) => {
    const dbConn = new newDbConn();
    const event = req.body
    const result = await dbConn.createEvent(event)
    res.json(result);
})

module.exports = router