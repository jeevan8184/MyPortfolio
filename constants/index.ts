
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';


export const bottomIcons = [
    {
        Icon: AiOutlineHome,
        link: '/#home',
        name: 'home'
    },
    {
        Icon: AiOutlineUser,
        link: '/#skills',
        name: 'skills'
    },
    {
        Icon: BiBook,
        link: '/#projects',
        name: 'projects'
    },
    {
        Icon: RiServiceLine,
        link: '/#education',
        altLink: '/#courses',
        name: 'education',
        altName: 'courses'
    },
    {
        Icon: BiMessageSquareDetail,
        link: '/#contactme', 
        altLink: '/#acheivements',
        name: 'contactme',
        altName: 'acheivements'
    },
];

export const MainItems=[
    {
        label:'Home',
        link:'/#home',
        name:'home'
    },
    {
        label:'Skills',
        link:'/#skills',
        name:'skills'
    },
]

export const navItems=[
    {
        label:'Projects',
        link:'/#projects' || '/#projects1',
        name:'projects'
    },
    {
        label:'Education',
        link:'/#education',
        name:'education'
    },
    {
        label:'Courses',
        link:'/#courses',
        name:'courses'
    },
    {
        label:'Acheivements',
        link:'/#acheivements',
        name:'acheivements'
    },
    {
        label:'Contact Me',
        link:'/#contactme',
        name:'contactme'
    },
]

export const SocialIcons=[
    {
        label:'Github',
        Icon:FaGithub,
        url:"https://github.com/jeevan8184"
    },
    {
        label:'Instagram',
        Icon:FaInstagram,
        url:"https://www.instagram.com/jatavathjeevan/"
    },
    {
        label:'LinkedIn',
        Icon:FaLinkedinIn,
        url:"https://www.linkedin.com/in/jatavath-jeevan-12288b31b/"
    },
    {
        label:'Leetcode',
        Icon:SiLeetcode,
        url:"https://leetcode.com/u/HELLO8/"
    },
]

export const frontend=[
    {
        img:'/assets/skills/html.svg',
        label:'HTML'
    },
    {
        img:'/assets/skills/css.svg',
        label:'CSS'
    },
    {
        img:'/assets/skills/javascript.svg',
        label:'Javascript'
    },
    {
        img:'/assets/skills/react.svg',
        label:'React'
    },
    {
        img:'/assets/skills/nextjs.svg',
        label:'NextJs'
    },
    {
        img:'/assets/skills/tailwindcss.svg',
        label:'Tailwindcss'
    },
]

export const backend=[
    {
        img:'/assets/skills/nodejs.svg',
        label:'Node js'
    },
    {
        img:'/assets/skills/expressjs.svg',
        label:'Express js'
    },
    {
        img:'/assets/skills/mysql.svg',
        label:'MySql'
    },
    {
        img:'/assets/skills/mongodb.png',
        label:'MongoDB'
    },
]

export const programming=[
    {
        img:'/assets/skills/java.svg',
        label:'Java'
    },
    {
        img:'/assets/skills/python.svg',
        label:'Python'
    },
]

export const tools={
    img:'/assets/skills/git.svg',
    label:'Git'
}

export const Aiml=[
    {
        label:'Pandas',
    },
    {
        label:'Numpy',
    },
    {
        label:'matplotlib',
    }
]

export const EducationItems=[
    {
        name:'Chaitanya Bharathi Institute of Technology',
        year:'2023-2027',
        course:'Aritificial Intelligence & Machine Learning',
        cgpa:'8.45',
        img:'/assets/education/cbit.png',
        location:'Gandipet, Hyderabad',
        website:'https://cbit.ac.in'
    },
    {
        name:'Vishwa Bharathi Junior College',
        year:'2020-2022',
        course:'MPC(Maths,Physics,Chemistry)',
        cgpa1:'92.6%',
        img:'/assets/education/inter.png',
        location:'Shadnagar, Rangareddy',
        website:null
    },
    {
        name:'Fathima High School',
        year:'2020',
        course:'classX',
        cgpa:'10',
        img:'/assets/education/tenth.png',
        location:'Kothur, Rangareddy',
        website:null
    },
]

export const projectImgs=[
    '/assets/projects/social1.png',
    '/assets/projects/social.png',
]

export const EcommerceImgs=[
    "/assets/projects/Ecommerce1.png",
    "/assets/projects/Ecommerce2.png",
    "/assets/projects/Ecommerce3.png"
]

export const AcheivementItems=[
    {
        img:'/assets/courses/leetcode.png',
        label:'Leetcode',
        desc:'solved 150+ problems on leetcode and has a good contest rating.',
        url:'https://leetcode.com/u/HELLO8/'
    },
    {
        img:'/assets/courses/gfg.png',
        label:'Geeksforgeeks',
        desc:'solved 80+ problems on geeksforgeeks using the object oriented programming language Java.',
        url:'https://www.geeksforgeeks.org/user/jeevanja74df/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'
    },
]
