const container = document.querySelector('.container');

for (let i = 0; i < 256 + 16; i++) {
    const div = document.createElement('div');
    div.addEventListener("mouseover", event => {
        div.style.backgroundColor = 'red';
    });
    div.addEventListener("mouseout", event => {
        div.style.backgroundColor = 'white';
    });
    container.appendChild(div);
}

