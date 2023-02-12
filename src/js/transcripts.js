import htmlElements from './htmlElements'
const { linksToTranscripts, transcripts, closeTranscriptXs } = htmlElements

const handleTranscripts = () => {
	const handleHightAndAlignment = (index, height, alignment) => {
		transcripts[index].closest('section').style.minHeight = `${
			typeof height === 'number' ? `${height}px` : height
		}`
		transcripts[index].closest('section').style.alignItems = `${alignment}`
	}

	const handleBgColorChange = (transcript, color) => {
		transcript.closest('section').style.backgroundColor = `${color}`
	}

	linksToTranscripts.forEach((link, index) => {
		link.addEventListener('click', () => {
			transcripts.forEach(transcript => {
				if (transcript.closest('section').classList.contains('bg-white')) {
					handleBgColorChange(transcript, 'var(--white)')
				}
				transcript.classList.remove('active')
				transcript.closest('section').style.minHeight = `100vh`
			})
			transcripts[index].classList.add('active')
			if (
				transcripts[index].closest('section').classList.contains('bg-white')
			) {
				handleBgColorChange(transcripts[index], 'var(--lightblue)')
			}
			const height = transcripts[index].offsetHeight
			handleHightAndAlignment(index, height, 'start')

			window.addEventListener('resize', () => {
				const height = transcripts[index].offsetHeight
				handleHightAndAlignment(index, height, 'start')
			})
		})
	})

	closeTranscriptXs.forEach((link, index) => {
		link.addEventListener('click', () => {
			transcripts[index].classList.remove('active')
			handleHightAndAlignment(index, '100vh', 'center')
			if (
				transcripts[index].closest('section').classList.contains('bg-white')
			) {
				handleBgColorChange(transcripts[index], 'var(--white)')
			}
		})
	})
}

export default handleTranscripts
