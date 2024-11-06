const keys = document.querySelectorAll('.key');

function handleKeyEvent(event) {
    const key = event.key.toLowerCase();
    const element = document.getElementById('key' + key.toUpperCase());
    if (element) {
        element.style.backgroundColor = event.type === 'keydown' ? 'red' : 'black';
    }else if (event.key === ' ') {
        document.getElementById('keySpace').style.backgroundColor = event.type === 'keydown' ? 'red' : 'black';
    }
}

function handleSpaceClick() {
    spaceBar.style.backgroundColor = 'red';
    setTimeout(() => {
        spaceBar.style.backgroundColor = 'black';
    }, 100);
}

document.addEventListener('keydown', handleKeyEvent);
document.addEventListener('keyup', handleKeyEvent);

spaceBar.addEventListener('click', handleSpaceClick);

document.getElementById('textInput').addEventListener('input', function(event) {
    console.log(event.target.value);
});