document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    const clickButton = document.getElementById('clickButton');

    let count = 0;

    clickButton.addEventListener('click', () => {
        count++;
        countElement.textContent = count;
    });
});
