import { E } from '../config/env';

export const firebaseConfig = {
  apiKey: E.API_KEY,
  authDomain: E.AUTH_DOMAIN,
  databaseURL: E.DATABASE_URL,
  projectId: E.PROJECT_ID,
  storageBucket: E.STORAGE_BUCKET,
  messagingSenderId: E.MESSAGING_SENDER_ID,
  appId: E.APP_ID,
  measurementId: E.MEASUREMENT_ID,
};
