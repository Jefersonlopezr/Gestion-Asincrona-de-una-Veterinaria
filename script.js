let mascotas = [];
let duenos = [];

function mostrar_menu() {
    let opcion;

    do {
        opcion = prompt(
            "Bienvenido a la veterinaria JL\n" +
            "1. Registrar un nuevo dueno\n" +
            "2. Registrar nueva mascota\n" +
            "3. Listar todas las mascotas\n" +
            "4. Buscar mascota por nombre\n" +
            "5. Actualizar estado de salud de una mascota\n" +
            "6. Eliminar mascota por nombre\n" +
            "7. Ver mascotar de un dueno\n" +
            "8. Salir"
        );

        switch (opcion) {
            case "1":
                registrar_dueno();
                break;
            case "2":
                registrar_mascota();
                break;
            case "3":
                listar_mascotas();
                break;
            case "4":
                buscar_mascota();
                break;
            case "5":
                actualizar_salud();
                break;
            case "6":
                eliminar_mascota();
                break;
            case "7":
                listar_mascotas_por_dueno();
                break;
            case "8":
                alert("Gracias por usar el sistema de veterinaria JL. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción del menú.");
        }
    } while (opcion !== "6");
}

function registrar_dueno() {
    const ID = duenos.length + 1;
    alert("Tu ID autogenerado es: " + ID);
    const nombre = prompt("Ingrese el nombre del dueno");
    if (!ID || !nombre || nombre.trim() === "") {
        alert("Esta información es inválida o te falta un campo por llenar. Por favor intente nuevamente");
        return;
    }
    duenos.push({ ID: ID, nombre: nombre });
    alert("El dueno se registró exitosamente")
}

function registrar_mascota() {
    const ID = prompt("Ingrese el ID de tu mascota");
    const nombre = prompt("Ingrese el nombre de la mascota:");
    const especie = prompt("Ingrese la especie (Perro, Gato, Ave, otro etc.):");
    const edad = parseInt(prompt("Ingrese la edad de la mascota (en años):"));
    const peso = parseFloat(prompt("Ingrese el peso de la mascota (en kg):"));
    const estadoSalud = prompt("Ingrese el estado de salud (Sano, Enfermo, En tratamiento):");
    const ID_dueno = parseInt(prompt("Ingrese el ID del dueno de la mascota"));


    const dueno = duenos.find(d => d.ID === ID_dueno);
    if (!dueno) {
        alert("dueno no registrado. Registre primero al dueno");
        return;
    }
    if (!nombre || !especie || isNaN(edad) || isNaN(peso) || !estadoSalud) {
        alert("Información inválida. Intente nuevamente");
        return;
    }
    const mascota = {
        ID,
        nombre,
        especie,
        edad,
        peso,
        estadoSalud,
        ID_dueno
    };
    mascotas.push(mascota);
    alert("Mascota registrada exitosamente.");
}