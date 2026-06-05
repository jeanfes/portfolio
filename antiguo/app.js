const iconMenu = document.getElementById("icon_menu");
const menuMobile = document.getElementById("menu_mobile");
const iconCloseMenu = document.getElementById("close_menu");
const htmlElement = document.querySelector("html");

// Actualizar el año automáticamente
document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    iconMenu.addEventListener("click", openMenu);
    iconCloseMenu.addEventListener("click", closeMenu);

    function openMenu() {
        menuMobile.classList.add("active");
        htmlElement.classList.add("lock-scroll");
    }

    function closeMenu() {
        menuMobile.classList.remove("active");
        htmlElement.classList.remove("lock-scroll");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contenedorToast = document.querySelector('.contenedor-toast');
    const btn_toast = document.querySelector(".btn_toast");
    const formulario = document.getElementById('contact-form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        agregarToast({ tipo: 'email', titulo: 'Mensaje', descripcion: 'Su email ha sido enviado exitosamente', autoCierre: true });
        setTimeout(function () {
            formulario.submit(); // Enviar el formulario después de mostrar el toast
        }, 3000);
    });

    const cerrarToast = (id) => {
        document.getElementById(id)?.classList.add('cerrando');
    };

    function agregarToast({ tipo, titulo, descripcion, autoCierre }) {
        const nuevoToast = document.createElement('div');
        nuevoToast.classList.add('toast', tipo);
        if (autoCierre) nuevoToast.classList.add('autoCierre');

        const iconos = {
            email: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="35px" height="35px" viewBox="0 0 1920 1920">
                <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"/>
            </svg>`
        };

        const toastHTML = `
            <div class="contenido">
                <div class="icono">
                    ${iconos[tipo]}
                </div>
                <div class="texto">
                    <p class="titulo">${titulo}</p>
                    <p class="descripcion">${descripcion}</p>
                </div>
            </div>
        `;
        // Agregar id del toast
        const numeroAlAzar = Math.floor(Math.random() * 100);
        const fecha = Date.now();
        const toastId = fecha + numeroAlAzar;
        nuevoToast.id = toastId;

        nuevoToast.innerHTML = toastHTML;
        contenedorToast.appendChild(nuevoToast);

        const handleAnimacionCierre = (e) => {
            if (e.animationName === 'cierre') {
                nuevoToast.removeEventListener('animationend', handleAnimacionCierre);
                nuevoToast.remove();
            }
        };

        if (autoCierre) {
            setTimeout(() => cerrarToast(toastId), 2000);
        }

        nuevoToast.addEventListener('animationend', handleAnimacionCierre);
    }
});

