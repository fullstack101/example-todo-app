import 'whatwg-fetch';

const delay = ms => new Promise(y => setTimeout(y, ms));

const todoService = {
    list() {
        return fetch('/list?').then(data => data.json());
    },
    add(item) {
        return fetch('/add', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: new Headers({ 'Content-Type' : 'application/json'})
        }).then(data => data.json());
    },
    remove(removeUrl) {
        return fetch(removeUrl, { method: 'POST' }).then(data => data.json());
    },
    pollChanges() {
        return fetch(`/poll?id=${uuid()}`, {
          headers: new Headers({
            'pragma': 'no-cache',
            'cache-control': 'no-cache'
          })
        })
          .then(data => data.json())
          .catch(() => delay(2000));
    }
};

module.exports = todoService;
