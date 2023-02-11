import handleTranscripts from './transcripts'
import playPauseAudioHandler from './audioPlayer'
import handleMobileNavigation from './navigationMobile'
import handleHamburgerStyle from './hamburgerMenu'
import handleScrollSpy from './scroll-spy'
import handleSubmenu from './subMenuEtapas'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactWordcloud from 'react-wordcloud'
import { db } from './firebase/config'
import { useEffect, useState } from 'react'
import htmlElements from './htmlElements'
import submitForm from './submitForm'
const { linksToTheCloud } = htmlElements

import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

const init = () => {
	handleTranscripts()
	playPauseAudioHandler()
	handleMobileNavigation()
	handleHamburgerStyle()
	handleScrollSpy()
	handleSubmenu()
	submitForm()
}

document.addEventListener('DOMContentLoaded', init)

const options = {
	colors: [
		'var(--darkblue)',
		'var(--lightred)',
		'var(--lightblue)',
		'var(--red)',
	],
	enableTooltip: true,
	deterministic: false,
	fontFamily: 'Galano Grotesque Semibold',
	fontSizes: [20, 70],
	fontStyle: 'normal',
	fontWeight: 'normal',
	padding: 1,
	rotations: 3,
	rotationAngles: [0, 90],
	scale: 'sqrt',
	spiral: 'archimedean',
	transitionDuration: 1000,
}

function App() {
	const [words, setWords] = useState([])
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(false)
	const [isInViewport, setIsInViewport] = useState(null)
	const [isLinkClicked, setIsLinkClicked] = useState(null)

	const intersectionObserver = element => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setTimeout(() => setIsInViewport(true), 500)
				} else {
					setIsInViewport(false)
				}
			})
		})
		observer.observe(element)
	}

	useEffect(() => {
		setIsLinkClicked(false)
		linksToTheCloud.forEach(link =>
			link.addEventListener('click', () => setIsLinkClicked(true))
		)
		db.collection('opinions')
			.orderBy('value', 'desc')
			.limit(15)
			.get()
			.then(snapshot => {
				if (snapshot.empty) {
					setError('Todavía no hay ninguna palabra')
					setIsPending(false)
				} else {
					let results = []
					snapshot.docs.forEach(doc => {
						results.push({ ...doc.data() })
					})
					setWords(results)
					setIsPending(false)
				}
			})
			.catch(err => {
				setError(err.message)
				setIsPending(false)
			})
	}, [isLinkClicked, isInViewport])

	useEffect(() => {
		intersectionObserver(htmlElements.wordCloud)

		const unsub = db
			.collection('opinions')
			.orderBy('value', 'desc')
			.limit(15)
			.onSnapshot(
				snapshot => {
					if (snapshot.empty) {
						setError('Todavía no hay ninguna palabra')
						setIsPending(false)
					} else {
						let results = []
						snapshot.docs.forEach(doc => {
							results.push({ ...doc.data() })
						})
						setWords(results)
						setIsPending(false)
					}
				},
				err => {
					setError(err.message)
					setIsPending(false)
				}
			)

		return () => unsub()
	}, [])

	return (
		<div>
			{isPending && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			{words && (
				<div style={{ height: '700px', width: '100%' }}>
					<ReactWordcloud options={options} words={words} />
				</div>
			)}
		</div>
	)
}

const rootElement = document.getElementById('cloud')
ReactDOM.render(<App />, rootElement)
