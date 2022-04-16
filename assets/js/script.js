const $nombreUsuario = document.querySelector("#nombre");
const $paginaActual = document.querySelector("#pagina");
const $reposPorPagina = document.querySelector("#repoPagina");

const $botonEnviar = document.querySelector("#enviar");
const $resultados = document.querySelector("#resultados");

$botonEnviar.addEventListener("click", async () => {
    // Capturar los inputs
    const nombreUsuario = $nombreUsuario.value;
    const paginaActual = $paginaActual.value;
    const reposPorPagina = $reposPorPagina.value;

    const url = `https://api.github.com/users/${nombreUsuario}/repos?page=${paginaActual}&per_page=${reposPorPagina}`;

    console.log(url);
    // Hacer la petición
    const response = await fetch(url);
    const datos = await response.json();

    console.log(datos);

    // Mostrar los datos en la página
    $resultados.innerHTML = `<pre>${JSON.stringify(datos[0], null, 2)}</pre>`;
    // El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON.

} )

