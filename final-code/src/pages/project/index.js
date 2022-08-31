import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  wordleClone,
  gpt3,
  gericht,
  huddle,
  restCOuntry,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Wordle Clone',
    desc:
      'A game that gives you 5 attempts to guess the correct word of the day',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Wordle-clone',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://worlde-cloned.netlify.app/',
    },
    imgUrl: wordleClone,
  },
  {
    id: 2,
    name: 'Restaurant Website',
    desc: 'A Responsive restaurant website design with great UI Effect',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Restaurant-Website-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gericht-restaurant-website.netlify.app/',
    },
    imgUrl: gericht,
  },
  {
    id: 3,
    name: 'GPT-3 Project',
    desc: 'This is an amazing project with cool UI interface',
    stack: 'React JS',
    imgUrl: gpt3,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/OpenAI-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gpt3-openai-project.netlify.app/',
    },
  },
  {
    id: 4,
    name: 'Hotel Booking Project',
    desc: 'A complicated project that enhanced my skills a lot',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-booking-project.netlify.app/',
    },
    imgUrl:
      'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
  },

  {
    id: 5,
    name: 'Rest Country API',
    desc: 'A project that displays all information about a country',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/rest-countries-api-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://rest-countries-web-app-project.netlify.app/',
    },
    imgUrl: restCOuntry,
  },
  {
    id: 6,
    name: 'Huddle Landing Page',
    desc: 'A simple landing page website',
    stack: 'React js, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://huddle-website-project.netlify.app/',
    },
    imgUrl: huddle,
  },
  {
    id: 4,
    name: 'Hotel Booking Project',
    desc: 'A complicated project that enhanced my skills a lot',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-booking-project.netlify.app/',
    },
    imgUrl:
      'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
  },
  {
    id: 2,
    name: 'Restaurant Website',
    desc: 'A Responsive restaurant website design with great UI Effect',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Restaurant-Website-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gericht-restaurant-website.netlify.app/',
    },
    imgUrl: gericht,
  },
]
