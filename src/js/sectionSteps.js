import htmlElements from './htmlElements'
const { linksToTranscripts, transcripts, closeTranscriptXs } = htmlElements
console.log(transcripts, linksToTranscripts)

const sectionSteps = () => {
	linksToTranscripts.forEach((link, index) => {
		link.addEventListener('click', () => {
			transcripts[index].classList.add('active')
			const height = transcripts[index].offsetHeight
			transcripts[index].closest('section').style.minHeight = `${height}px`
			transcripts[index].closest('section').style.alignItems = 'start'
		})

		window.addEventListener('resize', () => {
			const height = transcripts[index].offsetHeight
			transcripts[index].closest('section').style.minHeight = `${height}px`
			transcripts[index].closest('section').style.alignItems = 'start'
		})
	})

	closeTranscriptXs.forEach((link, index) => {
		link.addEventListener('click', () => {
			transcripts[index].classList.remove('active')
			transcripts[index].closest('section').style.minHeight = `100vh`
			transcripts[index].closest('section').style.alignItems = 'center'
		})
	})
}

export default sectionSteps
