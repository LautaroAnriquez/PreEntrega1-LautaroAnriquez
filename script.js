//Simulador casas Harry Potter

//Creando las variables

let elecciones = "1. Valentia y fuerza \n 2. Justicia y lealtad \n 3. Sabiduria y voluntad \n 4. Ambicion y astucia \n 99. Salir";
let nombreUser = prompt("Como te llamas?");

//Creando funcion con condicional

function resultadoEncuenta(){
    if (eleccionUser == 1){
        alert(`${nombreUser}, sus valores encajan a la perfeccion en Gryffindor`)
    }else if (eleccionUser == 2){
        alert(`${nombreUser}, sus valores encajan a la perfeccion en Hufflepuff`)
    }else if (eleccionUser == 3){
        alert(`${nombreUser}, sus valores encajan a la perfeccion en Ravenclaw`)
    }else if (eleccionUser == 4){
        alert(`${nombreUser}, sus valores encajan a la perfeccion en Slytherin`)
    }else if (eleccionUser == 99){
        alert("Quiza no sea el momento de saberlo. Vuelva pronto")
    }else{
        alert("Ingrese una opcion valida. Vuelva a empezar")
    }
}

//Eleccion del usuario
let eleccionUser = parseInt(prompt(`Hola ${nombreUser}, descrubramos a que casa de Hogwarts pertences. Escribi el numero correspondinete a los valores que te representen \n ${elecciones}`))

//Ejecutando funcion
resultadoEncuenta() 

//Mensaje de despedida
alert ("Gracias por participar. Bienvenido/a a Hogwarts")






