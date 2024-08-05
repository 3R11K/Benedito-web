import React, { useState } from 'react';
import Logo from '../Logo/Logo.tsx';
import logoGoogle from '../../images/google-icon.svg';
import { GlobalStyle } from '../../Global.tsx';
import { Container, LoginInput, AContainer, LoginButton, Link, LogoContainer, Hello, HelloPhrase, Name, GoogleImage, OrSeparator, PLink, RegContainer } from './styles.tsx';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleLogin = () => {
        // Lógica de autenticação aqui
    };

    return (
        <>
            <GlobalStyle />
            <LogoContainer>
                <Logo radius="18" />
            </LogoContainer>
            <Container color='#3D1C03'>
                <Hello>
                    <HelloPhrase>Bem vindo ao</HelloPhrase>
                    <Name>Benedito Caravelas</Name>
                </Hello>
                    
                <LoginButton color='#FFFF'><GoogleImage src={logoGoogle}/>Entre com Google</LoginButton>
                <OrSeparator backgroundColor="#3D1C03">
                    <span>ou</span>
                </OrSeparator>
                <LoginInput type="text" value={username} onChange={handleUsernameChange} placeholder="Usuário" />
                <LoginInput type="password" value={password} onChange={handlePasswordChange} placeholder="Senha" />
                <AContainer>
                    <RegContainer>
                        <PLink>Não tem uma conta?  </PLink >
                        <Link href="/register" color="#EDD62E">  Registre-se</Link>
                    </RegContainer>
                    <Link href="/forgot-password" color='#EDD62E'>Esqueceu sua senha?</Link>
                </AContainer>
                <LoginButton onClick={handleLogin} color='#EDD62E'>Login</LoginButton>
            </Container>
        </>
    );
};

export default Login;
