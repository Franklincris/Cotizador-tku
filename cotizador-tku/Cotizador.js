// Cotizador Automático TK-U
// Permite realizar múltiples cotizaciones hasta que el usuario escriba "Salir"

const precioBase = 2000;

while (true) {

    let nombre = prompt("Ingrese el nombre del asegurado (o escriba 'Salir' para terminar):");

    if (nombre === null || nombre.toLowerCase() === "salir") {
        alert("Programa finalizado.");
        break;
    }

    let edad = parseInt(prompt("Ingrese la edad del asegurado:"));

    if (edad < 18) {
        alert("No se puede asegurar a menores de edad.");
        continue;
    }

    let total = precioBase;
    let recargos = 0;

    // Recargo por edad del asegurado
    if (edad >= 18 && edad <= 24) {
        recargos += precioBase * 0.10;
    } else if (edad >= 25 && edad <= 49) {
        recargos += precioBase * 0.20;
    } else {
        recargos += precioBase * 0.30;
    }

    // Estado civil
    let casado = prompt("¿Está casado? (si/no)").toLowerCase();

    if (casado === "si") {
        let edadConyuge = parseInt(prompt("Ingrese la edad del cónyuge:"));

        if (edadConyuge >= 18 && edadConyuge <= 24) {
            recargos += precioBase * 0.10;
        } else if (edadConyuge >= 25 && edadConyuge <= 49) {
            recargos += precioBase * 0.20;
        } else if (edadConyuge >= 50) {
            recargos += precioBase * 0.30;
        }
    }

    // Hijos
    let hijos = prompt("¿Tiene hijos? (si/no)").toLowerCase();

    if (hijos === "si") {
        let cantidadHijos = parseInt(prompt("¿Cuántos hijos tiene?"));
        recargos += cantidadHijos * (precioBase * 0.20);
    }

    // NUEVOS RECARGOS

    // Propiedades (35% por cada propiedad)
    let propiedades = parseInt(prompt("¿Cuántas propiedades posee?"));
    recargos += propiedades * (precioBase * 0.35);

    // Ingresos (5% del salario)
    let salario = parseFloat(prompt("Ingrese su salario mensual:"));
    recargos += salario * 0.05;

    total += recargos;

    alert("Estimado/a " + nombre + 
          "\nEl total de su cotización es: Q." + total.toFixed(2));
}
