'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Software Engineer | Present',
    description:
      "Working on a project called 'ML Loans and ML Loans Webview at Hatchit Solutions, with one of our clients-- M Lhuililler a financing service in the Philippines",
    startDate: 'August 2024',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.other.hatchit
  },
  {
    title: 'USC SSC Councilor for A.Y. 2024-2025 | May. 2024 - May. 2025',
    description:
      'I was a councilor for the highest student governing body of my current university. I was responsible for representing the students and their concerns to the university administration.',
    startDate: 'May 2024',
    endDate: 'May 2025',
    isActive: false,
    companyUrl: siteConfig.other.uscssc
  },
  {
    title: 'Finalist | Philippine Start-Up Challenge 8 - 2024 | Cebu City',
    description:
      "Hosted by the Department of Information and Communitcation Technology (DICT) of the Philippines. I was a participant in the Pitching competition. I pitched our team's idea for a mobile app for hazard mapping, AI Prediction, and Disaster Response.",
    startDate: '2024',
    endDate: '2024',
    isActive: false
  },
  {
    title: '2nd Runner Up | A.Ideas Pitching Competition 2024',
    description:
      "Hosted by the Department of Information and Communitcation Technology (DICT) of the Philippines. I was a participant in the A.Ideas Pitching Competition 2024. I pitched our team's idea for a mobile app for hazard mapping, AI Prediction, and Disaster Response. We were the 2nd runner up in the competition.",
    startDate: '2024',
    endDate: '2024',
    isActive: false
  },
  {
    title:
      'VP Internal | CISCO (USC Computer and Information Sciences Council) | 2023-2024',
    description:
      'I was a part of the executive board of the USC Computer and Information Sciences Council. I was responsible for the internal affairs of the council.',
    startDate: '2023',
    endDate: '2024',
    companyUrl: siteConfig.other.usccisco
  },
  {
    title: 'IT 2 Ambassador | 2022 - 2023',
    description:
      'I was a part of the IT-2 Ambassador program. I was responsible for representing the IT 2 program and the university in various events and activities.',
    startDate: '2022',
    endDate: '2023',
    isActive: false,
    companyUrl: siteConfig.other.usccisco
  },
  {
    title:
      'Member | USC Google Developer Group on Campus (formerly GDSC - Google Developer Student Club) | 2022 - Present',
    description:
      "One of the memebers of an active community of developers and students who are passionate about technology and its applications. Able to attend to the group's events and activities.",
    startDate: '2022',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.other.uscgdgoc
  }
];
