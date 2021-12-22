const express = require("express")
const router = express.Router()
require("dotenv").config()

const {Sequelize} = require("sequelize")
const sequelize = new Sequelize(
	process.env.DATABASE_NAME,
	process.env.DATABASE_USERNAME,
	process.env.DATABASE_PASSWORD,
	{
		host: process.env.DATABASE_HOST,
		dialect: "postgres"
	}
)

const employeeModel = require("../models/Employees")
const models = {
	Employees: employeeModel(sequelize, Sequelize.DataTypes)
}

const {Employees} = models

router.get("/employees", async (req, res) => {
	try {
		let {rehire_eligible} = req.query
		if (rehire_eligible == "null") rehire_eligible = null
		const employees = await Employees.findAndCountAll({
			where: {
				rehire_eligible
			}
		})
		if (employees.count) res.json({data: employees.rows})
		else res.status(404).json({data: [], message: "No results found"})
	} catch (err) {
		console.log(err)
		res.status(500).json(err)
	}
})

module.exports = router
