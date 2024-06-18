function changeBlack(elementId) {
    let elemento = document.getElementById(elementId);
    elemento.style.backgroundColor = 'black';
}

['div1', 'div2', 'div3', 'div4'].forEach(id => {
    document.getElementById(id).addEventListener("click", () => changeBlack(id));
});