import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "UW Baja SAE Design Team",
    projects: 100,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Great Academic Standing",
    projects: 4.0,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I am a student at The University of Waterloo, and aspire to work in the automotive and aerospace industries, with the goal of working in Formula 1 after graduation.",
  "Through Co-Op experiences I aspire to build and develop both hardware and software skills. And learn the ins-and-outs of these sectors from both industry giants and start-ups",
];

export const workExp = [
  {
    place: "Bend-All Automotive, Brisbane",
    tenure: "May 2023 - Aug 2023",
    role: "R&D Engineer",
    detail:
      "Fill In Later",
  },
  {
    place: "Terroni Group",
    tenure: "Apr 2022 - Aug 2022",
    role: "Server Assistant",
    detail:
      "Communicated and coordinated with different groups of the restaurant such as kitchen, management, and hosts to provide high quality service to clients as well as to solve any problems effectively and efficiently",
  },
  // {
  //   place: "Global Solution",
  //   tenure: "Aug 2014 - Sep 2016",
  //   role: "Sr. Product Designer",
  //   detail:
  //     "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  // },
];

export const comments = [
  {
    name: "Mechanical/Hardware",
    post: "Creative Manager",
    comment:
      " SolidWorks \n AutoCAD \n Finite Element Analysis \n Failure Analysis \n Test Validation \n Prototyping",
    img: "./people2.png",
  },
  {
    name: "Software",
    post: "Languages: C++, Python \n Libraries: Numpy, Pandas, SciPy",
    comment:
      "Languages: C++, Python \n Libraries: Numpy, Pandas, SciPy",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
