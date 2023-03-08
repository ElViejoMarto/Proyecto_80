var NombresLista = [];

var lista_nombre_alumno = [];

var ver_alumno_array = [];

var alumnos_ordenar = [];

var tamanio_lista;

function enviar() {
    var nombre1 = document.getElementById("nombre_1").value;

    NombresLista.push(nombre1);

    //   console.log(NombresLista);
    document.getElementById("ver_nombre").innerHTML = NombresLista;

    for (var j = 1; j <= 4; j++) {
        var nombre_alumno = document.getElementById("nombre_" + j).value;
        console.log("vuelta " + j + " = " + nombre_alumno)
        lista_nombre_alumno.push(nombre_alumno)
    }
    
    }
    
    function ordenar() {
    NombresLista.sort();
    document.getElementById("ver_nombre").innerHTML = NombresLista;
    
    
    for (var m = 0; m < tamanio_lista; m++) {
    
        alumnos_ordenar.push("<h4>NOMBRE - " + lista_nombre_alumno[m] + "</h4>");
        console.log(alumnos_ordenar);
        var remover_comas = alumnos_ordenar.join(" ");
        console.log(remover_comas)
        document.getElementById("sin_comas").innerHTML = remover_comas;
    
    }
    }
    
    