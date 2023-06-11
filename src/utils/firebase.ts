// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// 웹은 personal-proj-alpha 프로젝트로, 앱은 personal-proj에 생성
const firebaseConfig = {
  apiKey: 'AIzaSyB-aJCVq3S3p3rq9k3FZHjJEr-dpWzy5iU',
  authDomain: 'personal-proj-alpha.firebaseapp.com',
  projectId: 'personal-proj-alpha',
  storageBucket: 'personal-proj-alpha.appspot.com',
  messagingSenderId: '371202041319',
  appId: '1:371202041319:web:e19f8c26a2e39396c18942',
  measurementId: 'G-J5MXCY1E5Q',
};

const firebaseAlphaConfig = {
  apiKey: 'AIzaSyB-aJCVq3S3p3rq9k3FZHjJEr-dpWzy5iU',
  authDomain: 'personal-proj-alpha.firebaseapp.com',
  projectId: 'personal-proj-alpha',
  storageBucket: 'personal-proj-alpha.appspot.com',
  messagingSenderId: '371202041319',
  appId: '1:371202041319:web:9947587dea746504c18942',
  measurementId: 'G-YJ6YRGEDHD',
};

const config = process.env.REACT_APP_ENV === 'dev' ? firebaseAlphaConfig : firebaseConfig;

// Initialize Firebase
export const app = initializeApp(config);
export const analytics = getAnalytics(app);
