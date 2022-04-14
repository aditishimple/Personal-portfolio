// import one from "../assets/svg/projects/one.svg";
// import two from "../assets/svg/projects/two.svg";
// import three from "../assets/svg/projects/three.svg";
// import four from "../assets/svg/projects/four.svg";
// import five from "../assets/svg/projects/five.svg";
// import six from "../assets/svg/projects/six.svg";
// import seven from "../assets/svg/projects/seven.svg";
// import eight from "../assets/svg/projects/eight.svg";
// import udemy from "../assets/png/udemy2.jpeg";
import pepperfry from '../assets/png/pepperfryHomePage.png'
import memegenerator from '../assets/png/memegenerator.png'

export const projectsData = [
  {
    id: 1,
    projectName: "Pepperfry - Clone",
    projectDesc: [
      `Frontend focused collaborative project with end to end user experience of Pepperfry.com`,
      [
        "Product page with sort and filter features",
        "Redux Integration",
        "Cart and checkout page",
      ],
    ],
    tags: ["React", "Redux", "MaterialUI"],
    code: "https://github.com/Vikram-amin/pepperfry-clone.git",
    demo: "https://clone-pepperfry.netlify.app/",
    image: pepperfry
  },
  {
    id: 2,
    projectName: "Meme Generator App",
    projectDesc: [
      "A meme generator app where you can create your own memes with a text at top and bottom of the image.",
      ["useState", "useEffect for fetching data", "React forms"],
    ],
    tags: ["React"],
    code: "https://github.com/aditishimple/meme_generator_react.git",
    demo: "https://meme-generator-app-react.vercel.app/",
    image: memegenerator
  },
  // {
  //   id: 3,
  //   projectName: "R + F Clone",
  //   projectDesc: [
  //     "A two page clone of Rodanandfields.com with fully a functional cart and product carousel",
  //     [
  //       "Built home and cart pages",
  //       "Header drop down menu",
  //       "Added functionality to cart",
  //     ],
  //   ],
  //   tags: ["HTML", "JavaScript", "CSS"],
  //   code: "https://github.com/Renukote/clone-rodanandfields.com",
  //   demo: "https://renukote.github.io/clone-rodanandfields.com/homePage.html",
  //   image:
  //     "https://raw.githubusercontent.com/Renukote/clone-rodanandfields.com/master/rodan-and-fields-thumbnail.png",
  // },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
