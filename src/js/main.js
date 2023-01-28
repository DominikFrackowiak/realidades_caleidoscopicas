const transcripts = document.querySelectorAll('.transcription')
const linksToTranscripts = document.querySelectorAll('.audio-wrapper__a')
const closeTranscriptXs = document.querySelectorAll('.transcription__close')

linksToTranscripts.forEach((link, index) => {
	link.addEventListener('click', () => {
		transcripts[index].classList.add('active')
		const height = transcripts[index].offsetHeight
		console.log(height)
		transcripts[index].closest('section').style.minHeight = `${height}px`
	})
})

closeTranscriptXs.forEach((link, index) => {
	link.addEventListener('click', () => {
		transcripts[index].classList.remove('active')
		transcripts[index].closest('section').style.minHeight = '100vh'
		console.log(transcripts[index].parentElement)
	})
})
