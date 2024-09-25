function mostrarFechaHora(fecha) {
    let aux =fecha.split("-");
    if (aux.length<3||aux.length>3) {
        return "Fecha no valida";
    }
    
    aux= aux.reverse();
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
       
    };
    
    // Si no se proporciona una fecha, usar la fecha actual
    const fechaBase = fecha ? new Date(aux) : new Date();
    
    
    if (fechaBase=="Invalid Date") {
        return "Fecha no valida";
    }
    
    
    
    const formateador = new Intl.DateTimeFormat('es-ES', opciones);
    return formateador.format(fechaBase);
}
console.log(mostrarFechaHora("2-1-2024"));
