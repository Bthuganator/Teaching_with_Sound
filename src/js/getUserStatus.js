import 'firebase/auth';
import firebaseApp from 'src/config/firebase';
import { fb } from './js/firebaseConfig'

const getUserStatus = function (store) {
  store.dispatch('CHECK_USER_STATUS');

  return new Promise(function (resolve, reject) {
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        store.dispatch('LOGIN_SUCCESS', user.uid);
        resolve(user.uid);
      } else {
        store.dispatch('LOGIN_FAIL');
        reject(Error('It broke'));
      }
    });
  });
};

export { getUserStatus };