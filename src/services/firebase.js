// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase, ref, get} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL:
    `https://${process.env.PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId:process.env.APP_ID,
  measurementId:process.env.MEASUREMENT_ID,
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
