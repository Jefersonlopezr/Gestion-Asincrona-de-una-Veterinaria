let mascotas = [];
let duenos = [];

async function mostrar_menu() {
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
                await registrar_dueno();
                break;
            case "2":
                await registrar_mascota();
                break;
            case "3":
                listar_mascotas();
                break;
            case "4":
                await buscar_mascota();
                break;
            case "5":
                await actualizar_salud();
                break;
            case "6":
                await eliminar_mascota();
                break;
            case "7":
                await listar_mascotas_por_dueno();
                break;
            case "8":
                alert("Gracias por usar el sistema de veterinaria JL. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción del menú.");
        }
    } while (opcion !== "8");
}

async function registrar_dueno() {
    const ID = duenos.length + 1;
    alert("Tu ID autogenerado es: " + ID);
    const nombre = prompt("Ingrese el nombre del dueno");
    if (!ID || !nombre || nombre.trim() === "") {
        alert("Esta información es inválida o te falta un campo por llenar. Por favor intente nuevamente");
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 1500));

    duenos.push({ ID: ID, nombre: nombre });
    alert("El dueno se registró exitosamente");
}

async function registrar_mascota() {
    const ID = prompt("Ingrese el ID de tu mascota");
    const nombre = prompt("Ingrese el nombre de la mascota:");
    const especie = prompt("Ingrese la especie (Perro, Gato, Ave, otro etc.):");
    const edad = parseInt(prompt("Ingrese la edad de la mascota (en años):"));
    const peso = parseFloat(prompt("Ingrese el peso de la mascota (en kg):"));
    const estadoSalud = prompt("Ingrese el estado de salud (Sano, Enfermo, En tratamiento):");
    const ID_dueno = parseInt(prompt("Ingrese el ID del dueno de la mascota"));

    if (!nombre || !especie || isNaN(edad) || isNaN(peso) || !estadoSalud) {
        alert("Información inválida. Intente nuevamente");
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const dueno = duenos.find(d => d.ID === ID_dueno);
    if (!dueno) {
        alert("dueno no registrado. Registre primero al dueno");
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

async function buscar_mascota() {
    const nombre = prompt("Ingrese el nombre de la mascota a buscar:");
    alert("Buscando en la base de datos...");
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());

    if (mascota) {
        alert(`Mascota encontrada:\nNombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad: ${mascota.edad}\nPeso: ${mascota.peso}kg\nSalud: ${mascota.estadoSalud}`);
    } else {
        alert("Mascota no encontrada.");
    }
}

async function actualizar_salud() {
    const nombre = prompt("Ingrese el nombre de la mascota:");
    const mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());

    if (!mascota) {
        alert("Mascota no encontrada.");
        return;
    }

    const nuevoEstado = prompt("Ingrese el nuevo estado de salud (Sano, Enfermo, En tratamiento):");
    await new Promise(resolve => setTimeout(resolve, 1000));
    mascota.estadoSalud = nuevoEstado;
    alert("Estado de salud actualizado.");
}

async function eliminar_mascota() {
    const nombre = prompt("Ingrese el nombre de la mascota a eliminar:");
    await new Promise(resolve => setTimeout(resolve, 2000));

    const confirmar = confirm(`¿Seguro que deseas eliminar a ${nombre}?`);
    if (confirmar) {
        const indice = mascotas.findIndex(m => m.nombre.toLowerCase() === nombre.toLowerCase());
        if (indice !== -1) {
            mascotas.splice(indice, 1);
            alert("Mascota eliminada.");
        } else {
            alert("Mascota no encontrada.");
        }
    } else {
        alert("Operación cancelada.");
    }
}

async function listar_mascotas_por_dueno() {
    const ID_dueno = parseInt(prompt("Ingrese el ID del dueno para ver sus mascotas registradas"));
    const dueno = duenos.find(d => d.ID === ID_dueno);
    if (!dueno) {
        alert("El dueno no se encontró");
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const mascotas_dueno = mascotas.filter(m => m.ID_dueno === ID_dueno);
    if (mascotas_dueno.length === 0) {
        alert("Este dueno no tiene mascotas registradas.");
        return;
    }
    let lista = `Mascotas de ${dueno.nombre}:\n`;
    mascotas_dueno.forEach((m, index) => {
        lista += `${index + 1}. Nombre; ${m.nombre}, Especie; ${m.especie}, Edad: ${m.edad} años, Peso: ${m.peso} kg, Estado de salud: ${m.estadoSalud}\n`;
    });
    alert(lista);
}

function listar_mascotas() {
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }
    let lista = "Mascotas registradas:\n";
    mascotas.forEach((m, index) => {
        lista += `${index + 1}. Nombre: ${m.nombre}, Especie: ${m.especie}, Edad: ${m.edad} años, Peso: ${m.peso} kg, Estado de salud: ${m.estadoSalud}\n`;
    });
    alert(lista);
}

mostrar_menu();