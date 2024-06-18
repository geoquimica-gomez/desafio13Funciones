function changeBlack(elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = 'black';
}

['div1', 'div2', 'div3', 'div4'].forEach(id => {
    document.getElementById(id).addEventListener("click", () => changeBlack(id));
});