import handleTranscripts from './transcripts'
import playPauseAudioHandler from './audioPlayer'
import handleMobileNavigation from './navigationMobile'
import handleHamburgerStyle from './hamburgerMenu'
import handleScrollSpy from './scroll-spy'

const init = () => {
	handleTranscripts()
	playPauseAudioHandler()
	handleMobileNavigation()
	handleHamburgerStyle()
	handleScrollSpy()
}

document.addEventListener('DOMContentLoaded', init)
