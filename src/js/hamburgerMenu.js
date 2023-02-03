import htmlElements from './htmlElements'
const { sections, hamburger } = htmlElements

const handleHamburgerStyle = () => {
	window.addEventListener('scroll', () => {
		sections.forEach(section => {
			if (
				section.getBoundingClientRect().top < window.innerHeight &&
				section.getBoundingClientRect().bottom >= 0 &&
				(section.getBoundingClientRect().top < 30 ||
					section.getBoundingClientRect().bottom <= 30)
			) {
				if (section.classList.contains('bg-white')) {
					hamburger.style.color = 'var(--darkblue)'
				} else {
					hamburger.style.color = 'var(--white)'
				}
			}
		})
	})
}

export default handleHamburgerStyle
