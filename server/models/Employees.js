module.exports = function (sequelize, DataTypes) {
	const Employees = sequelize.define(
		"employees",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			name: {
				type: DataTypes.STRING
			},
			position: {
				type: DataTypes.STRING
			},
			rehire_eligible: {
				type: DataTypes.BOOLEAN
			},
			voluntary: {
				type: DataTypes.BOOLEAN
			},
			terminated_date: {
				type: DataTypes.STRING
			},
			termination_reason: {
				type: DataTypes.STRING
			},
			profile_link: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false
				// defaultValue: Sequelize.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE
				// defaultValue: Sequelize.NOW,
			}
		},
		{
			freezeTableName: true,
			timestamps: true
		}
	)
	return Employees
}
