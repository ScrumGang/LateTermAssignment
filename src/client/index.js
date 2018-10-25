//const _ = require("lodash");

function component() {
    let element = document.createElement('div');
    element.innerHTML = "<strong> Hi there! </strong>"
    return element;
}
document.body.appendChild(component());