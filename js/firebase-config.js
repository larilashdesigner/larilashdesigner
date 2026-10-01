const firebaseConfig = {
  apiKey: "AIzaSyAFmN-pf-9JvJON7ooEZh3Xb7n_Lav4u_A",
  authDomain: "lash-designer-1882d.firebaseapp.com",
  projectId: "lash-designer-1882d",
  storageBucket: "lash-designer-1882d.firebasestorage.app",
  messagingSenderId: "328647327847",
  appId: "1:328647327847:web:8db68a606447fbd7a954c2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

console.log("Firebase inicializado com sucesso!");