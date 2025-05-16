'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I’ve been programming for over years, gaining experience with a variety of programming languages, frameworks, and tools. I’ve worked on both Frontend and Backend technologies, allowing me to understand and contribute to the entire development process."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src="https://skillicons.dev/icons?i=androidstudio,angular,apple,atom,aws,azure,bash,bootstrap,c,cs,cpp,cloudflare,codepen,css,devto,docker,eclipse,express,figma,firebase,flutter,gcp,git,github,githubactions,gitlab,godot,gradle,html,java,js,jquery,laravel,linkedin,linux,mongodb,mysql,nestjs,netlify,nextjs,nginx,nodejs,ps,php,electron,postgres,postman,powershell,py,react,redux,regex,sass,sequelize,sqlite,stackoverflow,svg,tailwind,tensorflow,twitter,ts,vercel,visualstudio,vite,vscode,vue,webflow,webpack,windows,wordpress,xd&perline=8"
              alt="My Skills"
              className="relative w-full h-full max-w-3xl"
              width={500}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
