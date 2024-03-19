import React from "react";
import Navbar from "../Components/Navbar/navbar";
import './contact.css'

function Contact() {
    return (
        <> 
            <Navbar />
            <div className="contacts">
                <h1>Entre em Contato</h1>
                <p>Olá! Fico muito feliz com o seu interesse em entrar em contato comigo. Seja para compartilhar seus comentários, fazer perguntas ou sugerir ideias, estou aqui para ouvir você. Sinta-se à vontade para me enviar um e-mail diretamente para <a href="mailto:bernardomaia57@gmail.com">bernardomaia57@gmail.com</a>. Prometo responder a todas as mensagens dentro de 24 horas, embora em períodos de movimento intenso possa levar um pouco mais de tempo.
                Ah, e se preferir, você também pode me encontrar no <a href="https://wa.me/5531998319573">Whatsapp</a>. Não hesite em me enviar uma mensagem!
                Muito obrigado pelo seu interesse e mal posso esperar para conversarmos!</p>
            </div>
            <div className="social">
                <div className="linkedin">
                    <p>me siga no linkedin</p>
                    <a href="https://www.linkedin.com/in/bernardomaia57/" target="_blank" rel="noreferrer">
                    <img src="/linkedin-161-svgrepo-com.svg" alt="linkedin icon" width="50" height="50" />
                    </a>
                </div>
                <div className="github">
                    <p>me siga no github</p>
                    <a href="https://github.com/SempreGM/" target="_blank" rel="noreferrer">
                    <img src="/github-svgrepo-com.svg" alt="GitHub icon" width="50" height="50" />
                    </a>
                </div>
                <div className="email">
                    <p>email</p>
                    <a href="mailto:bernardomaia57@gmail.com">
                    <img src="/email-9-svgrepo-com.svg" alt="email icon" width="50" height="50" />
                    </a>
                </div>
                <div className="whatsapp">
                    <p>Whatsapp</p>
                    <a href="https://wa.me/5531998319573" target="_blank" rel="noreferrer">
                    <img src="/whatsapp-svgrepo-com.svg" alt="whatsapp" width="50" height="50" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
