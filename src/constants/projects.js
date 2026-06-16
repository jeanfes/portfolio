const projects = [
  {
    id: 'mirror',
    title: 'Mirror',
    img: '/mirror.png',
    link: '/projects/mirror',
    date: '2026',
    company: 'Next.js 16 / React 19 / Supabase',
    liveLink: 'https://mirroraidev.vercel.app',
    primary: '#09090b',
    accentColor: '#8b5cf6',
    secondary: '#18181b',
    fillColor: '#fafafa',
    menuColor: '#8b5cf6',
    menuFontColor: '#ffffff',
    fluidColor: '#8b5cf6',
    images: [
      {
        src: '/mirror.png',
        tag: 'big',
        isRight: false,
      },
    ],
    desc: [
      'Mirror es una herramienta SaaS de productividad para LinkedIn que inyecta una interfaz en la plataforma para la generación de comentarios con perfiles de voz personalizados.',
      'Está construida sobre una arquitectura fullstack altamente extensible con Next.js 16, React 19, TypeScript y Tailwind CSS v4, interactuando mediante APIs REST con su extensión de Chrome.',
      'La lógica de negocio y las suscripciones por niveles (Free, Pro, Elite) están integradas con Lemon Squeezy y encapsuladas en Edge Functions de Supabase (PostgreSQL + Auth).',
    ],
  },
  {
    id: 'livenotes',
    title: 'LiveNotes',
    img: '/livenotes.png',
    link: '/projects/livenotes',
    date: '2025',
    company: 'React / Python / Groq API',
    liveLink: 'https://play.google.com/store/apps/details?id=com.starholdings.livenotes',
    primary: '#0f172a',
    accentColor: '#3b82f6',
    secondary: '#1e293b',
    fillColor: '#f8fafc',
    menuColor: '#3b82f6',
    menuFontColor: '#ffffff',
    fluidColor: '#3b82f6',
    images: [
      {
        src: '/livenotes.png',
        tag: 'big',
        isRight: false,
      },
    ],
    desc: [
      'LiveNotes es una aplicación móvil para la captura inteligente de notas con transcripción automática de audio y resúmenes estructurados mediante integración con modelos de IA (Groq API).',
      'Cuenta con una arquitectura de componentes limpia en frontend (React) y lógica de procesamiento de audio de alto rendimiento en servicios backend con Python.',
      'Implementa algoritmos de negocio complejos para la segmentación de transcripciones, indexación y extracción de puntos clave de forma automática.',
    ],
  },
];

export default projects;
