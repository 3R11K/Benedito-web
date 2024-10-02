import React, { useState, useContext, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import Logo from '../Logo/Logo.tsx';
import logoGoogle from '../../images/google-icon.svg';
import { AuthContext } from '../../context/AuthContext/AuthContext.tsx';
import { loginGoogle } from "../../services/Login.js";
import { Container, LoginInput, AContainer, LoginButton, Link, LogoContainer, Hello, HelloPhrase, Name, GoogleImage, OrSeparator, PLink, RegContainer } from './styles.tsx';
import { signGoogle, signInEmailPass } from '../../Firebase/auth.js';
import Loading from '../Loading/Loading.tsx';

const Login: React.FC = () => {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signing, setSigning] = useState(false);
    const [error, setError] = useState('');
    const [canRedirect, setCanRedirect] = useState(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onGoogleLogin = async () => {
        setSigning(true);
        try {
            let user = await signGoogle();
            if (user.user) {
                await loginGoogle(user.user.email, user.user.displayName);
                setCanRedirect(true);
            }
        } catch (error) {
            setError(error.message);
        }
        setSigning(false);
    };

    const isSubmitting = useRef(false);

    const onSubmit = async () => {
        if (isSubmitting.current) return; // Impede login múltiplo
        isSubmitting.current = true; // Bloqueia múltiplas submissões
        setSigning(true);
        try {
            await signInEmailPass(username, password);
            setCanRedirect(true);
        } catch (error) {
            setError(error.message);
        }
        setSigning(false);
        isSubmitting.current = false; // Libera a submissão
    }


    const checkLoginStatus = async () => {
        if (currentUser != null) {
            await loginGoogle(currentUser.email, currentUser.displayName);
        }
        if (localStorage.getItem('accessToken')) {
            setCanRedirect(true);
        }
    };
    
    useEffect(() => {
        console.log("currentuser: ", currentUser);
        checkLoginStatus();
    }, [currentUser]);

    return (
        <>
            {signing ? <Loading /> : null}
            {canRedirect && <Navigate to="/" />}
            <LogoContainer>
                <Logo radius="18" />
            </LogoContainer>
            <Container color='#3D1C03'>
                <Hello>
                    <HelloPhrase>Bem vindo ao</HelloPhrase>
                    <Name>Benedito Caravelas</Name>
                </Hello>
                <LoginButton color='#FFFF' onClick={onGoogleLogin} disabled={signing}>
                    <GoogleImage src={logoGoogle} />Entre com Google
                </LoginButton>
                <LoginButton onClick={onSubmit} color='#EDD62E' disabled={signing}>Login</LoginButton>

                <OrSeparator backgroundColor="#3D1C03">
                    <span>ou</span>
                </OrSeparator>
                <LoginInput type="text" value={username} onChange={handleUsernameChange} placeholder="Usuário" />
                <LoginInput type="password" value={password} onChange={handlePasswordChange} placeholder="Senha" />
                <AContainer>
                    <RegContainer>
                        <PLink>Não tem uma conta?</PLink>
                        <Link href="/register" color="#EDD62E">Registre-se</Link>
                    </RegContainer>
                    <Link href="/forgot-password" color='#EDD62E'>Esqueceu sua senha?</Link>
                </AContainer>
                <LoginButton onClick={onSubmit} color='#EDD62E'>Login</LoginButton>
            </Container>
        </>
    );
};

export default Login;
