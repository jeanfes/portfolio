![Cover](/public/og.png)

# Portafolio Profesional — Jean Escobar

Este es el repositorio del portafolio personal interactivo y de alto rendimiento de **Jean Escobar**, Ingeniero de Sistemas y Desarrollador Fullstack Ssr de Barranquilla, Colombia.

El proyecto está construido utilizando tecnologías web modernas para crear una experiencia visual inmersiva, interactiva y fluida. Integra animaciones en 3D, simulación de fluidos en tiempo real y transiciones dinámicas.

---

## 🚀 Características & Arquitectura Visual

El diseño visual se estructura en **tres capas principales**:

1. **Capa de Fondo (3D):**
   Un mundo interactivo en 3D renderizado en tiempo real usando **React Three Fiber**, que sirve como base visual interactiva del sitio.

2. **Capa de Contenido:**
   Estructura minimalista y limpia que contiene la información del portafolio (proyectos como *Mirror*, *LiveNotes*, *Vibes*, sobre mí, y contacto). Diseñada para integrarse perfectamente con las animaciones.

3. **Capa de Fluido Interactiva (Superior):**
   Una simulación de fluidos en tiempo real que reacciona al movimiento del cursor del usuario mediante un efecto de mezcla (`mix-blend-mode`), aportando profundidad y dinamismo visual.

### 🪟 Efecto Ventana ("Window" Effect)
El contenido cuenta con secciones recortadas o "ventanas" transparentes que dejan ver el fondo animado en 3D, integrando las capas del sitio de forma fluida y orgánica.

---

## ⚙️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **3D & Canvas:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Three.js](https://threejs.org/)
- **Animaciones:** [GSAP](https://greensock.com/gsap/) con ScrollTrigger para transiciones y efectos de scroll suaves
- **Estilos:** SCSS / CSS Modules para modularidad y control total del diseño
- **Despliegue:** [Vercel](https://vercel.com)

---

## 📂 Estructura del Proyecto

El código fuente principal se encuentra organizado dentro de la carpeta `/src`:
- `/src/components`: Componentes reutilizables de UI y animaciones.
- `/src/constants`: Datos estáticos como el listado de proyectos.
- `/src/pages`: Rutas y vistas de la aplicación (Next.js Pages Router).
- `/src/store.js`: Manejo del estado global de la aplicación (Zustand).

---

## 📄 Licencia y Atribución

Este proyecto es de código abierto bajo la **Licencia MIT (con atribución requerida)**.

> [!IMPORTANT]
> **Atribución Requerida:**
> Si utilizas este código o partes de él, debes mantener el crédito del autor original del diseño:
>
> *"Diseño y desarrollo original del portafolio por Evangelos Giatsidis — [giats.me](https://giats.me)"*

---

## 📬 Contacto

- 📧 Correo: [jeanescobar10@hotmail.com](mailto:jeanescobar10@hotmail.com)
- 💼 LinkedIn: [linkedin.com/in/jeanescobar10](https://www.linkedin.com/in/jeanescobar10/)
- 🌐 GitHub: [@jeanfes](https://github.com/jeanfes)
- 🐦 Twitter: [@JeanEscoba24818](https://x.com/JeanEscoba24818)
