/**
 * Contenido del sitio.
 *
 * Todo el texto vive aquí para que el colegio pueda editarlo sin tocar
 * los componentes. Cuando exista un CMS o una API, este archivo se
 * reemplaza por un servicio que devuelva los mismos tipos.
 */

export type Theme = 'coral' | 'teal' | 'sun' | 'sky' | 'plum' | 'blue' | 'green';

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface Program {
  readonly id: string;
  readonly name: string;
  readonly age: string;
  readonly tagline: string;
  readonly description: string;
  readonly ratio: string;
  readonly schedule: string;
  readonly highlights: readonly string[];
  readonly theme: Theme;
}

export interface Pillar {
  readonly icon: string;
  readonly title: string;
  readonly text: string;
  readonly theme: Theme;
}

export interface MethodItem {
  readonly number: string;
  readonly title: string;
  readonly text: string;
  readonly icon: string;
  readonly theme: Theme;
}

export interface DayMoment {
  readonly time: string;
  readonly title: string;
  readonly text: string;
}

export interface GalleryItem {
  readonly title: string;
  readonly caption: string;
  readonly image: string;
  readonly theme: Theme;
}

export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly relation: string;
  readonly initials: string;
  readonly theme: Theme;
}

export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly initials: string;
  readonly theme: Theme;
}

export interface AdmissionStep {
  readonly number: string;
  readonly title: string;
  readonly text: string;
}

export interface Faq {
  readonly question: string;
  readonly answer: string;
}

export interface SocialLink {
  readonly name: string;
  readonly handle: string;
  readonly icon: string;
  readonly note: string;
  readonly theme: Theme;
  /** Cuando exista la cuenta, poner la URL y la tarjeta se vuelve enlace. */
  readonly url: string | null;
}

export const SITE = {
  name: 'Amiguitos del Rey',
  legalName: 'Unidad Educativa Amiguitos del Rey',
  tagline: 'Educación Inicial · 1 a 6 años',
  phone: '71920081',
  phoneHref: 'tel:+59171920081',
  whatsapp: '59171920081',
  email: 'hola@amiguitosdelrey.edu.bo',
  address: 'Av. Pairumani y C. Venezuela',
  addressDetail: 'Cerca de la Dirección Distrital · Vinto, Cochabamba',
  city: 'Vinto, Cochabamba',
  hours: 'Lunes a viernes · 07:30 a 16:30',
  mapsUrl: 'https://maps.app.goo.gl/Ha3kUcmn77w2VuEn8',
  year: '2027',
} as const;

export const NAV: readonly NavItem[] = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Programas', href: '#programas' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Admisiones', href: '#admisiones' },
  { label: 'Contacto', href: '#contacto' },
];

export const STATS: readonly Stat[] = [
  { value: '18', label: 'años acompañando familias' },
  { value: '240+', label: 'niñas y niños felices' },
  { value: '12', label: 'docentes y especialistas' },
  { value: '8:1', label: 'niños por educadora' },
];

export const PILLARS: readonly Pillar[] = [
  {
    icon: 'heart',
    title: 'Afecto primero',
    text: 'Cada día empieza con un saludo por su nombre. El vínculo seguro es la base de todo aprendizaje.',
    theme: 'coral',
  },
  {
    icon: 'blocks',
    title: 'Juego con propósito',
    text: 'Jugar no es un premio: es el idioma con el que los niños piensan, prueban y comprenden el mundo.',
    theme: 'sun',
  },
  {
    icon: 'leaf',
    title: 'Respeto al ritmo',
    text: 'Acompañamos sin apurar. Cada niña y niño tiene su tiempo para caminar, hablar y descubrir.',
    theme: 'teal',
  },
  {
    icon: 'users',
    title: 'Familia presente',
    text: 'Puertas abiertas, comunicación diaria y talleres para crecer juntos como comunidad educativa.',
    theme: 'plum',
  },
];

