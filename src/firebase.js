import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABcjXy9qLjINtsENcEGuvU-bj1tHw2a1Q",
  authDomain: "slack-clone-cd7a1.firebaseapp.com",
  projectId: "slack-clone-cd7a1",
  storageBucket: "slack-clone-cd7a1.appspot.com",
  messagingSenderId: "389713090291",
  appId: "1:389713090291:web:436e031c1f5978fcdd8986",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
auth.languageCode = "it";
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
