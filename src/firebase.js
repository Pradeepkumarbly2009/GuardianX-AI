import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHJ2a-o-T5c5zDIWvjNghAPWNcOsmeJHo",
  authDomain: "guardianx-ai.firebaseapp.com",
  projectId: "guardianx-ai",
  storageBucket: "guardianx-ai.firebasestorage.app",
  messagingSenderId: "789227141072",
  appId: "1:789227141072:web:b0ad218f68f355ef56abd5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;