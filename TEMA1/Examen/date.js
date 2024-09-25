function actualizarFechaHora() {
    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC',
        timeZoneName: 'long'
      });
    const ahora = new Date();
    const fechaHoraFormateada = (formatter.format(ahora));
    return fechaHoraFormateada;
}
function mostrarFechaHora() {
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'long'
    };
    const ahora = new Date();
    const formateador = new Intl.DateTimeFormat('es-ES', opciones);
    return formateador.format(ahora);
}
function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    console.log(fecha.getDate());
    console.log(fecha.getMinutes());
    console.log(fecha.getMonth());
    return fecha;
    
}
function mostrarFechaHora1(fecha, aniosASumar) {
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'long'
    };
    
    // Si no se proporciona una fecha, usar la fecha actual
    const fechaBase = fecha ? new Date(fecha) : new Date();
    
    // Sumar los años a la fecha
    fechaBase.setFullYear(fechaBase.getFullYear() + aniosASumar);
    
    const formateador = new Intl.DateTimeFormat('es-ES', opciones);
    return formateador.format(fechaBase);
}

// Ejemplo de uso:
console.log(mostrarFechaHora1('2024-09-24T21:35:02', 5)); // Suma 5 años a la fecha proporcionada



let hoy = new Date();
let nuevaFecha = sumarDias(hoy, 30); // Suma 5 días a la fecha actual
console.log(nuevaFecha);
console.log(actualizarFechaHora());
console.log(mostrarFechaHora());