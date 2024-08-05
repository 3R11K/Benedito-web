import React from 'react';
import { LogoImg } from './styles.tsx';
import image from "../../images/logo.png";

interface LogoProps {
    radius: string;
}

const Logo: React.FC<LogoProps> = ({ radius }) => {
    return (
        <div style={{ borderRadius: '50%' }}>
            <LogoImg src={image} alt="Logo" radius={radius} />
        </div>
    );
};

export default Logo;
