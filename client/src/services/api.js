export const get = async endpoint => {
	const response = await fetch(endpoint, {
		method: "GET"
	})
	const res = await response.json()
	return res
}

export const post = async (endpoint, data) => {
	const response = await fetch(endpoint, {
		method: "POST",
		body: JSON.stringify(data)
	})
	const res = await response.json()
	return res
}
