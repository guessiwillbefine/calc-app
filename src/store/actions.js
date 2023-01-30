const getExpressions = (amount) => {
    return {
        type: 'GET',
        payload: fetchExpressions(amount)
    }
}

const fetchExpressions = (amount) => {
    const URI = 'http://192.168.0.195:8080/math/examples?count=' + amount;
    return fetch(URI, {mode: 'cors'})
        .then(response => response.json())
        .then(data => data);
}

export default getExpressions;
