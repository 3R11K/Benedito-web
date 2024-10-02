import { SetAuth } from "./SetAuth";

export const getEvents = async () => {
    const accessToken = await SetAuth();
    if(accessToken){
        const response = await fetch('http://localhost:8000/api/events/get/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `{accessToken}`
            }
        });
        const data = await response.json();
        console.log(data);
        return data;
    }
    else{
        return false;
    }
}

export const getEvent = async (id) => {
    const accessToken = await SetAuth();
    console.log("entrou: ",id);
    if(accessToken){
        const response = await fetch(`http://localhost:8000/api/events/get/?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `{accessToken}`
            }
        });
        const data = await response.json();
        console.log(data);
        return data;
    }
    else{
        return false;
    }
}
