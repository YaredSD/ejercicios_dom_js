// 4.1
const boton = document.createElement('button');
boton.textContent = "Ejecuta la información"
boton.id = "btnToClick";
boton.addEventListener("click", (event) => {
    console.log(event);
})
document.body.appendChild(boton);
// 4.2
const input = document.querySelectorAll("input");
for (const inputs of input) {
    inputs.addEventListener("focus", () => {
        console.log(input.value);
    } )
}
// 4.3
input.forEach((input) => {
    input.addEventListener("input", () => {
        console.log(input.value);
    })
})