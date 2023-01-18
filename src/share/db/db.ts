import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://undercoveradv-backend-default-rtdb.europe-west1.firebasedatabase.app"
  });
