import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';



if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      databaseURL: "https://undercoveradv-backend-default-rtdb.europe-west1.firebasedatabase.app"
    });
  } catch (error: any) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore()

export const db = admin.firestore()