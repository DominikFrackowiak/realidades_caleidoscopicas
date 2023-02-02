import htmlElements from './htmlElements'

const { hamburger, xClose, navMobile, mobileNavLinks } = htmlElements

const handleMobileNavigation = () => {
	xClose.addEventListener('click', function () {
		hamburger.style.display = 'block'
		navMobile.classList.remove('active')
	})

	hamburger.addEventListener('click', function () {
		window.scrollTo(0, 0)
		hamburger.style.display = 'none'
		navMobile.classList.add('active')
	})

	mobileNavLinks.forEach(link =>
		link.addEventListener('click', function () {
			hamburger.style.display = 'block'
			navMobile.classList.remove('active')
		})
	)
}

export default handleMobileNavigation
