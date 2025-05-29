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
