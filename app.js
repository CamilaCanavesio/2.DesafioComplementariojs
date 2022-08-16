class Presentismo {
    constructor(nombre, situacion) {
        this.nombre = nombre.toUpperCase();
        this.situacion = situacion.toUpperCase();
    }
}

const presentismo = [];

let nombre = prompt("Ingrese el nombre del alumno")
let situacion = prompt("Ingrese la situación del alumno: P para presente, A para ausente")

presentismo.push(new Presentismo(nombre, situacion));


for (const dato of presentismo) {
    console.log(dato.nombre)
    console.log(dato.situacion)

}
