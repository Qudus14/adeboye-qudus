import { Github, Linkedin, Facebook, X, XIcon } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import fashi from '/public/images/fashi.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Qudus14',
  GITHUB_REPO: 'https://github.com/Qudus14/qoam_dev',
  TWITTER: 'https://x.com/OmolajaBamidele?t=JXJvdmgBS4Y0bVxBJ5Us5A&s=09',
  FACEBOOK: 'https://www.facebook.com/adeboye.qudus.5',
  LINKEDIN:'https://www.linkedin.com/in/adeboye-qudus-758473242',
  };

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Qudus14',
  },
  {
    icon: XIcon,
    url: 'https://x.com/OmolajaBamidele?t=JXJvdmgBS4Y0bVxBJ5Us5A&s=09',
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/adeboye.qudus.5',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/adeboye-qudus-758473242',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'React Native',
    logo: LogoReact,
    url: 'https://react-native.dev',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork',
    position: 'Independent Freelancer',
    startDate: new Date(2024, 12),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Federal School Of Survey',
    position: 'Team Member',
    startDate: new Date(2023, 6),
    endDate: new Date(2024, 11),
    summary: [
      'Collaborated with senior developers to brainstorm new ideas & gather requirements for maintain and improve a University Management System, increasing user base by 20% within six months.',
      'Designed / developed student profile, course registration, and fee payment modules.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on Integrated online payment gateways with the senior developers.',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Coin-Pay',
    position: 'React Developer Intern',
    startDate: new Date(2023, 11),
    endDate: new Date(2024, 2),
    summary: [
      'Acted as a team member in different projects',
      'Handled sprint planning & task distribution',
      'Designed front-end architectures and worked on enterprise-level projects.',
    'Gathered requirements and contributed to internal projects using technologies including React, Next.js, TypeScript, and Tailwind CSS.',],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Wingie',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://www.wingie.com',
    previewImage: ProjectWingie,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Fashi',
    description:
      'An e-commerce platform offering a wide range of products and secure digital payments options. With  convinient shipping fee management and order tracking, the platform provides a seamless online shopping experience.',
    url: 'https://fiskil.com.au',
    previewImage: fashi,
    technologies: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Material UI',
      'Zustand',
      'Sanity',
      'ShadCN UI',
      'Clerk',
      'Stripe',
    ],
  },
  {
    name: 'Pepehousing',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Olukoya Damilare',
    personAvatar: AvatarDummy,
    title: 'Founder - Olukdrivingschool',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Qudus and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Oshokoya Abubakry',
    personAvatar: AvatarDummy,
    title: 'Team Member - Coin-Pay',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Salaudeen Muhammed',
    personAvatar: AvatarDummy,
    title: 'Team Lead -Federal School of Survey',
    testimonial:
      'Qudus was extremely easy and pleasant to work with and he truly cares about the project being a success. Qudus has a high level of knowledge and was able to collaborate with our team in maintaining and improving a University Management System,by increasing user base by 20% within six month without any issues.',
  },
];
