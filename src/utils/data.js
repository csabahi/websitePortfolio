import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "UW Baja SAE Design Team",
    projects: "100+ Hours",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Excellence in Education Award",
    projects: "Sole Recipent for class of 2022",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Great Academic Standing",
    projects: "3.9 GPA",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I am a student at The University of Waterloo, and aspire to work in the automotive and aerospace industries, with the goal of working in Formula 1 after completing my post-secondary studies.",
  "Through Co-Op experiences I aspire to build and develop both hardware and software skills. And learn the ins-and-outs of these sectors from both industry giants and start-ups.",
];

export const workExp = [
  {
    place: "Bend-All Automotive ULC",
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
  {
    place: "York Mills CI Athletic Council",
    tenure: "June 2021 - June 2022",
    role: "Public Relations Executive",
    detail:
      "Led 10+ members and was responsible for advertisements, publicity and organization of events, such as annual Athletic Banquet, Holiday Events, intramurals, and end of year carnival with an average attendance of over 700 students",
  },
];

export const comments = [
  {
    name: "Mechanical/Hardware",
    post: "",
    comment:
      "SolidWorks, AutoCAD, Finite Element Analysis \n Failure Analysis, Test Validation, Prototyping, DC/AC circtuits, Manufacturing",
    img: "./mechanical-gears-.png",
  },
  {
    name: "Software",
    post: "",
    comment:
      "Languages: C++, Python, RobotC, React.js, Libraries: Numpy, Pandas, SciPy \n Tools: Github",
    img: "./softwareIcon.png",
  },
  {
    name: "Interests",
    post: "",
    comment:
      "Machine Learning, Artifial Intelligence, Problem Solving, Automotives, Aerspace, Technology, Finance, Biking, Movies, Music ",
    img: "./interestsIcon.png",
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
