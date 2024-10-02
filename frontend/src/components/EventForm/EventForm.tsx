import React, { useState } from "react";
import { FormContainer, FormTitle, InputField, ButtonContainer, ConfirmButton, CancelButton } from "./styles.tsx";

const EventForm = () => {
    const [formData, setFormData] = useState({
        eventTitle: "",
        location: "",
        description: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário
        console.log("Dados do evento:", formData);
    };

    const handleCancel = () => {
        // Lógica para limpar ou cancelar o formulário
        setFormData({
            eventTitle: "",
            location: "",
            description: ""
        });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Indicar evento</FormTitle>
            <InputField
                type="text"
                name="eventTitle"
                placeholder="Título do evento"
                value={formData.eventTitle}
                onChange={handleInputChange}
                required
            />
            <InputField
                type="text"
                name="location"
                placeholder="Localização"
                value={formData.location}
                onChange={handleInputChange}
                required
            />
            <InputField
                name="description"
                placeholder="Descrição do evento"
                value={formData.description}
                onChange={handleInputChange}
                required
            />  
            <ButtonContainer>
                <CancelButton type="button" onClick={handleCancel}>Cancelar</CancelButton>
                <ConfirmButton type="submit">Confirmar</ConfirmButton>
            </ButtonContainer>
        </FormContainer>
    );
};

export default EventForm;
