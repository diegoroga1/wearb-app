export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type Service = {
  id: string;
  title: string;
  category: string;
  provider: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  description: string;
  image: string;
  tags: string[];
};

export const categories: Category[] = [
  { id: 'beauty', name: 'Belleza', icon: 'sparkles' },
  { id: 'cleaning', name: 'Limpieza', icon: 'home' },
  { id: 'carpentry', name: 'Carpintería', icon: 'hammer' },
  { id: 'pets', name: 'Mascotas', icon: 'paw' },
  { id: 'teachers', name: 'Profesores', icon: 'school' },
  { id: 'fitness', name: 'Fitness', icon: 'barbell' },
  { id: 'repairs', name: 'Reparaciones', icon: 'construct' },
  { id: 'massage', name: 'Masajes', icon: 'leaf' },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Limpieza premium del hogar',
    category: 'Limpieza',
    provider: 'Laura Martín',
    location: 'Madrid Centro',
    rating: 4.9,
    reviews: 182,
    price: 38,
    duration: '2 h',
    description: 'Servicio de limpieza completo para pisos y casas, con productos incluidos y opción de extras.',
    image: 'https://picsum.photos/seed/clean/800/500',
    tags: ['Verificada', 'Flexible', 'Material incluido'],
  },
  {
    id: '2',
    title: 'Corte y peinado a domicilio',
    category: 'Belleza',
    provider: 'Sandra López',
    location: 'Barcelona',
    rating: 4.8,
    reviews: 94,
    price: 45,
    duration: '1 h 30 min',
    description: 'Corte, peinado y asesoría de estilo sin salir de casa.',
    image: 'https://picsum.photos/seed/beauty/800/500',
    tags: ['Top rated', 'A domicilio', 'Reserva rápida'],
  },
  {
    id: '3',
    title: 'Paseo y cuidado de perros',
    category: 'Mascotas',
    provider: 'Carlos Vega',
    location: 'Valencia',
    rating: 4.9,
    reviews: 211,
    price: 18,
    duration: '45 min',
    description: 'Paseos individuales, alimentación y cuidado básico para tu mascota.',
    image: 'https://picsum.photos/seed/pets/800/500',
    tags: ['Experto', 'Seguro', 'Amante de animales'],
  },
  {
    id: '4',
    title: 'Clases particulares de inglés',
    category: 'Profesores',
    provider: 'Marta Ruiz',
    location: 'Online / Presencial',
    rating: 4.7,
    reviews: 68,
    price: 25,
    duration: '1 h',
    description: 'Clases dinámicas para conversación, gramática y preparación de entrevistas.',
    image: 'https://picsum.photos/seed/teacher/800/500',
    tags: ['Online', 'Personalizado', 'Todos los niveles'],
  },
  {
    id: '5',
    title: 'Montaje y reparación de muebles',
    category: 'Carpintería',
    provider: 'Miguel Herrera',
    location: 'Sevilla',
    rating: 4.8,
    reviews: 137,
    price: 55,
    duration: '2 h 30 min',
    description: 'Montaje, ajustes y pequeñas reparaciones de muebles y carpintería doméstica.',
    image: 'https://picsum.photos/seed/carpentry/800/500',
    tags: ['Herramientas incluidas', 'Rápido', 'Profesional'],
  },
];
