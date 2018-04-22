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
        return api.ajax({ url: path });
    },

    ajax(cfg) {
        return new Promise(resolve => {
            new Ajax.Request({
                method: 'get',
                ignoreUAT: true,
                contentType: 'application/json; charset=utf-8',
                onSuccess: () => resolve(),
                ...cfg,
            });
        });
    },

    getErrorText(err) {
        const msg = 'Unknown error';

        if (err instanceof Error) {
            return err.message || msg;
        }

        if (err.responseJSON && err.responseJSON.message) {
            return err.responseJSON.message;
        }

        if (err.responseJSON && err.responseJSON.error) {
            return err.responseJSON.error.message || msg;
        }

        if (err.responseText) {
            return err.responseText;
        }

        return msg;
    },
};

export default api;
