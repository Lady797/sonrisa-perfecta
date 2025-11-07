    // Java para el slider 
        let currentSlide = 0;
        const slides = document.querySelectorAll(".slide");
        setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 4000);


        document.getElementById('form-contacto').addEventListener('submit', function(e) {
    let valido = true;

    // Java para el formulario 
//     const nombre = document.getElementById('nombre');
//     const email = document.getElementById('email');
//     const mensaje = document.getElementById('mensaje');

//     document.getElementById('error-nombre').textContent = '';
//     document.getElementById('error-email').textContent = '';
//     document.getElementById('error-mensaje').textContent = '';

//     if (nombre.value.trim() === '') {
//         document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
//         valido = false;
//     }

//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.value.trim() === '') {
//         document.getElementById('error-email').textContent = 'El email es obligatorio.';
//         valido = false;
//     } else if (!regexEmail.test(email.value.trim())) {
//         document.getElementById('error-email').textContent = 'Introduce un email válido.';
//         valido = false;
//     }

//     if (mensaje.value.trim() === '') {
//         document.getElementById('error-mensaje').textContent = 'El mensaje es obligatorio.';
//         valido = false;
//     }

//     if (!valido) {
//         e.preventDefault();
//     }
} );

document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario real

    let valido = true;

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // Reiniciar errores previos
    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-mensaje').textContent = '';

    // Validación básica
    if (nombre.value.trim() === '') {
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
        valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        document.getElementById('error-email').textContent = 'El email es obligatorio.';
        valido = false;
    } else if (!regexEmail.test(email.value.trim())) {
        document.getElementById('error-email').textContent = 'Introduce un email válido.';
        valido = false;
    }

    if (mensaje.value.trim() === '') {
        document.getElementById('error-mensaje').textContent = 'El mensaje es obligatorio.';
        valido = false;
    }

    if (valido) {
        alert('Este formulario no se enviará porque esta página es un proyecto ficticio.');
        
        document.getElementById('form-contacto').reset();
    }
});