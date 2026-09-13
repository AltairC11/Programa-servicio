// Interacciones de la vista de inicio de sesión: alternar visibilidad de contraseña, control de tema y estado del botón de envío.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternar Contraseña
    const passInput = document.getElementById('contrasena');
    const togglePassBtn = document.getElementById('togglePasswordBtn');
    const eyeIcon = document.getElementById('eyeIcon');

    if (togglePassBtn && passInput) {
        togglePassBtn.addEventListener('click', () => {
            const isPassword = passInput.type === 'password';
            passInput.type = isPassword ? 'text' : 'password';
            eyeIcon.textContent = isPassword ? 'visibility' : 'visibility_off';
            togglePassBtn.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');
        });
    }

    // 2. Control de Tema Oscuro / Claro
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    function updateThemeIcon() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (themeIcon) {
            themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
        }
    }

    updateThemeIcon();

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            updateThemeIcon();
        });
    }

    // 3. Estado de envío en botón
    const form = document.getElementById('loginForm');
    const btn = document.getElementById('btnLogin');
    if (form && btn) {
        form.addEventListener('submit', () => {
            btn.disabled = true;
            const btnText = btn.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = 'Ingresando...';
            }
        });
    }
});
