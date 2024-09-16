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
// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriess = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.