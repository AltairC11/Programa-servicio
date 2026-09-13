// Gestión de visibilidad de asignación de Red / Casa de Paz según el rol seleccionado en el formulario de usuario.
document.addEventListener('DOMContentLoaded', () => {
    const rolSelect = document.getElementById('rol');
    const grupoRed = document.getElementById('grupo-asignacion-red');
    const grupoCdp = document.getElementById('grupo-asignacion-cdp');

    function actualizarVisibilidadAsignacion() {
        if (!rolSelect) return;
        const rol = rolSelect.value;
        if (grupoRed) {
            grupoRed.style.display = (rol === 'supervisor') ? 'block' : 'none';
            if (rol !== 'supervisor') {
                const sel = grupoRed.querySelector('select');
                if (sel) sel.value = '';
            }
        }
        if (grupoCdp) {
            grupoCdp.style.display = (rol === 'lider_cdp') ? 'block' : 'none';
            if (rol !== 'lider_cdp') {
                const sel = grupoCdp.querySelector('select');
                if (sel) sel.value = '';
            }
        }
    }

    if (rolSelect) {
        rolSelect.addEventListener('change', actualizarVisibilidadAsignacion);
        actualizarVisibilidadAsignacion();
    }
});
