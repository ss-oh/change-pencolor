function changeColor(part, color) {
    const partId = `pen-${part}`;
    const imgElement = document.getElementById(partId);
    imgElement.src = `${part}-${color}.png`;
}

function showTab(part) {
    const contents = document.querySelectorAll('.tab_content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab_button');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(`color-${part}`).classList.add('active');
    document.querySelector(`.tab_button[onclick="showTab('${part}')"]`).classList.add('active');
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    showTab('upper');
});