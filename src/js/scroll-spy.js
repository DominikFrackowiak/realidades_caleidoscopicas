import htmlElements from "./htmlElements"
const {navLinks: links} = htmlElements

const handleScrollSpy=()=>{
 function onScroll(event) {
		const scrollPos = window.scrollY
		links.forEach(link => {
			const refElement = document.querySelector(link.getAttribute('href'))
			if (
				refElement.offsetTop <= scrollPos &&
				refElement.offsetTop + refElement.offsetHeight > scrollPos
			) {
				links.forEach(l => l.classList.remove('active'))
				link.classList.add('active')
			} else {
				link.classList.remove('active')
			}
		})
 }

 document.addEventListener('scroll', onScroll)

 links.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault()
			document.removeEventListener('scroll', onScroll)

			links.forEach(l => l.classList.remove('active'))
			link.classList.add('active')

			const target = document.querySelector(this.getAttribute('href'))
			window.scrollTo({
				top: target.offsetTop,
				behavior: 'smooth',
			})

			document.addEventListener('scroll', onScroll)
		})
 })

}

export default handleScrollSpy
