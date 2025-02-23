let amigos = [];

/*Esta función será llamada cuando se agregue un nombre y se presione el botón de añadir. Si el campo está vacío
muestra una alerta, sino, lo agrega en la lista, limpia el campo y llama a la función de agregar
el nombre en la lista*/
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert ("Ingresa un nombre, por favor");
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        mostrarNombre();
    }
}
//Función para mostrar nombres en forma de lista
function mostrarNombre () {
    let listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let element = document.createElement('li'); //Va creando un elemento en forma de lista y lo agrega
        element.textContent = amigos[i]; /*El contenido en texto del elemento corresponde al valor del elemento de
        la lista según la posición*/
        listaNombres.appendChild(element); /*Va añadiendo un nuevo 'hijo' en la variable mostrada en HTML*/
    }
}

/*Esta función será llamada cuando se de click en el botón correspondiente y ejecutará la secuencia. Si no
se ha añadido ningún nombre, mostrará una alerta, en caso contrario, obtendrá un número pseudo-aleatorio,
y el amigo secreto será el elemento de la lista de amigos que esté en la posición aleatorio*/
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega amigos antes de continuar');
    } else {
        let posicion = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[posicion];
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    }
}