import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACjl7u8b_Tmn8OdZMQSqaci3fK5QaH5Hg',
  authDomain: 'twitter-clone-5cace.firebaseapp.com',
  projectId: 'twitter-clone-5cace',
  storageBucket: 'twitter-clone-5cace.appspot.com',
  messagingSenderId: '37023261285',
  appId: '1:37023261285:web:7ce76453c4f2177c58dc8c',
  measurementId: 'G-0XY47GHDYK',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
