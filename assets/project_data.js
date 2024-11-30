import project1_img from '../assets/project_1.png';
import project2_img from '../assets/project_2.png';
import project3_img from '../assets/project_3.png';
import project4_img from '../assets/project_4.png';

const project_data = [
    {
        w_no: 1,
        w_name: "Web BPN Land Measurement Application",
        w_img: project1_img,
        description: "A mini project for a land measurement website application that aims to simplify the process of measuring private and business land.",
        role: "Document Administrator",
        contribution: [
            "Conducting software requirements analysis and design including analyzing functional and non-functional requirements, and questionnaires.",
            "Creating wireframes, branding products, and application testing."
        ]
    },
    {
        w_no: 2,
        w_name: "Tax Potential Data Mobile Application",
        w_img: project2_img,
        description: "A mobile-based project application that functions to facilitate tax officers in recording potential taxpayers and registering prospective taxpayers to register their businesses as taxpayers until they obtain a taxpayer certificate.",
        role: "UI/UX Designer",
        contribution: [
            "Conducting software requirements analysis and design including analyzing functional and non-functional requirements.",
            "Developing Use Cases, Flow Charts, ERDs, and Class Diagrams.",
            "Implementing the design by creating an application interface image on Figma.",
            "Creating UML (Unified Modeling Language), UI/Mockup, and Front End, branding products.",
            "Implementing and testing application testing."
        ]
    },
    {
        w_no: 3,
        w_name: "Polibatam Online Module Management Website Application",
        w_img: project3_img,
        description: "Progressive Web Application to manage learning modules produced by Polibatam Lecturers to support the Merdeka Belajar program. Consists of 4 users, Admin, Students, Lecturers/Laborator, and Guests.",
        role: "Documentation Manager",
        contribution: [
            "Designing software requirements, including analyzing functional and non-functional requirements.",
            "Developing Use Cases, Activity Diagrams, focused on user experience and interface design.",
            "Creating a report on the implementation and creation of web applications along with a manual book and front end display."
        ]
    },
    {
        w_no: 4,
        w_name: "Website System Management Replacement Data Asset IT",
        w_img: project4_img,
        description: "Website application that processes IT asset data management used by employee users, its management includes data on replacing old assets with new assets, new IT asset management data, scrapping asset management data, and asset data collection for new employees. Users in this application are IT Interns, IT Managers, and company employees. This application adjusts to company standards that use Windows authentication.",
        role: "Web Developer",
        contribution: [
            "Implemented frontend and backend functionalities.",
            "Designing user interfaces following company guidelines to ensure consistency and usability.",
            "Developed a system using C#, .NET 8 MVC and SQL Server to manage and track usage data and turnover of old and new IT assets.",
            "Implemented Windows-based authentication via IIS server and automated email notifications for system alerts and updates."
        ]
    },
];

export default project_data;