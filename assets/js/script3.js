const divKey = document.getElementById('key');
const color1 = 'pink';
const color2 = 'orange';
const color3 = 'skyblue';
const color4 = 'purple';
const color5 = 'gray';
const color6 = 'brown';

const containerApp = document.querySelector('.app3');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        divKey.style.backgroundColor = color1;
    } else if (event.key === 's' || event.key === 'S') {
        divKey.style.backgroundColor = color2;
    } else if (event.key === 'd' || event.key === 'D') {
        divKey.style.backgroundColor = color3;
    }
});

document.addEventListener('keydown', function (event) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('new-div');

    if (event.key === 'q' || event.key === 'Q') {
        newDiv.style.backgroundColor = color4;
        containerApp.appendChild(newDiv);
    } else if (event.key === 'w' || event.key === 'W') {
        newDiv.style.backgroundColor = color5;
        containerApp.appendChild(newDiv);
    } else if (event.key === 'e' || event.key === 'E') {
        newDiv.style.backgroundColor = color6;
        containerApp.appendChild(newDiv);
    }
});
