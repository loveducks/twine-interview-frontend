const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()

const {Sequelize} = require("sequelize")
const Op = Sequelize.Op
const sequelize = new Sequelize(
	process.env.DATABASE_NAME,
	process.env.DATABASE_USERNAME,
	process.env.DATABASE_PASSWORD,
	{
		host: process.env.DATABASE_HOST,
		dialect: "postgres"
	}
)

const employeeModel = require("./models/Employees")
const models = {
	Employees: employeeModel(sequelize, Sequelize.DataTypes)
}

const {Employees} = models

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(express.json())
app.get("/employees", async (req, res, next) => {
	try {
		let {is_active, rehire_eligible} = req.query
		if (rehire_eligible == "null") rehire_eligible = null
		let whereClause = {
			[Op.ne]: null
		}
		if (!is_active)
			whereClause = {
				[Op.eq]: null
			}
		const employees = await Employees.findAndCountAll({
			where: {
				rehire_eligible: rehire_eligible,
				terminated_date: whereClause
			}
		})
		if (employees.count) res.json({data: employees.rows})
		else res.status(404).json({data: [], message: "No results found"})
	} catch (err) {
		console.log(err)
		res.status(500).json(err)
	}
})

app.listen(8080, () => console.log("server listening on port 8080"))