export const PROGRAMS: readonly Program[] = [
  {
    id: 'nidito',
    name: 'Nidito',
    age: '1 año',
    tagline: 'Primeros pasos acompañados',
    description:
      'Un espacio seguro y afectuoso para los más pequeños: juego sensorial, siesta, alimentación y acompañamiento individual en cada descubrimiento.',
    ratio: '4 niños por educadora',
    schedule: '07:45 – 12:30',
    highlights: [
      'Adaptación gradual con la familia',
      'Estimulación temprana y juego sensorial',
      'Sieste y alimentación acompañadas',
    ],
    theme: 'coral',
  },
  {
    id: 'maternal',
    name: 'Maternal',
    age: '2 a 3 años',
    tagline: 'Explorar con el cuerpo',
    description:
      'Un primer espacio lejos de casa, pensado para la seguridad afectiva, el movimiento libre y el lenguaje que despierta.',
    ratio: '6 niños por educadora',
    schedule: '07:45 – 12:30',
    highlights: [
      'Periodo de adaptación gradual',
      'Psicomotricidad y juego sensorial',
      'Control de esfínteres sin presión',
    ],
    theme: 'plum',
  },
  {
    id: 'prekinder',
    name: 'Pre-kínder',
    age: '3 a 4 años',
    tagline: 'Descubrir y preguntar',
    description:
      'La edad de los “¿por qué?”. Rincones de juego, experimentos sencillos y primeras amistades que se cuidan.',
    ratio: '8 niños por educadora',
    schedule: '07:45 – 13:00',
    highlights: [
      'Rincones de juego simbólico',
      'Lectoescritura emergente',
      'Huerto y ciencia al aire libre',
    ],
    theme: 'sky',
  },
  {
    id: 'kinder',
    name: 'Kínder',
    age: '4 a 6 años',
    tagline: 'Listos para la escuela',
    description:
      'Un último año de inicial que consolida autonomía, pensamiento matemático y gusto por aprender, sin adelantar primaria.',
    ratio: '10 niños por educadora',
    schedule: '07:45 – 13:30',
    highlights: [
      'Proyectos de investigación cortos',
      'Pensamiento matemático con material concreto',
      'Transición acompañada a primaria',
    ],
    theme: 'blue',
  },
  {
    id: 'talleres',
    name: 'Talleres',
    age: '3 a 6 años',
    tagline: 'Arte, música y movimiento',
    description:
      'Espacios optativos por la tarde para que cada niño encuentre lo que más lo entusiasma y lo desarrolle a su manera.',
    ratio: 'Grupos de 12',
    schedule: '14:00 – 16:00',
    highlights: ['Música y percusión', 'Arte y cerámica', 'Danza y psicomotricidad'],
    theme: 'green',
  },
];

export const METHOD: readonly MethodItem[] = [
  {
    number: '01',
    title: 'Juego como motor',
    text: 'El juego libre y guiado organiza la jornada. Desde ahí nacen las preguntas, los acuerdos y los aprendizajes.',
    icon: 'blocks',
    theme: 'sun',
  },
  {
    number: '02',
    title: 'Inteligencias múltiples',
    text: 'Ocho formas de aprender conviven en el aula: lengua, lógica, música, cuerpo, espacio, naturaleza, otros y uno mismo.',
    icon: 'sparkles',
    theme: 'plum',
  },
  {
    number: '03',
    title: 'Lectoescritura emergente',
    text: 'Sin planas ni adelantos forzados: cuentos, letreros, canciones y juego simbólico que despiertan las ganas de leer.',
    icon: 'book',
    theme: 'sky',
  },
  {
    number: '04',
    title: 'Pensamiento matemático',
    text: 'Contar, clasificar, medir y comparar con material concreto antes de cualquier símbolo abstracto.',
    icon: 'blocks',
    theme: 'green',
  },
  {
    number: '05',
    title: 'Arte y movimiento',
    text: 'Música, pintura y danza todos los días. El cuerpo y la expresión son parte del currículo, no un extra.',
    icon: 'palette',
    theme: 'coral',
  },
  {
    number: '06',
    title: 'Naturaleza cercana',
    text: 'Huerto, patio y salidas cortas. Aprender al aire libre mejora la atención y enseña a cuidar la vida.',
    icon: 'leaf',
    theme: 'teal',
  },
];

