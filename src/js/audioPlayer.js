import htmlElements from './htmlElements'
const { iconsPlay, iconsPause, audioPlayers } = htmlElements

const playPauseAudioHandler = () => {
	iconsPlay.forEach((iconPlay, i) => {
		iconPlay.addEventListener('click', function () {
			iconsPlay.forEach(iconPlay => iconPlay.classList.add('active'))
			audioPlayers.forEach(audioPlayer => audioPlayer.pause())
			iconsPause.forEach(iconPause => iconPause.classList.remove('active'))
			audioPlayers[i].play()
			iconsPause[i].classList.add('active')
			iconsPlay[i].classList.remove('active')
		})
	})

	iconsPause.forEach((iconPause, i) => {
		iconPause.addEventListener('click', function () {
			iconsPlay.forEach(iconPlay => iconPlay.classList.add('active'))
			audioPlayers[i].pause()
			iconPause.classList.remove('active')
			iconsPlay[i].classList.add('active')
		})
	})
}

export default playPauseAudioHandler
