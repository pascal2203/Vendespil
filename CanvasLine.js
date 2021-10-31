function draw() {
    const canvas = document.querySelector('#canvas');

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
    ctx.lineTo(900, 100);
    ctx.stroke();

}
draw();