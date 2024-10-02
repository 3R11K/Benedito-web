const CheckAdmin = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        try {
            const response = await fetch("http://localhost:8000/api/auth/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "accessToken": accessToken })
            });

            const data = await response.json();

            if (data.error) {
                console.log(data.error);
                return false;  // Retorne falso caso haja erro
            }

            return data.admin;  // Retorne true ou false de acordo com o valor do admin

        } catch (error) {
            console.error("Erro ao verificar admin:", error);
            return false;  // Retorne falso em caso de erro
        }
    }

    return false;  // Caso não exista token, retorne falso
};

export default CheckAdmin;
