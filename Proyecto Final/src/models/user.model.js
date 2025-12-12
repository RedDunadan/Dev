import { db } from "./firebase.js";
import { collection, addDoc } from 'firebase/firestore';

const usersCollection = collection(db, 'users');

export const createUser = async (email, passwordHash) => {
    try {
        const docRef = await addDoc(usersCollection, { email, passwordHash });
        return { id: docRef.id, email };
    } catch (error) {
        console.error("Error creating user: ", error);
    }
}