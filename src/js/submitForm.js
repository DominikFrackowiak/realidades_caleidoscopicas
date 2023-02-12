import htmlElements from './htmlElements'
import firebase from 'firebase/app'
import { db } from './firebase/config'
const { form, wordCloud } = htmlElements

const submitForm = () => {
	form.addEventListener('submit', function (e) {
		e.preventDefault()
		const text = e.target.elements.text.value.trim().toLowerCase()
		console.log(text)
		db.collection('opinions')
			.where('text', '==', text)
			.get()
			.then(snapshot => {
				if (snapshot.empty) {
					db.collection('opinions').add({
						text: text,
						value: 1,
					})
					console.log(text + 'added')
				} else {
					snapshot.docs[0].ref.update({
						value: firebase.firestore.FieldValue.increment(1),
					})
				}
			})

		window.scroll({
			top: wordCloud.offsetTop,
			left: 0,
			behavior: 'smooth',
		})
		e.target.elements.text.value = ''
	})
}

export default submitForm
