const { Router } = require("express");
const { getAllCoins } = require("../controllers/controllers");
const router = Router();


router.get("/", async (req, res) => {
    try {
        console.log("getAllCoins")
        const allCoins = await getAllCoins();
        if (allCoins) {
            return res.status(200).send(allCoins);
        }
    } catch (error) {
        console.log("Try/catch error!");
        res.status(404).json({ error: error.message });
    }
});




    

module.exports = router;