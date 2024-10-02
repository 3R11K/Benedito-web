const newDbConn = require("../services/dbConn");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const imageUpload = require("../services/cloudinary");

router.get("/get", async (req, res) => {
    const { id } = req.query;
    console.log("id: ", id);
    try {
        const dbConn = new newDbConn();

        if (id) {
            const event = await dbConn.getEvent(id);
            if (event) {
                res.json(event);
            } else {
                res.status(404).send("Event not found");
            }
        } else {
            const events = await dbConn.getEvents();
            res.json(events);
        }
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).send("Error fetching events");
    }
});

router.post("/add", upload.single('imagem'), async (req, res) => {
    const dbConn = new newDbConn();
    const { titulo, data_inicio, duracao, local, palestrante, sobre } = req.body;
    const image = req.file;

    console.log(req.body);
    console.log(req.file);

    // Convert data_inicio to a Date object
    const startDate = new Date(data_inicio);

    if (isNaN(startDate)) {
        return res.status(400).send("Invalid date format for data_inicio");
    }

    const event = {
        titulo,
        data_inicio: startDate,
        data_fim: new Date(startDate.getTime() + duracao * 60000),
        duracao,
        local,
        palestrante,
        sobre
    };

    try {
        const imageUploaded = await imageUpload(image);
        event.img = imageUploaded.url;
        await dbConn.createEvent(event);
        res.send({"message": true});
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).send("Error uploading image");
    }
});

module.exports = router;
