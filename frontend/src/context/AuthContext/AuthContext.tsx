import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../Firebase/Firebase';

interface User {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    isAnonymous: boolean;
    photoURL: string;
    providerData: {
        providerId: string;
        uid: string;
        displayName: string;
        email: string;
        phoneNumber: string | null;
        photoURL: string;
    }[];
    stsTokenManager: {
        refreshToken: string;
        accessToken: string;
        expirationTime: number;
    };
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
}

export interface AuthContextType {

    currentUser: User | null;

}
export const AuthContext = createContext<AuthContextType>({ currentUser: null });

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user as User | null);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};