const loginGoogle = async (email, name) => {
    await fetch('http://localhost:8000/api/auth/reg-google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"email":email, "name":name}),
    }).then(response => response.json()).then(data => {
        console.log('Success:', data);
        if(data.message ===  "Success"){
            localStorage.setItem('accessToken', data.accessToken);       
        }else{
            throw new Error(data.error);
        }
    }).catch((error) => {
        console.error('Error:', error);
    });
}

module.exports = { loginGoogle };