import React, { useState } from "react";
import { Overlay, ModalContent, AddEventButton, CloseButton, InputEvent, DateCont, Description } from "./styles.tsx";
import newEvent from "../../services/NewEvent.js";

// Componente do modal
const AddEventModal = ({ isOpen, onClose, onError, onSuccess }) => {
    const [formData, setFormData] = useState({
        titulo: "",           // título do evento
        data_inicio: "",      // data e hora de início
        duracao: "",          // duração em minutos
        local: "",            // local do evento
        palestrante: "",      // palestrante
        sobre: "",            // descrição do evento
    });
    const [file, setFile] = useState(null);

    if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value // Atualiza o campo do estado com o valor do input
        });

        //dar console . log se file for diferente de undefined
        if (type === "file") {
            console.log(files[0]);
        }
    };

    const handleSubmit = async () => {
        // Verifica se todos os campos foram preenchidos
        if (Object.values(formData).some((value) => !value)) {
            onError("Por favor, preencha todos os campos.");
            return;
        }
        else{
            try {
                if(!file){
                    onError("Por favor, insira uma imagem.");
                    return;
                }
                const response = await newEvent(formData, file); 
                if(response.status === 201 || response.status === 200){
                    onSuccess("Evento adicionado com sucesso!");
                    onClose();
                }
            } catch (error) {
                onError("Erro ao adicionar evento. Por favor, tente novamente.");
            }
        }
        
    };

    return (
        <Overlay>
            <ModalContent visibility={isOpen ? 'visible' : 'hidden'}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>Adicionar evento</h2>
                <InputEvent
                    name="titulo" // O campo deve se chamar 'titulo' para corresponder ao estado
                    placeholder="Nome do Evento"
                    value={formData.titulo} // Certifique-se de que o valor corresponda ao campo do estado
                    onChange={handleChange}
                />
                <DateCont>
                    <InputEvent
                        name="data_inicio" // Certifique-se de que o nome do input corresponda ao campo no estado
                        placeholder="Data e hora de início"
                        type="datetime-local"
                        value={formData.data_inicio}
                        onChange={handleChange}
                    />
                    <InputEvent
                        name="duracao"
                        placeholder="Duração (em minutos)"
                        type="number"
                        value={formData.duracao}
                        onChange={handleChange}
                    />
                </DateCont>
                <InputEvent
                    name="local"
                    placeholder="Local"
                    value={formData.local}
                    onChange={handleChange}
                />
                <InputEvent
                    name="palestrante"
                    placeholder="Palestrante"
                    value={formData.palestrante}
                    onChange={handleChange}
                />
                <Description
                    name="sobre"
                    placeholder="Descrição"
                    value={formData.sobre}
                    onChange={handleChange}
                />
                <InputEvent
                    name="imagem"
                    placeholder="Imagem"
                    type="file"
                    onChange={handleFile}
                />
                <button onClick={handleSubmit}>Adicionar</button>
            </ModalContent>
        </Overlay>
    );
};

const AddEvent = ({ onError, onSuccess }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleErrors = (error) => {
        console.error(error);
        onError(error);
    };

    const handleSuccess = (success) => {
        console.log(success);
        onSuccess(success);
    }

    return (
        <>
            <AddEventButton onClick={handleOpen} />
            <AddEventModal isOpen={isOpen} onClose={handleClose} onError={handleErrors} onSuccess={handleSuccess} />
        </>
    );
};

export default AddEvent;
