export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  techList: string;
  category: string;
}

export interface ResourceItem {
  title: string;
  image: string;
  summary: string;
  link: string;
}

export const basicInfo = {
  name: 'Huang Yirui',
  program: 'Full Stack Web Development',
  location: 'Winnipeg, MB',
  email: 'huangyr228@gmail.com',
  summary:
    'I am a Full Stack Web Development student who enjoys building data-driven applications, e-commerce systems, and reusable UI components.',
};

export const projects: ProjectItem[] = [
  {
    title: 'Winnipeg Parks Explorer',
    description:
      'A Ruby on Rails application that combines multiple datasets to display park information in Winnipeg, including search, associations, pagination, and mapping.',
    image:
      'https://placehold.co/600x400/2f6b3b/ffffff?text=Winnipeg+Parks+Explorer',
    link: '#',
    techList: 'Rails, SQLite, Bootstrap, Kaminari, APIs',
    category: 'Rails',
  },
  {
    title: 'Greenleaf Store',
    description:
      'A full-stack Rails e-commerce application with product browsing, category filtering, cart, checkout, Stripe payment integration, and admin management.',
    image: 'https://placehold.co/600x400/3b7a57/ffffff?text=Greenleaf+Store',
    link: '#',
    techList: 'Rails, Devise, ActiveAdmin, Stripe, Docker',
    category: 'E-commerce',
  },
  {
    title: 'Tropical Plant Knowledge Hub',
    description:
      'A custom PHP CMS with CRUD, categories, comments, CAPTCHA, image upload, authentication, and paginated keyword search.',
    image: 'https://placehold.co/600x400/4d8f5b/ffffff?text=Plant+CMS',
    link: '#',
    techList: 'PHP, MySQL, PDO, Bootstrap, JavaScript',
    category: 'CMS',
  },
];

export const resources: ResourceItem[] = [
  {
    title: 'GitHub',
    image: 'https://placehold.co/120x120/111111/ffffff?text=GitHub',
    summary:
      'Used for source control, version history, and assignment repositories.',
    link: 'https://github.com/',
  },
  {
    title: 'Docker',
    image: 'https://placehold.co/120x120/0db7ed/ffffff?text=Docker',
    summary: 'Used to containerize projects and run production builds locally.',
    link: 'https://www.docker.com/',
  },
  {
    title: 'React',
    image: 'https://placehold.co/120x120/61dafb/000000?text=React',
    summary:
      'Used to build component-based front-end applications and this portfolio site.',
    link: 'https://react.dev/',
  },
];

export const developerSetup = {
  vscode: 'VS Code with ESLint, Prettier, Docker, and GitHub extensions',
  terminal: 'WSL2 Ubuntu terminal',
  font: 'JetBrains Mono',
};

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Ruby', 'PHP', 'HTML', 'CSS'],
  frameworks: ['React', 'Ruby on Rails', 'Bootstrap', 'Styled Components'],
  tools: ['Git', 'GitHub', 'Docker', 'Storybook', 'Stripe', 'ActiveAdmin'],
};
