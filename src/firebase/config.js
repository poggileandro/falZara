import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXzFTRMLArZ8P2CkfWA80OAzw5jbq_0mg",
  authDomain: "falzara.firebaseapp.com",
  projectId: "falzara",
  storageBucket: "falzara.appspot.com",
  messagingSenderId: "933213355362",
  appId: "1:933213355362:web:f172dee3b06edc14dd403b"
};

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);