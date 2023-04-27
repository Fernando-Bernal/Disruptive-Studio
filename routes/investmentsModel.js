const { Router } = require("express");
const { getAllInvestments } = require("../controllers/controllers");
const router = Router();
const investmentsModel = require("../models/investmentsModel");


router.get("/", async (req, res) => {
	try {
		const allInvestments = await getAllInvestments();
		return res.status(200).send(allInvestments);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

router.get("/user/:id", async (req, res) => {
 try {
  const userInvestments = await investmentsModel.find({ userId: req.params.id });
  return res.status(200).send(userInvestments);
 } catch (error) {
  console.log("Try/catch error!");
  res.status(404).json({ error: error.message });
 }
});

router.post("/", async (req, res) => {
 try {
  const newInvestment = await investmentsModel.create(req.body);
  return res.status(201).send(newInvestment);
 } catch (error) {
  console.log("Try/catch error!");
  res.status(404).json({ error: error.message });
 }
});



module.exports = router;