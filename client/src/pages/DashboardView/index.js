import React, {useEffect, useState} from "react"
import {Typography, Tabs, Card, Spin, Row, Col} from "antd"

// components
import Employers from "../../components/Employers"
// context
import {DataContext} from "../../context/CombinedContext"
// helpers
import {get} from "../../services/api"

const {Title} = Typography
const {TabPane} = Tabs

const DashboardView = () => {
	const [active, setActive] = useState(1)
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	const _fetchData = id => {
		//update params based on tab selected
		let params = "?is_active=False&rehire_eligible=true"
		if (id === 2) {
			params = "?is_active=False&rehire_eligible=false"
		} else if (id === 3) {
			params = "?is_active=False&rehire_eligible=null"
		}

		get(`/employees${params}`)
			.then(res => {
				setData(res.data)
			})
			.catch(err => {
				console.log(err)
				setData([])
			})
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		// resets state before every tab change
		setLoading(true)
		setData([])
		_fetchData(active)
	}, [active])

	const tabs = ["Rehire Eligible", "Rehire Ineligible", "Rehire Unknown"]

	return (
		<div>
			<Row justify='center'>
				<Col span={12}>
					<Title level={1}>Attrition Timeline</Title>
				</Col>
			</Row>
			<Row justify='center'>
				<Col span={12}>
					<Card>
						<Tabs defaultActiveKey='1' onChange={e => setActive(Number(e))}>
							{tabs.map((tab, id) => (
								<TabPane tab={tab} key={id + 1}>
									<Row justify='center'>
										<Spin spinning={loading} />
									</Row>
									<DataContext.Provider value={{data, loading}}>
										<Employers />
									</DataContext.Provider>
								</TabPane>
							))}
						</Tabs>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default DashboardView
