import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAn1vicyN6KBjZyN0iCCTOUeCfjQ9GgYFw',
  // authDomain: 'teaching-with-sound.firebaseapp.com',
  authDomain: 'teachingwithsound.com',
  databaseURL: 'https://teaching-with-sound.firebaseio.com',
  storageBucket: 'teaching-with-sound.appspot.com',
  messagingSenderId: '1049752919817'
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
export default db
