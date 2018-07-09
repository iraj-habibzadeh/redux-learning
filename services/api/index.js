export const urls = {
    users: 'http://jsonplaceholder.typicode.com/users'
};

export const methods = {
    post: 'POST',
    put: 'PUT'
};

export const request = (url, actions = {}, options = {}) => {
    fetch(url, options).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.status
        }
    }).then(data => {
        console.log(data)
        if (typeof data === 'number') {
            return actions.fetchFailure(data)
        } else {
            return actions.fetchSuccess(data)
        }
    }).catch(error => actions.fetchFailure(error))
};