import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGjxiM-PMynzwP9xJXG0Ydo5exFWjLr9Y",
  authDomain: "paulrachelle-964e8.firebaseapp.com",
  projectId: "paulrachelle-964e8",
  storageBucket: "paulrachelle-964e8.appspot.com",
  messagingSenderId: "554569681517",
  appId: "1:554569681517:web:48d3f0771cc9794970cd64",
  measurementId: "G-TTJD008HEK"
};

export const firebaseApp = initializeApp(firebaseConfig)

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// used for the firestore refs
export const db = getFirestore(firebaseApp)

export const collectionName = 'rsvp-ra'
export const collectionSelfie = 'selfie-ra'
export const selfieReference = 'selfies-ra/'

// here we can export reusable database references
export const rsvpRef = collection(db, collectionName)
export const selfieRef = collection(db, collectionSelfie)