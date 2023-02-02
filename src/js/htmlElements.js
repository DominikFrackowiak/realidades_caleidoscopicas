const htmlElements = {
	transcripts: document.querySelectorAll('.transcription'),
	linksToTranscripts: document.querySelectorAll('.audio-wrapper__a'),
	closeTranscriptXs: document.querySelectorAll('.transcription__close'),
	audioPlayers: document.querySelectorAll('.audio-wrapper__player'),
	iconsPlay: document.querySelectorAll('.audio-wrapper__icon--play'),
	iconsPause: document.querySelectorAll('.audio-wrapper__icon--pause'),
	hamburger: document.querySelector('.nav-icon__hamburger'),
	xClose: document.querySelector('.nav-icon__close'),
	navMobile: document.querySelector('nav.nav-mobile'),
	mobileNavLinks: [...document.querySelectorAll('.nav-mobile__link')],
}

export default htmlElements
