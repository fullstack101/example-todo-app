'use strict';

const polling = new Map();

module.exports = {
    subscribe(id, callback) {
        polling.set(id, callback);
        return () => {
          polling.delete(id);
        };
    },
    publish(message) {
      polling.forEach((cb, id) => {
          cb(message);
          polling.delete(id);
      });
    }
};
