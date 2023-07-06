function mostrarAlerta(elemento_a) {
    //elemento_a = <a href="#" onclick="mostrarAlerta(this)">Burbank</a>

    var ciudad = elemento_a.innerText;

    alert("Cargando informe meteorológico "+ciudad);
}

function quitarCookies() {
    var cookie = document.querySelector('.cookie');
    cookie.remove();
}

function cambioTemperatura(elemento_select) {
    console.log(elemento_select.value);
    //CODIGO
}