const coinsModel = require("../models/coinsModel.js");
const usersModel = require("../models/usersModel.js");

const createUser = async (
	email,
	firstname,
	lastname,
	password
) => {
  try {
		let noDuplicated = await usersModel.find({ email: email });

		if (noDuplicated.length) {
			return `${email} logIn`;
		}
		await usersModel.create(
			{
				email,
				firstname,
				lastname,
				password,
			},
			function (err) {
				if (err) return console.error(err);
			}
		);
		return "User created successfully";
	} catch (error) {
		console.error("Error in createUser:", error);
	}
};

const updateUser = async (id, user) => {
	try {
		if (id.length !== 24) {
			return "User doesn't exist";
		}
		await usersModel.findByIdAndUpdate(id, user);
		let update = await usersModel.findById(id);
		if (update !== undefined && update !== null) return [update];
		return "User doesn't exist: Object empty";
	} catch (error) {
		console.log(error);
	}
};

const deleteUser = async (id) => {
	try {
		if (id.length !== 24) {
			return "User never existed";
		}
		const deleted = await usersModel.findByIdAndDelete(id);
		if (deleted !== undefined && deleted !== null) return "User was deleted";
		return "User never existed: Object empty";
	} catch (error) {
		console.error("Error in deleteUser:", error);
	}
};

const getUserById = async (id) => {
	try {
		const user = await usersModel.findById(id);
		if (user) return [user];
		return "User not found";
	} catch (error) {
		console.error("Error in getUserById:", error);
	}
};

const getUserByEmail = async (email) => {
	try {
		const user = await usersModel.findOne({ email: email })
		if (user) return [user];
		return "User not found";
	} catch (error) {
		console.error("Error in getUserByEmail:", error);
	}
};


const getAllUsers = async () => {
	try {
		const users = await usersModel.find();
		if (users) return users;
		return "Users not found";
	} catch (error) {
		console.error("Error in getAllUsers:", error);
	}
};

const getAllInvestments = async () => {
	try {
	 const allInvestments = await investmentsModel.find({})
	 return allInvestments;
	} catch (error) {
	 console.error("Error in getAllInvestments:", error);
	}
   };
   

// coins
async function getAllCoins() {
	try {
		const allCoins = await coinsModel.find({});
		return allCoins;
	} catch (error) {
		console.error("Error in getCoins:", error);
	}
}
		

module.exports = {
	createUser,
	getUserByEmail,
	getUserById,
	deleteUser,
	updateUser,
	getAllUsers,
	getAllCoins,
	getAllInvestments,
};
