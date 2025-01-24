import { Project } from "../components/timeline/project.model";

export const projects: Project[] = [
  {
    startDate: new Date(2021, 10, 1),
    endDate: null,
    jobTitle: "UX/UI Senior Developer",
    company: "Frisbo",
    responsibilities: [
      "The Front-End I worked on is responsible for 4 million daily backend requests, on the platform that processes hundreds of thousands of orders per month, 10 million daily requests, as well as 5-6 million of messages processed on queues",
      "Implemented the total interface rework that serves hundreds of B2B users",
      "Optimized the enterprise APP, reducing loading times by 20%",
      "Worked together with the company’s team in startup mode, assisting the growth by 3x, with the valuation seeing an increase from 3 million to 8 million",
      "Implemented app changes according to new business specs",
      "Front-End bug fixing, UX & UI improvements",
      "Development of app features (Angular, Bootstrap 3, Tailwind 2-3, RxJS)"
    ]
  },
  {
    startDate: new Date(2019, 3, 1),
    endDate: new Date(2021, 5, 1),
    jobTitle: "UX/UI Consultant",
    company: "AROBS Transilvania Software (Agriterra)",
    responsibilities: [
      "Proposed & implemented UI & UX improvements (Angular, Angular Material)",
      "Implemented new UI & UX features and changes on request (Angular)",
      "Proposed & implemented a UI rework of the company’s management app in order to improve usability and streamline the visual language accross Angular Material & custom components",
      "Development of auxiliary mobile app (Flutter)"
    ]
  },
  {
    startDate: new Date(2018, 4, 1),
    endDate: new Date(2019, 0, 1),
    jobTitle: "Front-End Developer",
    company: "NTT DATA (Virgin Media)",
    responsibilities: [
      "Implemented marketing and promotional campaign pages & emails (Bootstrap 3)"
    ]
  },
  {
    startDate: new Date(2014, 9, 1),
    endDate: new Date(2018, 4, 1),
    jobTitle: "Front-End Engineer",
    company: "Dovona (perfectmemorials.com)",
    responsibilities: [
      "Rebuilt the front-end for the online store (Bootstrap 4, Sass)",
      "Implemented the store’s mobile version prototypes in Google AMP",
      "Designed the prototypes for the store’s mobile version featuring UI & UX improvements",
      "Mobile integration, maintenance and feature addition for the legacy online store",
      "Reworked the front-end for the administration and warehouse terminals app (AngularJS)"
    ]
  },
  {
    startDate: new Date(2013, 11, 1),
    endDate: new Date(2014, 5, 1),
    jobTitle: "Front-End Developer",
    company: "Holobest (themeforest.net)",
    responsibilities: [
      "Developed the Corex theme (HTML, CSS, jQuery, Bootstrap 3)"
    ]
  },
  {
    startDate: new Date(2013, 5, 1),
    endDate: new Date(2013, 7, 1),
    jobTitle: "Internship",
    company: "Comknow",
    responsibilities: [
      "Modified WordPress themes (HTML, CSS, jQuery)"
    ]
  },
];
