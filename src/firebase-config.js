import { initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDkWJDguy5ZqV4RpvqOlk2LH6ssWJI_mR4",
    authDomain: "scx-landing.firebaseapp.com",
    projectId: "scx-landing",
    storageBucket: "scx-landing.appspot.com",
    messagingSenderId: "105561329366",
    appId: "1:105561329366:web:47d75fe45c9aebcb408377"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
