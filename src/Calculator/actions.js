const receiveExpressions = expressions => ({expressions, type: 'RECEIVE_STUDENTS'});
const fetchExpressions = (amount) => {
    let expressions = [];
    const URI = 'http://192.168.0.195:8080/math/examples?count=' + amount;
    fetch(URI, {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
                data.forEach(exp => {
                    expressions.push(exp);
                })
            }
        );
    return expressions;
}