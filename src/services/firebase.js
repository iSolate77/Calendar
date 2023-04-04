// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase, ref, get} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-Gn28lwBlCWt07SDL06ctQp4AMbteP7s',
  authDomain: 'dynamic-calendar-29924.firebaseapp.com',
  databaseURL:
    'https://dynamic-calendar-29924-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dynamic-calendar-29924',
  storageBucket: 'dynamic-calendar-29924.appspot.com',
  messagingSenderId: '631726036662',
  appId: '1:631726036662:web:05c6ace0989396cadf3817',
  measurementId: 'G-3BGQ06NTNZ',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

export const db = getDatabase()

// write a function that retrieves the data from firebase realtime database
export const fetchEnglishData = async () => {
  const snapshot = await get(ref(db, `/english/0/week/days/Sunday/blocks/block1/item`).once('value'))
  return snapshot.val()
}
