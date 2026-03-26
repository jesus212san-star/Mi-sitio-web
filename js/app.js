// --- FUNCIONALIDAD JAVASCRIPT ---

// Espera a que el DOM (la estructura HTML) esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. OBTENER REFERENCIAS A LOS ELEMENTOS DEL DOM
    const loginCard = document.getElementById('loginCard');
    const closeBtn = document.getElementById('closeLogin');
    const loginForm = document.getElementById('loginForm');

    // 2. FUNCIONALIDAD DEL BOTÓN DE CERRAR (X)
    if (closeBtn && loginCard) {
        closeBtn.addEventListener('click', () => {
            // Aplicamos una animación sutil de desvanecimiento
            loginCard.style.opacity = '0';
            loginCard.style.transform = 'translateY(-20px)'; // Pequeño movimiento hacia arriba
            
            // Después de la animación, ocultamos el elemento completamente
            setTimeout(() => {
                loginCard.style.display = 'none';
            }, 300); // 300ms debe coincidir con la duración de la transición CSS
        });
    }

    // 3. FUNCIONALIDAD DEL ENVÍO DEL FORMULARIO
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // PREVENT DEFAULT: Evita que la página se recargue (comportamiento por defecto)
            event.preventDefault();

            // Aquí es donde normalmente enviarías los datos a un servidor
            const emailValue = document.getElementById('email').value;
            const passwordValue = document.getElementById('password').value;
            const rememberMe = document.getElementById('remember').checked;

            console.log('--- Intento de Login ---');
            console.log('Email:', emailValue);
            console.log('Password:', passwordValue.replace(/./g, '*')); // Ocultar el password en consola
            console.log('Remember me:', rememberMe);

            // Simulación de respuesta exitosa o error
            alert('Enviando datos de login... (Revisa la consola del navegador)');
        });
    }

    // Opcional: Reabrir el login al pulsar el botón de login en la nav
    const navLoginBtn = document.querySelector('.nav-login-btn');
    if (navLoginBtn && loginCard) {
        navLoginBtn.addEventListener('click', () => {
            // Restablece los estilos antes de mostrar
            loginCard.style.display = 'block';
            // Usa un pequeño retraso para permitir que 'display: block' se aplique antes de la transición
            setTimeout(() => {
                loginCard.style.opacity = '1';
                loginCard.style.transform = 'translateY(0)';
            }, 10);
        });
    }
});
