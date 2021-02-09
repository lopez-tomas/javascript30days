const hoursHand = document.querySelector('.hour-hand')
const minutesHand = document.querySelector('.min-hand')
const secondsHand = document.querySelector('.second-hand')

const toDegrees = (value, divider) => ((value / divider) * 360) + 90
const changeDegreesOfItem = (item, degrees) => item.style.transform = `rotate(${degrees}deg)`

const setDate = () => {
	const now = new Date()
	const hours = now.getHours()
	const minutes = now.getMinutes()
	const seconds = now.getSeconds()
	
	const hoursDegree = toDegrees(hours, 12)
	changeDegreesOfItem(hoursHand, hoursDegree)

	const minutesDegree = toDegrees(minutes, 60)
	changeDegreesOfItem(minutesHand, minutesDegree)
	
	const secondsDegree = toDegrees(seconds, 60)
	changeDegreesOfItem(secondsHand, secondsDegree)
}

window.onload = () => {
	setInterval(setDate, 1000)
}
