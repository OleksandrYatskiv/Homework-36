function generateSrc() {
    let randomValue = Math.round(Math.random() * (9 - 1) + 1);
    return `images/${randomValue}.jpg`;
}

document.querySelector('img').src = generateSrc();