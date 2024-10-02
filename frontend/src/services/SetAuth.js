const SetAuth = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken){
        return accessToken;
    }
    else{
        return false;
    }
}

module.exports = { SetAuth };