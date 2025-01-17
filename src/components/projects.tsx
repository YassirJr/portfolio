// atos chs project images
import atos_chs_login_light from "@/assets/projects/atos-chs/atos-chs-login-light.png";
import atos_chs_main_light from "@/assets/projects/atos-chs/atos-chs-main-light.png";
import atos_chs_login_dark from "@/assets/projects/atos-chs/atos-chs-login-dark.png";
import atos_chs_main_dark from "@/assets/projects/atos-chs/atos-chs-main-dark.png";

// atos doc management project images
import atos_gda_list_emp_light from "@/assets/projects/atos-gestion-doc/atos-gda-list-emp-light.png";
import atos_gda_list_stg_light from "@/assets/projects/atos-gestion-doc/atos-gda-list-stg-light.png";
import atos_gda_gen_doc_light from "@/assets/projects/atos-gestion-doc/atos-gda-gen-doc-light.png";
import atos_gda_list_gen_doc_light from "@/assets/projects/atos-gestion-doc/atos-gda-list-gen-doc-light.png";
import atos_gda_import_base_light from "@/assets/projects/atos-gestion-doc/atos-gda-import-base-light.png";
import atos_gda_export_base_light from "@/assets/projects/atos-gestion-doc/atos-gda-export-base-light.png";
import atos_gda_list_emp_dark from "@/assets/projects/atos-gestion-doc/atos-gda-list-emp-dark.png";
import atos_gda_list_stg_dark from "@/assets/projects/atos-gestion-doc/atos-gda-list-stg-dark.png";
import atos_gda_list_gen_doc_dark from "@/assets/projects/atos-gestion-doc/atos-gda-list-gen-doc-dark.png";
import atos_gda_import_base_dark from "@/assets/projects/atos-gestion-doc/atos-gda-import-base-dark.png";
import atos_gda_export_base_dark from "@/assets/projects/atos-gestion-doc/atos-gda-export-base-dark.png";


import {ProjectCard} from "@/components/project-card";

const projects = [
    {
        title: "Calculation of overtime hours",
        description: "A full-featured desktop application for tracking and managing overtime hours. built with React, Node.js, and ElectronJS.",
        longDescription: "This project involved building a customized Overtime application using Node.js, ElectronJS, and React. It combines the backend capabilities of Node.js with the cross-platform desktop app development features of ElectronJS, all while leveraging the UI components provided by React. The application allows users to efficiently manage and track overtime hours, providing a seamless and user-friendly experience across different operating systems.This project involved building a customized Overtime application using Node.js, ElectronJS, and React. It combines the backend capabilities of Node.js with the cross-platform desktop app development features of ElectronJS, all while leveraging the UI components provided by React. The application allows users to efficiently manage and track overtime hours, providing a seamless and user-friendly experience across different operating systems.\n",
        technologies: ["Electron.js", "React.js", "Node.js", "TypeScript", "Tailwind CSS", "Sqlite"],
        images: [
            atos_chs_login_light.src,
            atos_chs_login_dark.src,
            atos_chs_main_light.src,
            atos_chs_main_dark.src,
        ],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/project",
    },
    {
        title: "Administrative Document Management at Atos",
        description: "As part of my project at Atos, I developed an administrative document management application using Next.js, Prisma, and SQLite. The goal of this project was to facilitate the creation, management, and storage of administrative documents efficiently and securely.",
        longDescription: "As part of my project at Atos, I developed an administrative document management application using Next.js, Prisma, and SQLite. The goal of this project was to facilitate the creation, management, and storage of administrative documents efficiently and securely. The application allows users to create, edit, and delete documents, as well as search for specific documents based on various criteria. The project involved building a user-friendly interface using Next.js and Prisma, as well as implementing secure data storage and retrieval using SQLite. The application also includes features such as user authentication and authorization, ensuring that only authorized users can access and modify documents.\n",
        technologies: ["Next.js", "Prisma", "SQLite", "TypeScript", "Tailwind CSS", "Git", "Github", "DOCX"],
        images: [
            atos_gda_list_emp_light.src,
            atos_gda_list_emp_dark.src,
            atos_gda_list_stg_light.src,
            atos_gda_list_stg_dark.src,
            atos_gda_gen_doc_light.src,
            atos_gda_list_gen_doc_light.src,
            atos_gda_import_base_light.src,
            atos_gda_export_base_light.src,
            atos_gda_list_emp_light.src,
            atos_gda_list_gen_doc_dark.src,
            atos_gda_import_base_dark.src,
            atos_gda_export_base_dark.src,
        ],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/project",
    }
]


export default function Projects() {
    return (
        <div className="w-full min-h-screen flex flex-wrap md:gap-10 justify-center items-center ">
            {
                projects.map((project, index) => (
                    <ProjectCard {...project} key={index}/>
                ))
            }
        </div>

    );
}