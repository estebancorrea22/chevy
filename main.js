function checkLogin() {
    return localStorage.getItem('loggedIn') === 'true'; // Verifica el estado guardado en localStorage
}

// Función para mostrar una alerta
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
        </div>
    `;
    alertContainer.classList.remove('d-none');
}

// Función para limpiar la alerta
function clearAlert() {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = '';
    alertContainer.classList.add('d-none');
}

// Función para mostrar el formulario de login
function showLogin() {
    clearAlert();
    document.getElementById('loginForm').classList.remove('d-none');
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('authModalLabel').textContent = 'Log In';
    const modal = new bootstrap.Modal(document.getElementById('authModal'));
    modal.show();
}

// Función para mostrar el formulario de registro
function showRegister() {
    clearAlert();
    document.getElementById('registerForm').classList.remove('d-none');
    document.getElementById('loginForm').classList.add('d-none');
    document.getElementById('authModalLabel').textContent = 'Register';
    const modal = new bootstrap.Modal(document.getElementById('authModal'));
    modal.show();
}

// Función para registrar un nuevo usuario
function register() {
    const email = document.getElementById('registerEmail').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (email !== confirmEmail) {
        showAlert('Emails do not match', 'danger');
        return;
    }
    if (password !== confirmPassword) {
        showAlert('Passwords do not match', 'danger');
        return;
    }
    if (password.length < 4) {
        showAlert('Password must be at least 4 characters', 'danger');
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    showAlert('Registration successful!', 'success');
    setTimeout(() => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        modal.hide();
    }, 1000);
}

// Función para iniciar sesión
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('loggedIn', 'true'); // Marca al usuario como loggeado en localStorage
        updateAuthButtons();
        showAlert('Logged in successfully', 'success');
        setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
            modal.hide();
        }, 1000);
    } else {
        showAlert('Incorrect email or password', 'danger');
    }
}

// Función para cerrar sesión
function logout() {
    localStorage.setItem('loggedIn', 'false'); // Marca al usuario como no loggeado
    updateAuthButtons();
    showAlert('Logged out successfully', 'success');
}

// Función para actualizar los botones de autenticación
function updateAuthButtons() {
    const isLoggedIn = checkLogin(); // Verifica el estado de login cada vez que se actualiza
    document.getElementById('loginBtn').classList.toggle('d-none', isLoggedIn);
    document.getElementById('registerBtn').classList.toggle('d-none', isLoggedIn);
    document.getElementById('logoutBtn').classList.toggle('d-none', !isLoggedIn);
}

// Función para ir hacia arriba de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para mostrar el botón de volver arriba cuando se hace scroll
window.onscroll = function() {
    const backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Al cargar la página, verificar si el usuario está loggeado
window.onload = function() {
    if (checkLogin()) {
        updateAuthButtons(); // Si está loggeado, actualiza los botones de autenticación
    } else {
        updateAuthButtons(); // Si no está loggeado, actualiza los botones de autenticación
    }
};

// Agregar evento al hacer clic en el enlace de calendario
document.querySelector('calendarLink').addEventListener('click', function(event) {
    if (!checkLogin()) {
        event.preventDefault();
        alert('Debes loggearte para acceder a esta página');
    }
});
