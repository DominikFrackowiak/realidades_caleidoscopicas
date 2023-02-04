import htmlElements from './htmlElements'
const { linksToTranscripts, transcripts, closeTranscriptXs } = htmlElements

const handleTranscripts = () => {
	linksToTranscripts.forEach((link, index) => {
		link.addEventListener('click', () => {
			transcripts.forEach(transcript => {
				if (transcript.closest('section').classList.contains('bg-white')) {
					transcript.closest('section').style.backgroundColor = 'var(--white)'
				}
				transcript.classList.remove('active')
				transcript.closest('section').style.minHeight = `100vh`
			})
			transcripts[index].classList.add('active')
			if (
				transcripts[index].closest('section').classList.contains('bg-white')
			) {
				transcripts[index].closest('section').style.backgroundColor =
					'var(--lightblue)'
			}
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
			if (
				transcripts[index].closest('section').classList.contains('bg-white')
			) {
				transcripts[index].closest('section').style.backgroundColor =
					'var(--white)'
			}
		})
	})
}

export default handleTranscripts