export const DAY: readonly DayMoment[] = [
  { time: '07:45', title: 'Bienvenida', text: 'Saludo por su nombre, juego libre y registro de emociones.' },
  { time: '08:15', title: 'Círculo de la mañana', text: 'Canción, calendario, clima y plan del día en grupo.' },
  { time: '08:45', title: 'Rincones de aprendizaje', text: 'Actividad central en pequeños grupos con material concreto.' },
  { time: '10:00', title: 'Refrigerio saludable', text: 'Hábitos de higiene, autonomía y conversación en la mesa.' },
  { time: '10:30', title: 'Patio y movimiento', text: 'Juego al aire libre, circuito motriz y descanso activo.' },
  { time: '11:15', title: 'Taller del día', text: 'Arte, música, ciencia o cocina según el proyecto de la semana.' },
  { time: '12:15', title: 'Cuento y calma', text: 'Lectura compartida, respiración y preparación para la salida.' },
  { time: '12:30', title: 'Salida', text: 'Entrega personalizada a las familias y breve reporte del día.' },
];

export const GALLERY: readonly GalleryItem[] = [
  {
    title: 'Rincón de lectura',
    caption: 'Cuentos, cojines y mucho silencio elegido.',
    image: '/img/gallery-reading.svg',
    theme: 'sky',
  },
  {
    title: 'Taller de arte',
    caption: 'Pintura, barro y libertad para mancharse.',
    image: '/img/gallery-art.svg',
    theme: 'coral',
  },
  {
    title: 'Música y movimiento',
    caption: 'Percusión, danza y canciones en varios idiomas.',
    image: '/img/gallery-music.svg',
    theme: 'plum',
  },
  {
    title: 'Huerto y naturaleza',
    caption: 'Sembrar, regar y esperar: paciencia que se aprende.',
    image: '/img/gallery-garden.svg',
    theme: 'green',
  },
  {
    title: 'Juego simbólico',
    caption: 'La cocinita, la tienda y el consultorio de muñecos.',
    image: '/img/gallery-play.svg',
    theme: 'sun',
  },
  {
    title: 'Patio y psicomotricidad',
    caption: 'Trepar, correr y caerse para aprender a levantarse.',
    image: '/img/gallery-playground.svg',
    theme: 'teal',
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'Lo que más valoro es que la conocen de verdad. Saben qué la hace reír, qué le cuesta y cómo acompañarla. Mi hija entra contenta todos los días.',
    name: 'Mariana P.',
    relation: 'Mamá de Emilia · Kínder',
    initials: 'MP',
    theme: 'coral',
  },
  {
    quote:
      'Veníamos de otra escuelita donde lloraba en la puerta. Aquí el periodo de adaptación fue de verdad, sin apuros. Hoy corre a abrazar a su miss.',
    name: 'Diego R.',
    relation: 'Papá de Mateo · Pre-kínder',
    initials: 'DR',
    theme: 'teal',
  },
  {
    quote:
      'Me encanta que jueguen tanto y que igual aprendan un montón. Las reuniones son claras y siempre hay alguien para responder una duda.',
    name: 'Andrea V.',
    relation: 'Mamá de Sofía · Maternal',
    initials: 'AV',
    theme: 'plum',
  },
];

export const TEAM: readonly TeamMember[] = [
  {
    name: 'Lic. Carolina Méndez',
    role: 'Directora',
    bio: 'Educadora inicial con 20 años de experiencia y especialidad en gestión escolar.',
    initials: 'CM',
    theme: 'plum',
  },
  {
    name: 'Lic. Paola Suárez',
    role: 'Maestra de Maternal',
    bio: 'Especialista en desarrollo temprano y acompañamiento del periodo de adaptación.',
    initials: 'PS',
    theme: 'coral',
  },
  {
    name: 'Lic. Rodrigo Áñez',
    role: 'Maestro de Kínder',
    bio: 'Licenciado en Educación Inicial, apasionado por la ciencia y el juego al aire libre.',
    initials: 'RA',
    theme: 'blue',
  },
  {
    name: 'Psic. Valeria Ortiz',
    role: 'Psicología y familia',
    bio: 'Acompaña procesos emocionales, adaptación y trabajo conjunto con las familias.',
    initials: 'VO',
    theme: 'sky',
  },
];

