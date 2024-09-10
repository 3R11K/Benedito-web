
//loading de carregamento bolinha girando com fundo borrado e transparente e bolinha centralizada na tela com borda #3D1C03
import React from 'react';
import { Container, Spinner } from './styles.tsx';

const Loading: React.FC = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    );
};

export default Loading;