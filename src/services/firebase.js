// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, child, get } from 'firebase/database'
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
      const path = `syllabi`
      const snapshot = await get(child(ref(db), path))
      const data = snapshot.val()
      if (!data) return ''

      // Filter subjects containing the word 'English'
      const englishSubjects = Object.keys(data).filter((subjectName) =>
        subjectName.includes('English')
      )

      let filteredData = ''

      for (const subjectName of englishSubjects) {
        const subjectData = data[subjectName]
        const subjectDataArray = Object.values(subjectData)
        const entry = subjectDataArray.find(
          (entry) => entry.week === weekNumber && entry.day === dayNumber
        )
        if (entry !== undefined) {
          // check if entry is not undefined
          filteredData = entry.content
          break
        }
      }

      return filteredData 
    })
  )

  return syllabiData
}
