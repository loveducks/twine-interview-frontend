import React, {useContext, useState} from "react"
import {Card, Avatar, Modal, Row, Col, Typography, Divider, Input, Button} from "antd"
// component
import EmployerModal from "components/EmployerModal"
// context
import {EmployeeContext, DataContext} from "context/CombinedContext"
// styles
import "./style.css"
import DisplayPic from "components/DisplayPic"

const {Meta} = Card

const EmployerCard = props => {
	const [visible, setVisible] = useState(false)
	const [employee, setEmployee] = useState(props.employee)

	const {name, position} = employee

	const namePos = name + ", " + position

	return (
		<>
			<EmployeeContext.Provider value={{employee, visible, setVisible}}>
				<Meta avatar={<DisplayPic />} title={namePos} onClick={() => setVisible(true)} />
				<EmployerModal />
			</EmployeeContext.Provider>
		</>
	)
}

export default EmployerCard
