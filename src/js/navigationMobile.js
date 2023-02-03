import htmlElements from './htmlElements'

const { hamburger, xClose, navMobile, mobileNavLinks } = htmlElements

const handleMobileNavigation = () => {
	xClose.addEventListener('click', function () {
		hamburger.style.display = 'block'
		xClose.style.display = 'none'
		navMobile.classList.remove('active')
	})

	hamburger.addEventListener('click', function () {
		window.scrollTo(0, 0)
		hamburger.style.display = 'none'
		xClose.style.display = 'block'
		navMobile.classList.add('active')
	})

	mobileNavLinks.forEach(link =>
		link.addEventListener('click', function () {
			hamburger.style.display = 'block'
			xClose.style.display = 'none'
			navMobile.classList.remove('active')
		})
	)
}

export default handleMobileNavigation
