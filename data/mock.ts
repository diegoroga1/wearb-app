import { SupportedLocale } from '@/i18n/translations';

export type LocalizedText = Record<SupportedLocale, string>;

export type Category = {
  id: string;
  name: LocalizedText;
  icon: string;
};

export type Service = {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  provider: string;
  location: LocalizedText;
  rating: number;
  reviews: number;
  price: number;
  duration: LocalizedText;
  description: LocalizedText;
  image: string;
  tags: LocalizedText[];
};

export const categories: Category[] = [
  { id: 'beauty', name: { es: 'Belleza', en: 'Beauty', de: 'Beauty' }, icon: 'sparkles' },
  { id: 'cleaning', name: { es: 'Limpieza', en: 'Cleaning', de: 'Reinigung' }, icon: 'home' },
  { id: 'carpentry', name: { es: 'Carpintería', en: 'Carpentry', de: 'Schreinerei' }, icon: 'hammer' },
  { id: 'pets', name: { es: 'Mascotas', en: 'Pets', de: 'Haustiere' }, icon: 'paw' },
  { id: 'teachers', name: { es: 'Profesores', en: 'Tutors', de: 'Nachhilfe' }, icon: 'school' },
  { id: 'fitness', name: { es: 'Fitness', en: 'Fitness', de: 'Fitness' }, icon: 'barbell' },
  { id: 'repairs', name: { es: 'Reparaciones', en: 'Repairs', de: 'Reparaturen' }, icon: 'construct' },
  { id: 'massage', name: { es: 'Masajes', en: 'Massage', de: 'Massagen' }, icon: 'leaf' },
];

