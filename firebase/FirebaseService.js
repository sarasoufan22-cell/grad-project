import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase (replace with your config)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Add a new car
export const addCar = async (carData) => {
    try {
        const docRef = await addDoc(collection(db, 'cars'), carData);
        return docRef.id;
    } catch (error) {
        console.error('Error adding car:', error);
        throw error;
    }
};

// Get all cars
export const getAllCars = async () => {
    try {
        const snapshot = await getDocs(collection(db, 'cars'));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting cars:', error);
        throw error;
    }
};

// Get car by ID
export const getCarById = async (carId) => {
    try {
        const docSnap = await getDoc(doc(db, 'cars', carId));
        return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
    } catch (error) {
        console.error('Error getting car:', error);
        throw error;
    }
};

// Update car
export const updateCar = async (carId, carData) => {
    try {
        await updateDoc(doc(db, 'cars', carId), carData);
    } catch (error) {
        console.error('Error updating car:', error);
        throw error;
    }
};

// Delete car
export const deleteCar = async (carId) => {
    try {
        await deleteDoc(doc(db, 'cars', carId));
    } catch (error) {
        console.error('Error deleting car:', error);
        throw error;
    }
};

export { db, auth };
