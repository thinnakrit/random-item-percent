export default ({
	itemsList = []
}) => {
	let chances = []

	const sum = itemsList.reduce(
		(prev, curr) => prev + curr.percent,
		0
	)

	let acc = 0
	chances = itemsList.map(
		({ percent }) => (acc = percent + acc)
	)

	const rand = Math.random() * sum

	const itemIndex = chances.filter((el) => el <= rand)
		.length

	const result = itemsList.find(
		(_, index) => index === itemIndex
	)

	return {
		itemEnum: result ? result.itemEnum : null,
		item: result ? result : {}
	}
}