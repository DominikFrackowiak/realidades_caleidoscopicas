import sectionSteps from './sectionSteps'
import playPauseAudioHandler from './audioPlayer'
import handleMobileNavigation from './navigationMobile'

const init = () => {
	sectionSteps()
	playPauseAudioHandler()
	handleMobileNavigation()
}

document.addEventListener('DOMContentLoaded', init)
