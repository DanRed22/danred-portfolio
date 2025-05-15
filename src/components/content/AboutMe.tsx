'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , and I am a passionate software engineer. I have always been fascinated
        by technology and its ability to solve complex problems and make life
        easier. I am currently in my 4th year of studying Bachelor of Science in
        Information Technology at the University of San Carlos. I am a quick
        learner and I am always looking for new challenges that help me expand
        my skills.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        As I’ve evolved in my career, I’ve also never stopped my passion for
        learning new technologies and tools. Apart from the tech buzz I'm
        currently into, I'm also interested in other fields such as Music and
        the Arts. On my free time I do songwriting, music production, and
        playing instruments. Which proves my time-management skills and
        flexibility in learning something new. (Feel free to check out some of
        my songs out on Spotify, Apple Music, and YouTube.)
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        Today, I’m not just focused on building apps and websites; I’m also
        exploring tools and technologies like Docker, Aiven Cloud, Google Cloud
        Platform (GCP), VPS, Linux Server Deployments, and Amazon Web Services
        (AWS) to optimize and scale my projects. I believe in continuous
        learning and growth, and I’m always looking for new opportunities to
        improve my skills and knowledge.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        I have also undergone a journey of leadership such as becoming a leader
        of teams and a councilor for the highest student governing body of my
        current university. This has helped me develop my leadership skills and
        my ability to work in a team. And can assure you that I can be a
        valuable asset to your team and is morally and ethically sound.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        If you're interested in collaborating on something exciting or need help
        with a project, feel free to reach out. Let's solve problems together
        with technology!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
