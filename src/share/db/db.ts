import admin from 'firebase-admin';

const db = admin.firestore()
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}')

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
    });
  } catch (error: any) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default db

