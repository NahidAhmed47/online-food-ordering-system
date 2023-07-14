const setCustomerId = () => {
    const getCustomerId = localStorage.getItem('customerId');
    if(!getCustomerId){
        const randomId = Math.floor(Math.random() * 10000000000); // 10 digit random number for safe so that don't match with other customer id
        localStorage.setItem('customerId', JSON.stringify(randomId));
    }
}

export default setCustomerId;