export const ADMISSION_STEPS: readonly AdmissionStep[] = [
  {
    number: '01',
    title: 'Agenda una visita',
    text: 'Ven con tu hija o hijo a conocer el espacio, las aulas y al equipo. Dura unos 45 minutos.',
  },
  {
    number: '02',
    title: 'Conoce el proyecto',
    text: 'Te explicamos la propuesta pedagógica, la jornada, los horarios y los costos, sin compromiso.',
  },
  {
    number: '03',
    title: 'Entrega documentos',
    text: 'Ficha de inscripción, fotocopia de documentos y carnet de vacunas. Te damos la lista completa.',
  },
  {
    number: '04',
    title: 'Día de bienvenida',
    text: 'Una mañana corta de adaptación acompañada antes del inicio oficial. Sin prisa y a su ritmo.',
  },
];

export const ADMISSION_INCLUDES: readonly string[] = [
  'Grupos reducidos con dos adultos por aula',
  'Materiales y talleres incluidos',
  'Seguro escolar y botiquín certificado',
  'Reporte diario para las familias',
  'Escuela para padres una vez al mes',
  'Refrigerio saludable supervisado',
];

export const FAQS: readonly Faq[] = [
  {
    question: '¿Desde qué edad reciben a las niñas y niños?',
    answer:
      'Desde 1 año hasta los 6, en cuatro niveles: Nidito, Maternal, Pre-kínder y Kínder. También ofrecemos talleres por la tarde para niños de 3 a 6 años.',
  },
  {
    question: '¿Cuál es el horario y si necesito dejarlo más tiempo?',
    answer:
      'La jornada principal va de 07:45 a 12:30 (se extiende según el nivel). Contamos con horario extendido hasta las 16:30 y talleres de 14:00 a 16:00.',
  },
  {
    question: '¿Cómo es el periodo de adaptación?',
    answer:
      'Es gradual y personalizado. La primera semana acompañamos con horarios cortos que se alargan según cómo se sienta cada niño, siempre en diálogo con la familia.',
  },
  {
    question: '¿Qué documentos necesito para inscribir?',
    answer:
      'Ficha de inscripción, fotocopia del carnet de identidad del niño y de los padres, carnet de vacunas y dos fotos tamaño carnet. Te entregamos la lista completa en la visita.',
  },
  {
    question: '¿Cómo acompañan a niños con necesidades específicas?',
    answer:
      'Trabajamos con la familia y, cuando hace falta, con especialistas externos. Nuestro equipo de psicología coordina adaptaciones del entorno y de la jornada.',
  },
  {
    question: '¿Tienen transporte escolar?',
    answer:
      'Sí, con rutas dentro de la ciudad y acompañante adulto en cada recorrido. La cobertura y el costo dependen de la zona; lo revisamos en la entrevista.',
  },
];

export const SOCIALS: readonly SocialLink[] = [
  {
    name: 'Instagram',
    handle: '@amiguitosdelrey',
    icon: 'instagram',
    note: 'Fotos y momentos del día a día.',
    theme: 'coral',
    url: null,
  },
  {
    name: 'Facebook',
    handle: 'Amiguitos del Rey',
    icon: 'facebook',
    note: 'Novedades, comunicados y calendario.',
    theme: 'sky',
    url: null,
  },
  {
    name: 'TikTok',
    handle: '@amiguitosdelrey',
    icon: 'tiktok',
    note: 'Juegos, canciones y retos cortitos.',
    theme: 'plum',
    url: null,
  },
  {
    name: 'YouTube',
    handle: 'Amiguitos del Rey',
    icon: 'youtube',
    note: 'Videos de actividades y talleres.',
    theme: 'teal',
    url: null,
  },
];
