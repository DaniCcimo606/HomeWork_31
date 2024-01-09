const myColor = function randomColor() {
    const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomValue = Math.random()*hexCode.length;
        const randomIndex = Math.floor(randomValue);
        let randomHex = hexCode[randomIndex];
        color += randomHex;
    }
    return color;
}

const blockMoveY = function randomMoveY() {
    const randomY = Math.random()*(window.innerHeight - block.offsetHeight);
    const randomIndexY = Math.floor(randomY);
    return `${randomIndexY}px`;
}
const blockMoveX = function randomMoveX() {
    const randomX = Math.random()*(window.innerWidth - block.offsetWidth);
    const randomIndexX = Math.floor(randomX);
    return `${randomIndexX}px`;
}

const block = document.querySelector('.block');
const randomBehavior = function blockBehavior() {
    block.style.backgroundColor = myColor();
    block.style.top = blockMoveY();
    block.style.left = blockMoveX();
}

setInterval(randomBehavior, 500)