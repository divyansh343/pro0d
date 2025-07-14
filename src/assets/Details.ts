import seinc from '@/assets/icons/seinc.jpg';
import jtr from '@/assets/icons/jtr.png';
import txr from '@/assets/icons/txr.png';
import openjobs from '@/assets/icons/open-jobs.png';
import bodo from '@/assets/icons/bodo.png';
import airdrop from '@/assets/icons/airdrop-alert.png';
import tradeos from '@/assets/icons/tradeos.webp';
import suprr from '@/assets/icons/suprr.png';
import radio from '@/assets/icons/radio.png';
import rss from '@/assets/icons/rss.png';
import google from '@/assets/icons/google.jpg';

const details = {
  name: {
    first: 'Divyansh',
    last: 'Pal',
    nickname: 'dangersdAmmo',
  },
  title: 'Full Stack Engineer',
  biography:
    'Full Stack Engineer with a passion for building scalable web applications and AI-driven solutions. Proficient in Next.js, React, Node.js, and AWS, with experience developing business automation tools and AI-integrated platforms. Adept at working across all development layers, optimizing performance, and integrating cloud-based technologies like AWS and Cloudflare to enhance efficiency.',
  education: [
    {
      school: 'Raja Shankar Shah University',
      url: 'https://cuc.ac.in/',
      iconMin: rss,
      location: 'Chhindwara, MP',
      degree: 'Bachelor of Science',
      major: 'Computer Applications',
      icon: rss,
      start: 'Aug 2020',
      end: 'Apr 2024',
      description:
        'Focus: Computer Applications, Algorithms & Data Structures. Worked on real-world projects, including AI-driven tools and web applications.',
    },
    {
      school: 'Google',
      url: 'https://grow.google/intl/en_in/certificates/',
      iconMin: google,    
      location: 'Online',
      degree: 'Certification',
      major: 'Digital Marketing (Unlocked Course)',
      icon: google, // Replace with your imported or defined icon
      start: 'Jul 2023',
      end: 'Aug 2023',
      description:
        'Completed Google Digital Unlocked course covering SEO, SEM, analytics, content marketing, and advertising fundamentals.',
    },
  ],
  experience: [
    {
      company: 'Southern East Inc.',
      url: '',
      icon: seinc,
      location: 'Ontario, Canada (Remote)',
      contract: 'Full-time',
      position: 'Full Stack Engineer',
      start: 'Mar 2024',
      end: 'Present',
      description: [
        'Collaborated directly with the CTO to design and develop two groundbreaking AI solutions, resulting in a 35% increase in user engagement within six months post-launch.',
        'Lead Developer for ChatSimple.ai, designing and developing a fully functional AI-powered chat application.',
        'Contributed across multiple in-house products, showcasing full-stack expertise in frontend, backend, and cloud solutions.',
        'Integrated business APIs, ensuring seamless data flow and enhanced automation across enterprise operations.',
      ],
      skills: [
        'Next.js',
        'React',
        'Node.js',
        'AWS',
        'Cloudflare',
        'AI Integration',
      ],
    },
    {
      company: 'Jobs Territory',
      url: '',
      icon: jtr,
      location: 'Bengaluru, Karnataka',
      contract: 'Internship',
      position: 'Software Development Engineer / Intern',
      start: 'Aug 2022',
      end: 'Feb 2024',
      description: [
        'Designed and implemented a job portal frontend using Figma, React, and Next.js, transforming wireframes into functional interfaces.',
        'Integrated third-party APIs for job listings, location-based search, and authentication, improving platform accessibility.',
      ],
      skills: ['React', 'Next.js', 'Figma', 'API Integration'],
    },
    {
      company: 'Tech XR',
      url: '',
      icon: txr,
      location: 'Bhopal, MP',
      contract: 'Full-time',
      position: 'Software Development Engineer - 1',
      start: 'Mar 2022',
      end: 'May 2022',
      description: [
        'Collaborated with cross-functional teams to develop and launch an LMS (Learning Management System) and high-performance landing pages.',
      ],
      skills: ['LMS', 'Landing Pages', 'Team Collaboration'],
    },
  ],
  work: [
    {
      company: 'RadioDao',
      url: 'https://radiodao.xyz',
      icon: radio,
      location: 'Remote',
      contract: 'Community',
      position: 'Contributor',
      start: 'Jul 2024',
      end: 'Present',
      description: [
        'Contributing to decentralized radio streaming DAO on Solana.',
        'Governance tooling, streaming incentives, listener rewards.',
      ],
      skills: ['Solana', 'Anchor', 'React', 'DAO tooling'],
    },
    {
      company: 'Bodo Ats',
      url: 'https://bodo-landing.vercel.app/',
      icon: bodo,
      location: 'Remote',
      contract: 'Contract',
      position: 'Fullstack Developer',
      start: 'Jan 2024',
      end: 'Present',
      description: [
        'Built multi-tenant ATS with organization creation and RBAC.',
        'Implemented Google auth, job posting, and candidate pipeline.',
      ],
      skills: ['Next.js', 'NeonDB', 'Tailwind', 'Auth.js', 'Clerk'],
    },
    {
      company: 'Bestopenjobs.com',
      url: 'https://bestopenjobs.com',
      icon: openjobs,
      location: 'Remote',
      contract: 'Founder',
      position: 'Founder',
      start: 'Feb 2024',
      end: 'Present',
      description: [
        'Launched SEO-focused job board for open startup roles.',
        'Integrated GSC, GA4, and automated sitemap ping.',
      ],
      skills: ['Next.js', 'SEO', 'PostgreSQL', 'Vercel', 'Typescript'],
    },
    {
      company: 'Airdropalert.fyi',
      url: 'https://airdropalert.fyi',
      icon: airdrop,
      location: 'Remote',
      contract: 'Freelance',
      position: 'Frontend Developer',
      start: 'Mar 2024',
      end: 'Present',
      description: [
        'Developed frontend for Web3 airdrop alerting DApp.',
        'Wallet connect, claim tracker, and Dune analytics dashboard.',
      ],
      skills: ['Next.js', 'Wagmi', 'Viem', 'Tailwind', 'Thirdweb'],
    },
    {
      company: 'TradeOs',
      url: 'https://tradeos.netlify.app',
      icon: tradeos,
      location: 'Remote',
      contract: 'Contract',
      position: 'Smart Contract Engineer',
      start: 'Jun 2024',
      end: 'Present',
      description: [
        'Built synthetic asset protocol for IPL teams and football clubs.',
        'Fractional trading contracts, bonding curve pricing.',
      ],
      skills: ['Solidity', 'Foundry', 'Arbitrum', 'Typechain', 'Hardhat'],
    },
    {
      company: 'Suprrlink',
      url: 'https://suprrlink.netlify.app',
      icon: suprr,
      location: 'Remote',
      contract: 'Freelance',
      position: 'Fullstack Dev',
      start: 'May 2024',
      end: 'Present',
      description: [
        'Created dynamic link shortener with custom OG image generation.',
        'Built billing system with Paddle and theme-based image styles.',
      ],
      skills: ['Next.js', 'Paddle', 'Stripe', 'OG image API', 'SEO'],
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'C1',
    },
    {
      name: 'Hindi',
      level: 'C2',
      native: true,
    },
  ],
  contact: {
    location: 'Indore, India',
    email: 'divyanshpal300@outlook.com',
    phone: '+91 6263965062',
    website: 'https://www.divyanshpal.xyz',
    linkedin: 'https://www.linkedin.com/in/divyanshpal343/',
    github: 'https://www.github.com/divyansh343',
    twitter: 'https://twitter.com/dangersdAmmo',
  },
  skills: {
    frontend: ['Next.js', 'React', 'Tailwind CSS'],
    backend: ['Node.js', 'AWS Lambda', 'SQL', 'MongoDB'],
    cloud: ['AWS', 'Cloudflare'],
    tools: ['Postman', 'Figma', 'Supabase', 'GraphQL'],
  },
  projects: ['Bestopenjobs.com', 'AirdropAlert', 'Trade OS', 'Suprrlink'],
};

export default details;
