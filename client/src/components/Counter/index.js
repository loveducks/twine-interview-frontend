import React, {useContext} from "react"
import {Row, Col, Button, Typography, Divider} from "antd"
import {CaretDownFilled, CaretUpFilled, EditFilled, DeleteFilled, PlusOutlined} from "@ant-design/icons"

// context
import {CounterContext} from "../../context/CombinedContext"

// style
import "./style.css"

const {Paragraph, Text} = Typography

function Counter() {
	const {counters, setCounters} = useContext(CounterContext)

	const _handleClick = (increment, id) => {
		let countersArr = [...counters]
		// update counter based on id and action
		if (increment) {
			countersArr[id] = {...countersArr[id], count: countersArr[id].count + 1}
			setCounters(countersArr)
		} else {
			countersArr[id] = {...countersArr[id], count: countersArr[id].count - 1}
			setCounters(countersArr)
		}
	}

	const _handleChange = (name, id) => {
		// update counter name
		let countersArr = [...counters]
		countersArr[id] = {...countersArr[id], name: name}
		setCounters(countersArr)
	}

	const _addCounter = () => {
		// add a new counter with default values
		setCounters([...counters, {name: `counter ${counters.length + 1}`, count: 0}])
	}

	const _removeCounter = id => {
		let counter = [...counters]
		// remove the selected counter from the array
		counter.splice(id, 1)
		setCounters(counter)
	}

	return (
		<Row>
			<Divider plain />
			{counters.map((counter, id) => (
				<Col key={id} span={24}>
					<Row justify={"center"}>
						<Col span={14}>
							<Paragraph
								editable={{onChange: value => _handleChange(value, id)}}
								style={{color: "white"}}>
								{counter.name}
							</Paragraph>
						</Col>
						<Col span={4}>
							<Text strong style={{color: "white"}}>
								{counter.count}
							</Text>
						</Col>
					</Row>
					<Row justify={"center"}>
						<Col span={6}>
							<Button type='primary' onClick={() => _handleClick(true, id)}>
								<CaretUpFilled />
							</Button>
						</Col>
						<Col span={6}>
							<Button type='primary' onClick={() => _handleClick(false, id)}>
								<CaretDownFilled />
							</Button>
						</Col>
						<Col span={6}>
							<Button type='primary' danger onClick={() => _removeCounter(id)}>
								<DeleteFilled />
							</Button>
						</Col>
					</Row>
					<Divider plain style={{marginTop: "10px", marginBottom: "20px"}} />
				</Col>
			))}
			<Col span={18} offset={3}>
				<Button onClick={() => _addCounter()} block>
					<PlusOutlined />
				</Button>
			</Col>
		</Row>
	)
}

export default Counter
