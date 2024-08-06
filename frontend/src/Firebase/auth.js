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
    return auth.signOut();
}

export const passwordReset = async (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const passwordUpdate = async (password) => {
    return updatePassword(auth.currentUser, password);
}

export const sendEmailVerification = async () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/`
    });
}