// 2.1
const NuevoDiv = document.createElement("div");
document.body.appendChild(NuevoDiv);
// 2.2
const NuevoDivP = document.createElement("div");
const p = document.createElement("p");
NuevoDivP.appendChild(p);
document.body.appendChild(NuevoDivP);
// 2.3
const NuevoDiv6P = document.createElement("div");
for (let i = 0; i < 5; i++) {
    const NuevoP = document.createElement("p");
    NuevoDiv6P.appendChild(NuevoP);
}
document.body.appendChild(NuevoDiv6P);
// 2.4
const pDinamica = document.createElement("p");
pDinamica.textContent = "Soy dinámico!";
document.body.appendChild(pDinamica);
// 2.5
const h2Wubba = document.querySelector("h2.fn-insert-here");
h2Wubba.innerHTML = "Wubba Lubba dub dub";
// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul");
for (const app of apps) {
    const SingleApp = document.createElement("li");
    SingleApp.textContent = app;
    lista.appendChild(SingleApp);
}
document.body.appendChild(lista);
// 2.7
const Eliminame = document.querySelectorAll(".fn-remove-me");
for (const nodo of Eliminame) {
    nodo.remove();
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9
const Inserta = document.querySelectorAll("div.fn-insert-here");
for (i = 0; i < Inserta.length; i++){
    const OtroNuevoP = document.createElement("p");
    OtroNuevoP.textContent = "Voy dentro!";
    Inserta[i].append(OtroNuevoP);
}