import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.BUCKET,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
