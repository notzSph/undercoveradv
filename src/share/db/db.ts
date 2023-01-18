import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

export const db = admin.firestore()

if (!admin.apps.length) {
  try {
      admin.initializeApp({
          credential: admin.credential.cert(serviceAccount as any)
      });
  } catch (error: any) {
      console.log('Firebase admin initialization error', error.stack);
  }
}
export default db