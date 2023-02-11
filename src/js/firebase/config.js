import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCWLSSQ33Zpy1x7kk_0eLm08Cxxfmy-mbg',
	authDomain: 'realidades-caleidoscopicas.firebaseapp.com',
	projectId: 'realidades-caleidoscopicas',
	storageBucket: 'realidades-caleidoscopicas.appspot.com',
	messagingSenderId: '424814577230',
	appId: '1:424814577230:web:85c3e56ea3178f7a2ce51f',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const db = firebase.firestore()

export { db }
