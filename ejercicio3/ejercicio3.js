// 3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ListaPaises = document.createElement("ul");
for (const country of countries) {
	const Pais = document.createElement("li");
	Pais.textContent = country;
	ListaPaises.appendChild(Pais);
}
document.body.appendChild(ListaPaises);
// 3.2
const Eliminado = document.querySelectorAll(".fn-remove-me");
for (const texto of Eliminado) {
	texto.remove();
}
// 3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ListaCoches = document.createElement("ul");
for (const car of cars) {
	const Coche = document.createElement("li");
	Coche.textContent = car;
	ListaCoches.appendChild(Coche);
}
ListaCoches.classList.add('[data-function="printHere"');
document.body.appendChild(ListaCoches);
// 3.4
const countriess = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const Paises = document.querySelector("body");
for (const country of countriess) {
	const titulo = document.createElement("h4");
	const imagen = document.createElement("img");
	const div = document.createElement("div");

	titulo.textContent = country.title;
	imagen.src = country.imgUrl;
	div.appendChild(titulo);
	div.appendChild(imagen);

	Paises.appendChild(div);
}
// 3.5
const boton = document.createElement("button");
boton.textContent = "Elimina el último elemento"
boton.addEventListener("click", () => {
	const Paises2 = document.querySelectorAll("body > div");
	const UltimoElemento = Paises2[Paises2.length-1];
	UltimoElemento.remove();
})
document.body.appendChild(boton);

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.