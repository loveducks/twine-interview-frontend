import React, {useEffect, useState} from "react"
import {Layout, Menu} from "antd"
import {useHistory} from "react-router-dom"

// context
import {CounterContext} from "../context/CounterContext"

// components
import Counter from "../components/Counter"

// helpers
import {getLocalStorage, setLocalStorage} from "../lib/storage"

// constants
import routes from "routes"

const {Header, Content, Sider} = Layout

const HeaderContentLayout = ({children}) => {
	const history = useHistory()
	const [pathname, setPathname] = useState(history.location)
	const [counters, setCounters] = useState(() => getLocalStorage("counters", [{name: "counter 1", count: 0}]))

	useEffect(() => {
		//monitor and update state on path change
		const unlisten = history.listen((location, action) => {
			setPathname(location.pathname)
		})
		//unsubscribe on unmount
		return () => unlisten()
	}, [])

	useEffect(() => {
		//update local storage on state change
		setLocalStorage("counters", counters)
	}, [counters])

	return (
		<Layout>
			<Header>
				<Layout>
					<Menu theme='dark' mode='horizontal'>
						<Menu.Item key='polls' onClick={() => history.push(routes.cpoHqPolls)}>
							Polls
						</Menu.Item>
						<Menu.Item key='forum' onClick={() => history.push(routes.cpoHqForum)}>
							Forum
						</Menu.Item>
						<Menu.Item key='dashboard' onClick={() => history.push(routes.dashboard)}>
							Dashboard
						</Menu.Item>
						<Menu.Item
							key='explorer'
							onClick={() => history.push(routes.explorer.replace("/:reportId?", ""))}>
							Explorer
						</Menu.Item>
					</Menu>
				</Layout>
			</Header>
			<Layout>
				{[routes.cpoHqForum, routes.cpoHqPolls].includes(pathname) && (
					<Sider style={{minHeight: "calc(100vh - 64px)"}}>
						<CounterContext.Provider value={{counters, setCounters}}>
							<Counter />
						</CounterContext.Provider>
					</Sider>
				)}
				<Content style={{padding: 50, minHeight: "calc(100vh - 64px)", height: "100%"}}>{children}</Content>
			</Layout>
		</Layout>
	)
}

export default HeaderContentLayout
