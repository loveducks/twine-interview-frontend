import React, {useContext, useEffect, useState} from "react"
import {Card, Empty, Typography} from "antd"

// context
import {DataContext} from "context/CombinedContext"

// components
import EmployerCard from "components/EmployerCard"

const {Text} = Typography

const Employers = () => {
	const {data, loading} = useContext(DataContext)
	const [groupedData, setGroupedData] = useState({})

	const groupByDate = () => {
		const dates = new Set()
		// get a unique set of dates from our data
		data.map(emp => dates.add(emp.terminated_date))
		let result = {}
		for (let date of dates) {
			data.map(emp => {
				// group by dates
				if (date === emp.terminated_date) {
					//append if not empty
					if (result?.[`${date}`]?.length) result[`${date}`] = [emp, ...result[`${date}`]]
					else result[`${date}`] = [emp]
				}
			})
		}

		/*
			result structure
			{
				"22 March 2021": [
					{ ...employee1},
					{ ...employee2 },
				]
			}
		*/
		setGroupedData(result)
	}

	useEffect(() => {
		groupByDate()
	}, [data])

	return (
		<>
			{data.length === 0 && !loading ? (
				<Empty /> // no data
			) : (
				Object.keys(groupedData).map((key, idx) => (
					<React.Fragment key={idx}>
						<Text>{key}</Text>
						{groupedData[key].map(emp => (
							<Card style={{marginTop: "10px", marginBottom: "10px"}} key={emp.id}>
								<EmployerCard employee={emp} />
							</Card>
						))}
					</React.Fragment>
				))
			)}
		</>
	)
}

export default Employers
