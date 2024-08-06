import React, { useState, useContext, useEffect } from 'react';
import Logo from '../Logo/Logo.tsx';
import logoGoogle from '../../images/google-icon.svg';
import { AuthContext } from '../../context/AuthContext/AuthContext.tsx';
import { GlobalStyle } from '../../Global.tsx';
import { Container, LoginInput, AContainer, LoginButton, Link, LogoContainer, Hello, HelloPhrase, Name, GoogleImage, OrSeparator, PLink, RegContainer } from './styles.tsx';
import { signGoogle, signInEmailPass } from '../../Firebase/auth.js';
import { Navigate } from 'react-router-dom';

const Login: React.FC = () => {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signing, setSigning] = useState(false);
    const [error, setError] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!signing) {
            setSigning(true);
            try {
                console.log(await signInEmailPass(username, password))
            } catch (error) {
                setError(error.message);
                setSigning(false);
            }
        }
    };

    const onGoogleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!signing) {
            setSigning(true);
            try {
                await signGoogle();
            } catch (error) {
                setError(error.message);
                setSigning(false);
            }
        }
    };

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);

    return (
        <>
            {currentUser && <Navigate to="/" />}
            <GlobalStyle />
            <LogoContainer>
                <Logo radius="18" />
            </LogoContainer>
            <Container color='#3D1C03'>
                <Hello>
                    <HelloPhrase>Bem vindo ao</HelloPhrase>
                    <Name>Benedito Caravelas</Name>
                </Hello>
                <LoginButton color='#FFFF' onClick={onGoogleLogin}>
                    <GoogleImage src={logoGoogle} />Entre com Google
                </LoginButton>
                <OrSeparator backgroundColor="#3D1C03">
                    <span>ou</span>
                </OrSeparator>
                <LoginInput type="text" value={username} onChange={handleUsernameChange} placeholder="Usuário" />
                <LoginInput type="password" value={password} onChange={handlePasswordChange} placeholder="Senha" />
                <AContainer>
                    <RegContainer>
                        <PLink>Não tem uma conta?  </PLink>
                        <Link href="/register" color="#EDD62E">  Registre-se</Link>
                    </RegContainer>
                    <Link href="/forgot-password" color='#EDD62E'>Esqueceu sua senha?</Link>
                </AContainer>
                <LoginButton onClick={onSubmit} color='#EDD62E'>Login</LoginButton>
            </Container>
        </>
    );
};

export default Login;