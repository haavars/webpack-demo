'use strict';


module.exports = function () {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello from content.js';

    return element;
};
