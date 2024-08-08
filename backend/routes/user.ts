const newDbConn = require("../db/dbConn.ts");
const userRouter = express.Router();

userRouter.get("/get/:id", async (req, res) => {
    const dbConn = new newDbConn();
    const user = await dbConn.getUser(req.params.id);
    res.json(user);
});

module.exports = userRouter;

