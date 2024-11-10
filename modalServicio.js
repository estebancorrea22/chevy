// Descripciones de los servicios
const serviceDescriptions = [
    "Cambio de Aceite: Mantenemos el motor de tu Chevy en óptimas condiciones mediante el reemplazo de aceite y filtros. Esto asegura una mayor vida útil del motor, mejor rendimiento y eficiencia de combustible.",
    "Revisión de Frenos: Ofrecemos una revisión completa de tu sistema de frenos, incluyendo el reemplazo de pastillas y discos si es necesario. Esto es crucial para tu seguridad, asegurando que los frenos respondan correctamente en cualquier situación.",
    "Revisión de Neumáticos: Inspeccionamos y alineamos tus neumáticos para garantizar un manejo seguro y cómodo. También verificamos la presión, desgaste y alineación para mejorar la durabilidad y evitar problemas durante la conducción.",
    "Reparación de Motor: Diagnóstico y reparación de cualquier problema relacionado con el motor, garantizando un rendimiento óptimo. Ya sea una revisión preventiva o una reparación mayor, contamos con los especialistas y las herramientas adecuadas.",
    "Reparación de Transmisión: Solucionamos problemas en el sistema de transmisión para asegurar que tu Chevy cambie de marchas de manera suave y eficiente. Realizamos diagnósticos avanzados y ofrecemos soluciones a tiempo para evitar fallos costosos.",
    "Sistema Eléctrico: Diagnóstico y reparación de todos los componentes eléctricos y electrónicos del vehículo. Desde fallos en el sistema de encendido hasta problemas con la batería, te aseguramos que todos los sistemas eléctricos de tu vehículo funcionen de forma perfecta.",
    "Escaneo de Diagnóstico: Utilizamos tecnología avanzada para realizar un escaneo completo del vehículo y detectar posibles problemas que no son visibles a simple vista. Esto incluye el sistema de emisiones, control de motores y más.",
    "Chequeo de Sistemas: Revisión exhaustiva de los sistemas más importantes de tu vehículo, como frenos, suspensión y dirección. Esto garantiza que tu Chevy esté en condiciones óptimas para una conducción segura y eficiente.",
    "Revisión de Aire Acondicionado: Asegúrate de que tu sistema de aire acondicionado funcione correctamente con nuestra revisión y reparación. Revisamos el refrigerante, el compresor y los conductos de aire para que siempre tengas un ambiente cómodo dentro de tu vehículo."
];

// Escuchar los clics en los botones de más información
const infoButtons = document.querySelectorAll('.btn-info');

infoButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Obtener el índice del servicio desde el atributo data-index
        const serviceIndex = button.getAttribute('data-index');
        
        // Mostrar la descripción correspondiente en el modal
        const description = serviceDescriptions[serviceIndex];
        document.getElementById('serviceDescription').textContent = description;
    });
});
