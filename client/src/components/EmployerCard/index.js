import React, {useState} from "react"
import {Card, Avatar, Modal, Row, Col, Typography, Divider, Input, Button} from "antd"
// component
import EmployerModal from "components/EmployerModal"
// context
import {EmployeeContext} from "context/CombinedContext"
// styles
import "./style.css"

const {Meta} = Card

const EmployerCard = props => {
	const [visible, setVisible] = useState(false)
	const [employee, setEmployee] = useState(props.employee)

	const {name, position, voluntary} = employee
	const avatar = () => <Avatar style={{backgroundColor: voluntary ? "#8dd7cf" : "#e9a2ad"}} shape={"square"} />

	const namePos = name + ", " + position

	return (
		<>
			<Meta avatar={avatar()} title={namePos} onClick={() => setVisible(true)} />
			<EmployeeContext.Provider value={{employee, visible, setVisible}}>
				<EmployerModal />
			</EmployeeContext.Provider>
		</>
	)
}

export default EmployerCard
