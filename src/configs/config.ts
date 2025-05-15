export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    hacktoberfest?: string;
    codsoft?: string;
    github_snake?: string;
    uscssc?: string;
    usccisco?: string;
    uscgdgoc?: string;
    hatchit?: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://dev-angelou-sereno.vercel.app',
  domain: 'dev-angelou-sereno.vercel.app',
  author: 'Angelou Sereño',
  author_surname: 'Sereño',
  titlePrefix: 'Angelou Sereño',
  github_org_name: 'Personal',
  country: 'Philippines',
  profile_image: 'https://i.ibb.co/VWrzLmqj/IMG-0877.jpg',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: '#',
    sponsor: '#',
    email: 'angeloubendebelsereno@gmail.com',
    twitter: '#',
    github: 'DanRed22',
    linkedin: 'https://ph.linkedin.com/in/angelou-sere%C3%B1o-6a16b9254',
    blog: '#',
    medium: '#',
    dev: '#',
    hashnode: '#',
    discord: 'https://discordapp.com/users/755454409978150982',
    github_organisation: '#',
    daily_dev: {
      username: 'angelousereno',
      card: 'https://api.daily.dev/devcards/v2/OPJJpnN1VBgNZZsZLW2Nl.png?r=ttd&type=wide'
    },
    holopin: 'angelousereno'
  },
  metadata: {
    description: `Hi! I'm Angelou Sereño, a Full Stack developer passionate about building apps, exploring new technologies, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Angelou Sereño, Full Stack Developer, Angelou Sereño portfolio, Angelou Sereño GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    uscssc: 'https://www.facebook.com/USCSupremeStudentCouncil',
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    usccisco: 'https://www.facebook.com/cisco.usc',
    uscgdgoc: 'https://www.facebook.com/gdgoc.sancarlos',
    hatchit: 'http://hatchitsolutions.com/',
    github_snake:
      'https://raw.githubusercontent.com/muhammad-fiaz/muhammad-fiaz/output/github-contribution-grid-snake.svg'
  }
};
