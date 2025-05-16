import { CardProjectProps } from '../types';

export const featuredProjects: CardProjectProps[] = [
  {
    title: 'Reservo',
    des: 'An online reservation system for restaurants that supports branch management, table management, and reservation management.',
    repo: '#',
    category: 'Web Application',
    link: 'https://ci-cd-pipeline-reservoph.netlify.app/',
    topics: ['React', 'Node.js', 'Tailwind CSS', 'MySQL', 'Express.js'],
    images: [
      'img/reservo1.png',
      'img/reservo2.png',
      'img/reservo3.png',
      'img/reservo4.png'
    ]
  },
  {
    title: 'USC SSC Website (Development Build)',
    des: 'A website for the USC Supreme Student Council that allows students to view details on the council, projects, events, and resources.',
    repo: '#',
    category: 'Web Application',
    link: 'https://ssc-website-development-build.netlify.app/',
    topics: [
      'React',
      'NextTS',
      'Tailwind CSS',
      'MySQL',
      'Google Cloud Platform'
    ],
    images: ['img/ssc1.png', 'img/ssc2.png', 'img/ssc3.png', 'img/ssc4.png']
  }
];
