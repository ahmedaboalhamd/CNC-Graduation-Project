import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtLvQgU_IGClX3yw0bqZ8YaeBeI7LtmLk",
  authDomain: "cnc-project-7f75f.firebaseapp.com",
  projectId: "cnc-project-7f75f",
  storageBucket: "cnc-project-7f75f.firebasestorage.app",
  messagingSenderId: "845472347994",
  appId: "1:845472347994:web:19abaf53f6531dc238e563",
  measurementId: "G-9W6P0HDJS6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/** Create a new account with username and role */
export const registerUser = async (email, password, username, role = 'user') => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName: username });
  
  // Save user role in Firestore asynchronously to prevent hanging
  setDoc(doc(db, 'users', userCredential.user.uid), {
    username,
    email,
    role,
    createdAt: new Date()
  }).catch((error) => {
    console.error("Error saving user role to Firestore:", error);
  });

  return userCredential.user;
};

/** Fetch user role from Firestore */
export const getUserRole = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data().role;
    }
  } catch (error) {
    console.error("Error fetching user role:", error);
  }
  return 'user'; // default role
};

/** Helper function to convert File to Base64 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/** Upload a file directly to Firestore (saving as text instead of Storage) */
export const uploadUserFile = async (file, user) => {
  // 1. Convert the physical file into a text string (Base64)
  const base64Data = await fileToBase64(file);
  
  // 2. Save file information AND data directly in Firestore Database
  await addDoc(collection(db, 'files'), {
    fileName: file.name,
    fileData: base64Data, // The actual file content
    uploaderName: user.displayName || user.email,
    uploaderId: user.uid,
    size: file.size,
    uploadedAt: new Date().toISOString()
  });
};

/** Get all files for Admin Dashboard */
export const getAllFiles = async () => {
  // Get files ordered by upload time
  const q = query(collection(db, 'files'), orderBy('uploadedAt', 'desc'));
  const querySnapshot = await getDocs(q);
  // Convert Firestore documents into a simple array
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/** Sign in */
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

/** Sign out */
export const logoutUser = () => signOut(auth);

/** Monitor user state */
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export default app;
