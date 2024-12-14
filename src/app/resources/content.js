import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Darkhan',
    lastName:  'Akhmetov',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Almaty',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Russian', 'Kazakh']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/darkhanakh',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/darkhanakh/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:darkhan.akhmetov.student@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineer and builder</>,
    subline: <>I'm Darkhan, a software developer with a knack for creating efficient solutions at <InlineCode>Hero's Journey</InlineCode>. After hours, I work on passion projects that merge technology and social impact.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Darkhan is an Almaty-based software developer with a passion for turning complex problems into innovative, efficient solutions. His work spans web development, artificial intelligence projects, and the intersection of technology and social impact.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Hero’s Journey',
                timeframe: '2024 (Internship)',
                role: 'Frontend Developer Intern',
                achievements: [
                    <>Built and optimized user interfaces for web applications, enhancing site performance and responsiveness.</>,
                    <>Collaborated with cross-functional teams to integrate APIs and ensure seamless user experiences.</>,
                    <>Contributed to iterative design processes, improving workflow efficiency by 20% during the project lifecycle.</>
                ],
                images: []
            },
            {
                company: 'NFactorial',
                timeframe: '2023 - Present',
                role: 'Software Development Mentor',
                achievements: [
                    <>Mentored over 60 students in foundational coding and web development, tailoring lessons for diverse learning needs.</>,
                    <>Designed and implemented a structured curriculum that improved student project completion rates by 90%.</>
                ],
                images: []
            },
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical Skills',
        skills: [
            {
                title: 'Vue.js',
                description: <>Proficient in building dynamic and responsive web applications using Vue.js and modern JavaScript frameworks.</>,
                images: [] // optional: include images of your projects if applicable
            },
            {
                title: 'React.js',
                description: <>Experienced in developing scalable front-end solutions with React.js, leveraging component-based architecture for efficiency.</>,
                images: []
            },
            {
                title: 'Next.js',
                description: <>Skilled in creating server-rendered web applications with Next.js, focusing on performance and SEO optimization.</>,
                images: []
            },
            {
                title: 'Python',
                description: <>Capable of writing clean, efficient Python scripts for automation, data analysis, and backend development.</>,
                images: []
            },
            {
                title: 'Git/GitHub',
                description: <>Fluent in version control with Git, collaborating effectively on projects using GitHub workflows and best practices.</>,
                images: []
            }
        ]
    },
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };