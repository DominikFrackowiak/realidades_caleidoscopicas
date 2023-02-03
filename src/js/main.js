import handleTranscripts from './transcripts'
import playPauseAudioHandler from './audioPlayer'
import handleMobileNavigation from './navigationMobile'
import handleHamburgerStyle from './hamburgerMenu'

const init = () => {
	handleTranscripts()
	playPauseAudioHandler()
	handleMobileNavigation()
	handleHamburgerStyle()
}

document.addEventListener('DOMContentLoaded', init)
