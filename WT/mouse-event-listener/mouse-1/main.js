document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const refreshButton = document.getElementById('refreshButton');
    const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];
    const backgroundColors = ['#FFDAB9', '#E6E6FA', '#FFE4E1', '#FFFACD', '#E0FFFF'];
    let clickCount = 0;

    colorButton.addEventListener('click', () => {
        clickCount++;
        colorButton.textContent = clickCount;
        
        const colorIndex = clickCount % colors.length;
        const bgColorIndex = clickCount % backgroundColors.length;

        colorButton.className = `circle-button ${colors[colorIndex]}`;
        document.body.style.backgroundColor = backgroundColors[bgColorIndex];
    });

    refreshButton.addEventListener('click', () => {
        clickCount = 0;
        colorButton.textContent = clickCount;
        colorButton.className = 'circle-button color1';
        document.body.style.backgroundColor = '#f0f0f0';
    });
});