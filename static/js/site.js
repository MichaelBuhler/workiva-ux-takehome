const ajax = {};

ajax.get = function (url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            const parsed = JSON.parse(xhr.responseText);
            resolve(parsed);
        });
        xhr.addEventListener('error', function (e) {
            reject(e);
        });
        xhr.open('GET', url);
        xhr.send();
    });
};