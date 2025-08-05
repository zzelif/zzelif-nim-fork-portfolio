type Project = {
  name: string
  description: string
  link: string
  video: string
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
    path: '/blog/project-eyes',
    id: 'project1',
  },
  {
    name: 'Personal Portfolio',
    description:
      'Personalized portfolio forked from Nim — a free and open-source personal website template built with Next.js 15, React 19, Tailwind CSS v4, and Motion-Primitives',
    link: 'https://github.com/zzelif/zzelif-nim-fork-portfolio',
    video:
      'https://res.cloudinary.com/ddzrtzzgt/video/upload/v1751295602/zzelif-nim-fork-portfolio_Deployment_Overview_Vercel_-_Opera_2025-06-30_22-52-55_kccksl.mp4',
    path: '',
    id: 'project2',
  },
  {
    name: '444 Custom Print Hub',
    description:
      'Marketing (pseudo-ecommerce) website for the 444 Custom Print Hub business located in Antipolo, Rizal. Built with Next.js 15, React 19, Tailwind CSS v4, Framer-Motions, and Shadcn UI',
    link: 'https://four44-ecommerce.onrender.com/',
    video:
      'https://res.cloudinary.com/ddzrtzzgt/video/upload/v1754361363/zzelif_444-ecommerce__At_444_Custom_Print_Hub_we_are_committed_to_delivering_exceptional_quality_and_service_to_meet_all_your_printing_and_design_needs._Firefox_Developer_Edition_2025-08-05_10-33-51_fq5jsw.mp4',
    path: '/blog/444-ecommerce',
    id: 'project3',
  },
  {
    name: 'NextJS Dashboard',
    description:
      'Full stack financial Dashboard with publich home page, login page, dashboard pages, and invoice pages for Next.js Foundations course.',
    link: 'https://nextjs-dashboard-zzelifs-projects.vercel.app/',
    video: '/',
    path: '',
    id: 'project4',
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
    description:
      'Contributed to the backend development of DevEx API, implementing and testing CRUD operations using .NET C#. Gained foundational experience with Azure services, GitHub Actions, C#, ReactJS, and JavaScript through learning sessions and practical tasks. Participated in virtual stand-ups and team presentations while actively exploring DevOps concepts and cloud fundamentals.',
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
    end: 'Present',
    achievement: "President's Lister",
    id: 'edu1',
  },
  {
    school: 'Siena College of Taytay',
    degree: 'STEM Strand',
    start: '2015',
    end: '2021',
    achievement: 'Salutatorian',
    id: 'edu2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/zzelif/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dan-gabriel-lettac/',
  },
  {
    label: 'Resume',
    link: 'https://drive.google.com/file/d/1qMqsa2ZyLHdNIaLmsCj5arGDJ07K0Ya4/view?usp=sharing',
  },
]

export const EMAIL = 'dan.lettac@gmail.com'
