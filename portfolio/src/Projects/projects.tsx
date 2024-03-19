import React from "react";
import Navbar from "../Components/Navbar/navbar";
import Cards from "../Components/Cards/cards"; 
import "./projects.css";

function Projects() {
    const projectsData = [
        {
            imageUrl: "/Portfolio.png",
            imageAlt: "Portfolio",
            title: "Portfolio",
            description: "Portfolio para uso pessoal"
        },
        {
            imageUrl: "/Portfolio.png",
            imageAlt: "Portfolio",
            title: "Portfolio",
            description: "Portfolio para uso pessoal"
        },
        {
            imageUrl: "/Portfolio.png",
            imageAlt: "Portfolio",
            title: "Portfolio",
            description: "Portfolio para uso pessoal"
        },
        {
            imageUrl: "/Portfolio.png",
            imageAlt: "Portfolio",
            title: "Portfolio",
            description: "Portfolio para uso pessoal"
        },
        // Adicione mais objetos de dados para cada projeto conforme necessário
    ];

    return (
        <>
            <Navbar />
            <div className="projects">
                <div className="header">
                    <h3>Alguns Projetos feitos por mim</h3>
                </div>
                <div className="cards">
                    {projectsData.map((project, index) => (
                        <Cards
                            key={index}
                            imageUrl={project.imageUrl}
                            imageAlt={project.imageAlt}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
