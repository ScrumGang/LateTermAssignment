function component() {
    let element = document.createElement('div');
    element.innerHTML = "<p><strong> Hi there! </strong></p>"
    return element;
}
document.body.appendChild(component());