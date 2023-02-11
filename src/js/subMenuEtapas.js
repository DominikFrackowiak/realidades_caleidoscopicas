import htmlElements from './htmlElements'
const { linkEtapas, etapasSubmenu, navLinks, sections } = htmlElements

const handleSubmenu = () => {
	let isEtapasActive = false

	const add = () => {
		etapasSubmenu.classList.add('active')
		isEtapasActive = !isEtapasActive
	}

	const remove = () => {
		etapasSubmenu.classList.remove('active')
		isEtapasActive = !isEtapasActive
	}

	linkEtapas.addEventListener('click', () => {
		if (!isEtapasActive) {
			add()
		} else {
			remove()
		}
	})

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (!link.classList.contains('etapas') && isEtapasActive) {
				remove()
			}
		})
	})

	sections.forEach(section => {
		section.addEventListener('click', () => {
			if (isEtapasActive) {
				remove()
			}
		})
	})
}

export default handleSubmenu
