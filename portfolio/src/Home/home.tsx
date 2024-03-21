import React from "react";
import './home.css';
import Navbar from "../Components/Navbar/navbar";

function Home() {
    return (
        <>
                <Navbar/>
                <img src="/foto perfil.jpg" alt="personagem" className="personagem" />
            <div className="home">
                <h1>Ola,<br/>Eu sou Bernardo Maia<br/>Front-end developer</h1>
                <h3>Tecnologias que eu gosto </h3>
                <div className="icon">
                    <tr>
                        <td align="center">
                            <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript icon" width="100" height="100" />
                        </td>
                        <td align="center">
                            <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="TypeScript icon" width="100" height="100" />
                        </td>
                        <td align="center">
                            <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React icon" width="100" height="100" />
                        </td>
                        <td align="center">
                            <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="Git icon" width="100" height="100" />
                        </td>
                    </tr>
                </div>
            </div>
        </>
    );
}

export default Home;
