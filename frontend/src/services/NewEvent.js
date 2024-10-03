import { apiUrl } from "./apiUrl";

const newEvent = async (data, file) => {
    let body = new FormData();
    body.append('titulo', data.titulo);
    body.append('data_inicio', data.data_inicio);
    body.append('duracao', data.duracao);
    body.append('local', data.local);
    body.append('palestrante', data.palestrante);
    body.append('sobre', data.sobre);
    body.append('imagem', file);  // Certifique-se de que a chave é 'imagem'

    console.log("File being sent:", file);  // Verifique se o arquivo está presente
    console.log("FormData content:", [...body.entries()]);  // Para ver todo o conteúdo do FormData

    return fetch(apiUrl+'/events/add', {
        method: 'POST',
        body: body,
    })
    .then(response => response.json())
    .then(data => {
        return data.message;
    })
    .catch((error) => {
        console.error("Upload failed", error);
        return false;
    });
};


export default newEvent;