const getKeyDown = () => {
	window.addEventListener('keydown', function(e){
		const keyCode = e.keyCode
		const audio = getAudio(e.keyCode)
		audio.currentTime = 0 // rewind to the start
		audio.play()
	})
}

const getAudio = (keyCode) => {
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
	if (!audio) return // stop the function from running all together
	else return audio
};

window.onload = () => {
	getKeyDown()
}
