// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Reservation-railway",
            description: "Created a seameless and user friendly railway reservation application .",
            link: "https://github.com/DivyadharshiniA/DBMS-RAILWAY-RESERVATION-"
        },
        {
            title: "python-mini-projects",
            description: "Small games like word and letter finding games in python.",
            link: "https://github.com/DivyadharshiniA/python-mini-projects"
        },
        {
            title: "Rock-paper-scissor",
            description: "Created a rock paper scissor game in python.",
            link: "https://github.com/DivyadharshiniA/Rock-paper-scissor-game"
        }
    ];

    return (
        <section>
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
