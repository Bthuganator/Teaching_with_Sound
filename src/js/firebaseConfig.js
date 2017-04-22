import firebase from 'firebase'
import firebaseui from 'firebaseui'

const config = {
  apiKey: 'AIzaSyAn1vicyN6KBjZyN0iCCTOUeCfjQ9GgYFw',
  authDomain: 'teaching-with-sound.firebaseapp.com',
  databaseURL: 'https://teaching-with-sound.firebaseio.com',
  projectId: 'teaching-with-sound',
  storageBucket: 'teaching-with-sound.appspot.com',
  messagingSenderId: '1049752919817'
}
export const fb = firebase.initializeApp(config)
export const db = fb.database()
export const fbUI = new firebaseui.auth.AuthUI(firebase.auth(fb))
