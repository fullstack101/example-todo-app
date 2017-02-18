'use strict';

const polling = new Map();

module.exports = {
    subscribe(id, callback) {
        console.log('added sub', id);
        polling.set(id, callback);
        return () => {
          console.log('deleted sub', id); 
          polling.delete(id);
        };
    },
    publish(message) {
      polling.forEach((cb, id) => {
          cb(message);
          polling.delete(id);
          console.log('called and deleted sub', id); 
      });
    }
};
