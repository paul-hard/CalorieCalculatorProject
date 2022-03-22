export default class FetchWrapper {
    constructor(basicURL) {
        this.basicURL = basicURL;
    }

    get(endpoint) {
        return fetch(this.basicURL + endpoint)
            .then(response => response.json())
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
};

export const hi = "hi"