function removeTransition (e) {
	if (e.propertyName !== 'transform') return // skip it if it's not a transform
	this.classList.remove('playing')
}

const getAllKeys = () => {
  const keys = document.querySelectorAll('.key')
	keys.forEach(key => key.addEventListener('transitionend', removeTransition))
}

const playSound = (e) => {
		const keyCode = e.keyCode
		const audio = getAudio(keyCode)
		const key = getKey(keyCode) 		
		audio.currentTime = 0 // rewind to the start
		audio.play()
		key.classList.add('playing')
}

const getAudio = (keyCode) => {
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
	if (!audio) return // stop the function from running all together
	else return audio
}

const getKey = (keyCode) => {
	const key = document.querySelector(`.key[data-key="${keyCode}"]`)
	if (!key) return // stop the function from running all together
	else return key
}

window.onload = () => {
	getAllKeys()	
	window.addEventListener('keydown', playSound)
}
