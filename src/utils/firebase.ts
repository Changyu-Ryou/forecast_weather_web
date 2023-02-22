// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC93GD-pcTCKn-k79UBQ7m7gg3-587Xvqc',
  authDomain: 'qr-code-reader-a45a5.firebaseapp.com',
  projectId: 'qr-code-reader-a45a5',
  storageBucket: 'qr-code-reader-a45a5.appspot.com',
  messagingSenderId: '2981119270',
  appId: '1:2981119270:web:2fe264cdef13d7867e6de7',
  measurementId: 'G-CM45CQGY0X',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
