'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

// Define a type for FAQ item
export interface FAQItem {
  title: string;
  content: JSX.Element;
}

// Define the faqData array with the FAQItem type
export const faqData: FAQItem[] = [
  {
    title: 'Who are you?',
    content: (
      <>
        Hey there! 👋 I'm Angelou Sereño, a Full Stack developer passionate
        making solutions from technology for the ease of people. I build
        innovative solutions using a variety of technologies like NextJS/TS,
        ReactTS/JS, ExpressJS/TS, TailwindCSS, Node.js, Python, TypeScript,
        C/C++, C#, ReactNative, and Java. I'm always eager to learn new tools
        and techniques.
        <br className="mb-2" />
        For more about me, check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        !
      </>
    )
  },
  {
    title: 'What technologies do you use?',
    content: (
      <>
        I am a full-stack developer with a focus on both frontend and backend
        technologies. I mostly use tools like NextJS/TS, ReactTS/JS,
        ExpressJS/TS, TailwindCSS, Node.js, Python, TypeScript, C/C++, C#,
        ReactNative, and Java. I am also diving into AI Technologies, Cloud
        Platforms, and DevOps to build smarter, data-driven full-stack
        applications.
        <br className="mb-2" />
        For more details on my tech stack and projects, please check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'Can we hire you?',
    content: (
      <>
        Yes, although I'm employed as a Software Engineer, I'm always open to
        freelance work or collaborating on exciting projects. Rest assured that
        I'll always give my best effort to your project and in a timely manner.
        <br className="mb-2" />
        You can contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            {' '}
            Linkedin{' '}
            <Link
              href={`mailto:${siteConfig.social.linkedin}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.linkedin}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'How can I collaborate with you?',
    content: (
      <>
        You can reach out to me via email or Discord. I’m open to collaboration
        on projects or ideas. Feel free to contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            Discord:{' '}
            <Link
              href={siteConfig.social.discord}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord Profile
            </Link>
          </li>
        </ul>
        <br className="mb-2" />
        For more details, you can check my contact information on my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'What is your approach to new technologies?',
    content: (
      <>
        I'm always excited to learn new technologies! I typically start by
        building small projects to understand the fundamentals before diving
        deeper. I focus on adopting tools that improve my workflow and help me
        build better applications.
        <br className="mb-2" />
        For more about my tech journey, visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'How can I support your work?',
    content: (
      <>
        You can support me by starring my repositories, contributing to
        open-source projects, or simply following my work on GitHub. Sharing
        your feedback or spreading the word also helps!
        <br className="mb-2" />
        Visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>{' '}
        to get started.
      </>
    )
  },
  {
    title: 'Do you offer freelance services?',
    content: (
      <>
        Yes, I am available for freelance work. Please contact me{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          via email
        </Link>{' '}
        or{' '}
        <Link
          href={siteConfig.social.discord}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Link>{' '}
        to discuss your project details. I would be happy to explore how we can
        collaborate!
        <br className="mb-2" />
      </>
    )
  },
  {
    title:
      "I tried to contact you but haven't received a response, what happened?",
    content: (
      <>
        I apologize if I missed your message or if I was slow to respond.
        Sometimes, messages get overlooked, or I may be caught up with other
        tasks. If I missed your message by mistake, please feel free to reach
        out again.
        <br className="mb-2" />
        To get a faster response, you can also create a notice through my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page{' '}
        </Link>
        or{' '}
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="text-blue-500 hover:underline"
        >
          email
        </Link>
        .
      </>
    )
  },
  {
    title: `I'm also interested on your music, where can I check your art?`,
    content: (
      <>
        I'm also interested on your music, where can I check your art?
        <br className="mb-2" />
        You can check my music on my{' '}
        <Link
          href={`https://open.spotify.com/artist/4mNUjSfhyYwqkvcOMO5EHd`}
          className="text-blue-500 hover:underline"
        >
          Spotify
        </Link>
        ,{' '}
        <Link
          href={`https://music.apple.com/ph/artist/angelou-sere%C3%B1o/1737192616`}
          className="text-blue-500 hover:underline"
        >
          Apple Music
        </Link>
        , and
        <Link
          href={`https://www.youtube.com/@angelousereno/videos`}
          className="text-blue-500 hover:underline"
        >
          YouTube
        </Link>
        .
      </>
    )
  }
];
