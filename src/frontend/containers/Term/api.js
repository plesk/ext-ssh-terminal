const api = {

    put(path, data) {
        return api.ajax({ url: path, data: JSON.stringify(data), method: 'PUT' });
    },

    post(path, data) {
        return api.ajax({ url: path, data: JSON.stringify(data), method: 'POST' });
    },

    delete(path, data) {
        return api.ajax({ url: path, data: JSON.stringify(data), method: 'DELETE' });
    },

    get(path) {
        return api.ajax({ url: path, method: 'GET' });
    },

    ajax({ url, method, headers, data }) {
        headers = {
            ContentType: 'application/json; charset=utf-8',
            ...headers,
        };
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = () => {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText,
                    });
                }
            };
            xhr.onerror = () => {
                reject({
                    status: this.status,
                    statusText: xhr.statusText,
                });
            };
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.send(data);
        });
    },

};

export default api;
