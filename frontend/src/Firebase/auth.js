import { redirect } from 'react-router-dom';
import {auth} from './Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';

export const creteUserEmailPass = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInEmailPass = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

export const signGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    console.log(result.user);

    return result;
}

export const signOut = async () => {
    //delete token from local storage
    localStorage.removeItem('accessToken');
    await auth.signOut();
    window.location.href = '/login';
}

export const passwordReset = async (email) => {
    return auth.sendPasswordResetEmail(auth, email);
}

export const passwordUpdate = async (password) => {
    return auth.updatePassword(auth.currentUser, password);
}

export const sendEmailVerification = async () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/`
    });
}