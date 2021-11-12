//to set up canvas and context:
function drawfloor() {
    const canvas = document.querySelector('#grassfloor');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "green";
    ctx.fillRect(30, 30, 500, 50);

}
drawfloor();
