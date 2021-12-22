import React, {useContext} from "react"
import {Avatar} from "antd"
// context
import {EmployeeContext, DataContext} from "context/CombinedContext"

const DisplayPic = () => {
	const {active} = useContext(DataContext)
	const {employee} = useContext(EmployeeContext)

	const {voluntary} = employee
	return (
		<Avatar
			style={{backgroundColor: active === 1 ? (voluntary ? "#8dd7cf" : "#e9a2ad") : "gray"}}
			shape={"square"}
		/>
	)
}

export default DisplayPic
