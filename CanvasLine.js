function draw() {
    const canvas = document.querySelector('#board');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(1500, 100);
    ctx.stroke();

}
draw();