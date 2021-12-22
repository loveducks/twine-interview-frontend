import React, {useContext, useState} from "react"
import {Avatar, Modal, Row, Col, Typography, Input, Button, message} from "antd"
// components
import DisplayPic from "components/DisplayPic"
// context
import {DataContext, EmployeeContext} from "context/CombinedContext"
// styles
import "./style.css"

const {Link, Text} = Typography

const EmployerModal = () => {
	const {employee, visible, setVisible} = useContext(EmployeeContext)
	const {active} = useContext(DataContext)

	const [body, setBody] = useState("")
	const [error, setError] = useState(false)

	const {name, position, rehire_eligible, voluntary, profile_link, termination_reason} = employee

	const namePos = name + ", " + position
	const showSubmit = rehire_eligible && voluntary

	const success = () => {
		message.success("Email Sent (No api calls here)")
	}

	const _handleSubmit = async () => {
		if (body.trim() === "") {
			setError(true)
			// sleep for 2 seconds
			await new Promise(r => setTimeout(r, 2000))
			setError(false)
		} else {
			setError(false)
			setBody("")
			success()
		}
	}

	return (
		<Modal
			visible={visible}
			onCancel={() => setVisible(false)}
			footer={null}
			bodyStyle={{height: showSubmit ? 300 : 200}}>
			<Row justify='start' className='ant-card-meta' gutter={[15, 25]}>
				<Col>
					<DisplayPic />
				</Col>
				<Col>
					<div>{namePos}</div>
				</Col>
			</Row>
			<Row gutter={[15, 15]}>
				<Col>
					Go to{" "}
					<Link href={profile_link} target='_blank'>
						{name}'s Profile
					</Link>
				</Col>
			</Row>
			<Row gutter={[15, 100]}>
				<Col>{termination_reason || <em>No recorded termination reason</em>}</Col>
			</Row>
			{/* voluntary: true
				rehire_eligible: true
			*/}
			{showSubmit && (
				<Row gutter={[5, 15]}>
					<Input.Group compact>
						<Input
							style={{width: "calc(100% - 120px)"}}
							placeholder={`Reach out to ${name}`}
							onChange={e => setBody(e.target.value)}
							value={body}
						/>
						<Button type='primary' onClick={() => _handleSubmit()}>
							Send Email
						</Button>
						{error && <Text type='danger'>Body can't be empty</Text>}
					</Input.Group>
				</Row>
			)}
		</Modal>
	)
}

export default EmployerModal
