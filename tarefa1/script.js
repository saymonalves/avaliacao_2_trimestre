const tela = document.getElementById("tela");
const ctx = tela.getContext("2d");

const cor = document.getElementById("cor");
const limpar = document.getElementById("limpar");
const exportar = document.getElementById("exportar");

let desenhando = false;

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.lineJoin = "round";

tela.addEventListener("mousedown", function (e) {
    desenhando = true;

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
})

tela.addEventListener("mousemove", function (e) {
    if (!desenhando) return;

    ctx.strokeStyle = cor.value;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

tela.addEventListener("mouseup", function () {
    desenhando = false;
    ctx.beginPath();
});

tela.addEventListener("mouseleave", function () {
    desenhando = false;
    ctx.beginPath();
});


limpar.addEventListener("click", function () {
    ctx.clearRect(0, 0, tela.width, tela.height);
    location.reload();

});



