"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"employees",
			[
				{
					id: 0,
					name: "Tim",
					position: "Senior Software Engineer",
					rehire_eligible: true,
					voluntary: true,
					terminated_date: "23 March 2021",
					termination_reason: null,
					profile_link: "https://linkedin.com", // Meant to be the homepage of linkedin as a mock
					email: "tim@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					id: 1,
					name: "Bob",
					position: "Senior Software Engineer",
					rehire_eligible: true,
					voluntary: false,
					terminated_date: "22 March 2021",
					termination_reason: null,
					profile_link: "https://linkedin.com",
					email: "bob@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					id: 2,
					name: "Susan",
					position: "Senior Software Engineer",
					rehire_eligible: true,
					voluntary: true,
					terminated_date: "22 March 2021",
					termination_reason: "Left because of a new opportunity",
					profile_link: "https://linkedin.com",
					email: "susan@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					id: 3,
					name: "De Gea",
					position: "Senior Software Engineer",
					rehire_eligible: false,
					voluntary: true,
					terminated_date: "23 March 2021",
					termination_reason: null,
					profile_link: "https://linkedin.com",
					email: "de_gea@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					id: 4,
					name: "Pogba",
					position: "Senior Software Engineer",
					rehire_eligible: false,
					voluntary: true,
					terminated_date: "22 March 2021",
					termination_reason: null,
					profile_link: "https://linkedin.com",
					email: "pogba@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					id: 5,
					name: "Juan",
					position: "Senior Software Engineer",
					rehire_eligible: false,
					voluntary: true,
					terminated_date: "22 March 2021",
					termination_reason: null,
					profile_link: "https://linkedin.com",
					email: "pogba@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					id: 6,
					name: "Juan",
					position: "Senior Software Engineer",
					rehire_eligible: false,
					voluntary: true,
					terminated_date: "23 March 2021",
					termination_reason: null,
					profile_link: "https://linkedin.com",
					email: "juan@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		// await queryInterface.bulkDelete("employees", null, bulkDeleteOptions)
	}
}