export const services: Service[] = [
  {
    id: '1',
    title: {
      es: 'Limpieza premium del hogar',
      en: 'Premium home cleaning',
      de: 'Premium-Hausreinigung',
    },
    category: { es: 'Limpieza', en: 'Cleaning', de: 'Reinigung' },
    provider: 'Laura Martín',
    location: { es: 'Madrid Centro', en: 'Central Madrid', de: 'Madrid Zentrum' },
    rating: 4.9,
    reviews: 182,
    price: 38,
    duration: { es: '2 h', en: '2 h', de: '2 Std.' },
    description: {
      es: 'Servicio de limpieza completo para pisos y casas, con productos incluidos y opción de extras.',
      en: 'Complete cleaning service for apartments and houses, including products and optional add-ons.',
      de: 'Kompletter Reinigungsservice für Wohnungen und Häuser, inklusive Produkte und optionaler Extras.',
    },
    image: 'https://picsum.photos/seed/clean/800/500',
    tags: [
      { es: 'Verificada', en: 'Verified', de: 'Verifiziert' },
      { es: 'Flexible', en: 'Flexible', de: 'Flexibel' },
      { es: 'Material incluido', en: 'Materials included', de: 'Material inklusive' },
    ],
  },
  {
    id: '2',
    title: {
      es: 'Corte y peinado a domicilio',
      en: 'At-home haircut and styling',
      de: 'Haarschnitt und Styling zu Hause',
    },
    category: { es: 'Belleza', en: 'Beauty', de: 'Beauty' },
    provider: 'Sandra López',
    location: { es: 'Barcelona', en: 'Barcelona', de: 'Barcelona' },
    rating: 4.8,
    reviews: 94,
    price: 45,
    duration: { es: '1 h 30 min', en: '1 h 30 min', de: '1 Std. 30 Min.' },
    description: {
      es: 'Corte, peinado y asesoría de estilo sin salir de casa.',
      en: 'Haircut, styling, and image advice without leaving home.',
      de: 'Haarschnitt, Styling und Stilberatung bequem von zu Hause aus.',
    },
    image: 'https://picsum.photos/seed/beauty/800/500',
    tags: [
      { es: 'Top rated', en: 'Top rated', de: 'Top bewertet' },
      { es: 'A domicilio', en: 'At home', de: 'Vor Ort' },
      { es: 'Reserva rápida', en: 'Fast booking', de: 'Schnell buchbar' },
    ],
  },
  {
    id: '3',
    title: {
      es: 'Paseo y cuidado de perros',
      en: 'Dog walking and care',
      de: 'Gassi-Service und Hundebetreuung',
    },
    category: { es: 'Mascotas', en: 'Pets', de: 'Haustiere' },
    provider: 'Carlos Vega',
    location: { es: 'Valencia', en: 'Valencia', de: 'Valencia' },
    rating: 4.9,
    reviews: 211,
    price: 18,
    duration: { es: '45 min', en: '45 min', de: '45 Min.' },
    description: {
      es: 'Paseos individuales, alimentación y cuidado básico para tu mascota.',
      en: 'Individual walks, feeding, and basic care for your pet.',
      de: 'Einzelne Spaziergänge, Fütterung und grundlegende Betreuung für dein Haustier.',
    },
    image: 'https://picsum.photos/seed/pets/800/500',
    tags: [
      { es: 'Experto', en: 'Expert', de: 'Experte' },
      { es: 'Seguro', en: 'Insured', de: 'Versichert' },
      { es: 'Amante de animales', en: 'Animal lover', de: 'Tierliebhaber' },
    ],
  },
  {
    id: '4',
    title: {
      es: 'Clases particulares de inglés',
      en: 'Private English lessons',
      de: 'Privater Englischunterricht',
    },
    category: { es: 'Profesores', en: 'Tutors', de: 'Nachhilfe' },
    provider: 'Marta Ruiz',
    location: { es: 'Online / Presencial', en: 'Online / In person', de: 'Online / Vor Ort' },
    rating: 4.7,
    reviews: 68,
    price: 25,
    duration: { es: '1 h', en: '1 h', de: '1 Std.' },
    description: {
      es: 'Clases dinámicas para conversación, gramática y preparación de entrevistas.',
      en: 'Dynamic lessons for conversation, grammar, and interview preparation.',
      de: 'Dynamischer Unterricht für Konversation, Grammatik und Interviewvorbereitung.',
    },
    image: 'https://picsum.photos/seed/teacher/800/500',
    tags: [
      { es: 'Online', en: 'Online', de: 'Online' },
      { es: 'Personalizado', en: 'Personalized', de: 'Individuell' },
      { es: 'Todos los niveles', en: 'All levels', de: 'Alle Niveaus' },
    ],
  },
  {
    id: '5',
    title: {
      es: 'Montaje y reparación de muebles',
      en: 'Furniture assembly and repair',
      de: 'Möbelmontage und Reparatur',
    },
    category: { es: 'Carpintería', en: 'Carpentry', de: 'Schreinerei' },
    provider: 'Miguel Herrera',
    location: { es: 'Sevilla', en: 'Seville', de: 'Sevilla' },
    rating: 4.8,
    reviews: 137,
    price: 55,
    duration: { es: '2 h 30 min', en: '2 h 30 min', de: '2 Std. 30 Min.' },
    description: {
      es: 'Montaje, ajustes y pequeñas reparaciones de muebles y carpintería doméstica.',
      en: 'Assembly, adjustments, and small repairs for furniture and home carpentry.',
      de: 'Montage, Anpassungen und kleine Reparaturen an Möbeln und Heimholzarbeiten.',
    },
    image: 'https://picsum.photos/seed/carpentry/800/500',
    tags: [
      { es: 'Herramientas incluidas', en: 'Tools included', de: 'Werkzeuge inklusive' },
      { es: 'Rápido', en: 'Fast', de: 'Schnell' },
      { es: 'Profesional', en: 'Professional', de: 'Professionell' },
    ],
  },
];

export const bookingDays: Record<SupportedLocale, string[]> = {
  es: ['Lun 8', 'Mar 9', 'Mié 10', 'Jue 11'],
  en: ['Mon 8', 'Tue 9', 'Wed 10', 'Thu 11'],
  de: ['Mo 8', 'Di 9', 'Mi 10', 'Do 11'],
};

export const bookingTimes = ['09:00', '10:30', '12:00', '16:00', '18:30'];

export function localizeText<T extends LocalizedText>(value: T, locale: SupportedLocale) {
  return value[locale] || value.es;
}
