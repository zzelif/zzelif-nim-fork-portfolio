type Project = {
  name: string
  description: string
  link: string
  video?: string
  path: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
  description: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type Education = {
  school: string
  degree: string
  start: string
  end: string
  achievement?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Project EYES',
    description:
      'CNN-based emotion recognition system (Project EYES) with >80% accuracy to support emotional awareness in children with Down Syndrome, deployed in an inclusive education setting in Valenzuela City.',
    link: 'https://github.com/zzelif/ProjectEyes',
    video:
      'https://res.cloudinary.com/ddzrtzzgt/video/upload/v1751271830/z7nxfhggq3huwkkexg2z.mp4',
    path: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    path: '',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'EastWest Banking Corporation',
    title: 'Production Support Intern',
    start: 'August 2024',
    end: 'October 2024',
    description:
      'Contributed to QA and system documentation efforts under the Shared Testing Services (STS) unit at EastWest Bank. Supported manual and automated testing for core banking apps and ATM services, standardized architecture documentation, and utilized Microsoft Power Platform for workflow automation and reporting. Collaborated with teams to troubleshoot production issues and gained exposure to enterprise SDLC practices.',
    id: 'work1',
  },
  {
    company: 'Dewise Solutions Philippines Inc',
    title: 'Software Engineer Intern',
    start: 'August 2023',
    end: 'September 2023',
    description: '',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'Polytechnic University of the Philippines',
    degree: 'BS in Computer Engineering Major in System Development',
    start: '2021',
    end: '2025',
    achievement: '',
    id: 'edu1',
  },
  {
    school: 'Siena College of Taytay',
    degree: 'STEM Strand',
    start: '2015',
    end: '2021',
    achievement: '',
    id: 'edu2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
]

export const EMAIL = 'dan.lettac@gmail.com'
