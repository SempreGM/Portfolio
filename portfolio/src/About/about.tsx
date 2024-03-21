import React from "react";
import "./about.css";
import Navbar from "../Components/Navbar/navbar";

function About (){
    return (
        <><Navbar/>
        <img src="/foto like.jpg" className="perfil"  alt="perfil"/>
        <div className="about">
            <h1>Sobre Mim</h1>
            <p>Eu sou Bernardo, 21 anos, apaixonado por tecnologia. Desde jovem, os dispositivos eletrônicos me fascinam, assim como filmes, séries e jogos. Vejo a tecnologia como um estilo de vida, sempre buscando maneiras de integrá-la ao meu dia a dia e explorar suas infinitas possibilidades.</p>
            <h1>Cursos</h1>
            <tr>
                <td>Linguagem de programaçao - 2020</td>
                Ruby e orientaçao a objetos - 2020
                <td> Desenvolvimento React - 2023</td>
                Webdesign Front-end Fundamentos - 2024
                <td>Faculdade de Analise e Desenvolvimendo de Sistemas - 2024</td>
                Bootstrap 5 do básico ao avançado - 2024
            </tr>
            <h1>Linguagem</h1>
            <tr>
                Portugues: Nativo
                <td>Ingles: Avançado</td>
                Espanhol: Intermediario
            </tr>
            <h1>Experiencia de Trabalho</h1>
            <tr>
                <td>Contabilidade | 2018 - 2022</td>
                Barista | 2022 - 2023
                <td>Bartender | 2024</td>
            </tr>
            </div></>

    )
}


export default About;