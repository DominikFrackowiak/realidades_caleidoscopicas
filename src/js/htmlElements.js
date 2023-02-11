const htmlElements = {
	sections: [...document.querySelectorAll('.section')],
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
	navLinks: [...document.querySelectorAll('.nav-link')],
	linkEtapas: document.querySelector('.etapas'),
	etapasSubmenu: document.querySelector('.etapas__ul'),
	form: document.querySelector('#tu-opinion'),
	formInput: document.querySelector('.opinion-form__input'),
	formSubmitBtn: document.querySelector('.opinion-form__input'),
	linksToTheCloud: document.querySelectorAll('.link-to-the-cloud'),
	wordCloud: document.querySelector('#nube'),
}

export default htmlElements
