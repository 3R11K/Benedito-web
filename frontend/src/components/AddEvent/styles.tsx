import styled from "styled-components";

// Overlay que cobre a tela e deixa o fundo borrado
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

interface ModalContentProps {
    visibility: string;  // Expect visibility as a string
}

export const ModalContent = styled.div<ModalContentProps>`
    background: white;
    position: relative;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: ${({ visibility }) => (visibility === 'visible' ? '500px' : '0px')}; /* Handle as string */
    max-width: 500px;
    overflow: hidden;
    overflow-y: auto;
    transition: width 0.5s ease; /* Smooth transition for width */
    ${({ visibility }) => (visibility === 'visible' ? '' : 'visibility: hidden;')}

    h2{
        margin: 10px;
    }

    button{
        margin-top: 10px;
    }
`;


// Botão flutuante
export const AddEventButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 25px;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s, width 0.3s;
    width: 50px;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        width: 150px;
        justify-content: start;
        padding-left: 20px;
        font-size: 13px;
    }

    &::before {
        content: '+';
        transition: 0.3s;
    }

    &:hover::before {
        content: '+ Adicionar evento';
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    width: 30px;
    height: 30px;
    background: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    
    //fazer com que hover global nao afete o botao
    &:hover {
        color: #333;
        width: 30px;
        box-shadow: none;
    }
`;

export const InputEvent = styled.input.attrs(props => ({
    type: props.type || 'text' // Define o tipo padrão como 'text' se não for especificado
}))`
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #666;
    border: 2px solid #ccc;

    /* Estilo padrão para outros tipos */
    
    &[type="file"] {
        width: 90%; /* Largura total para o input de arquivo */
        height: 80px; /* Altura padrão */
        padding: 5px; /* Um padding menor */
        background-color: #f0f0f0; /* Cor de fundo diferente */
        border: 2px dashed #aaa; /* Borda tracejada para diferenciar */
        color: #333;
        cursor: pointer; /* Mostra um cursor de ponteiro para o input de arquivo */
        text-align: center; /* Centraliza o texto */
        display: flex; /* Usar flexbox para centralizar */
        align-items: center; /* Centraliza verticalmente */
        justify-content: center; /* Centraliza horizontalmente */
        &:hover {
            background-color: #e0e0e0;
        }
    }
`;

export const DateCont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;

    input {
        width: 44%;
    }
`;

export const Description = styled.textarea`
    width: 90%;
    height: 100px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #666;
    border: 2px solid #ccc;

    resize: none;
`;