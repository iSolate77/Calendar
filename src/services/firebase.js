// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, child, get } from 'firebase/database'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSIGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)

export const fetchSyllabiData = async (elements, weekNumber, dayNumber) => {
  const syllabiData = await Promise.all(
    elements.map(async (element) => {
      let path
      if (typeof element === 'string') {
        path = element
      } else if (typeof element === 'object' && element.subject) {
        path = element.subject
      } else {
        return ''
      }

      const snapshot = await get(child(ref(db), path))
      const data = snapshot.val()
      if (!data) return ''

      let filteredData = ''

      const subjectDataArray = Object.values(data)
      const entry = subjectDataArray.find(
        (entry) => entry.week === weekNumber && entry.day === dayNumber
      )
      if (entry !== undefined) {
        // check if entry is not undefined
        filteredData = entry.content
      }
      return filteredData
    })
  )

  return syllabiData
}

export const signInUser = async (email, password) => {
  try {
    const auth = getAuth(app)
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user
    console.log(user)
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.error(errorCode, errorMessage)
  }
}
