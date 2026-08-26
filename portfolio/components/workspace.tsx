"use client";

import {
  Blocks,
  Braces,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Code2,
  Copy,
  FileCode2,
  FileJson2,
  Files,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  PanelBottom,
  Search,
  Settings,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type FileId = "inicio" | "sobre" | "projetos" | "habilidades" | "experiencias" | "contato";

type PortfolioFile = {
  id: FileId;
  label: string;
  type: "tsx" | "json" | "ts" | "css" | "md";
};

const files: PortfolioFile[] = [
  { id: "inicio", label: "inicio.tsx", type: "tsx" },
  { id: "sobre", label: "sobre-mim.json", type: "json" },
  { id: "projetos", label: "projetos.ts", type: "ts" },
  { id: "habilidades", label: "habilidades.css", type: "css" },
  { id: "experiencias", label: "experiencias.md", type: "md" },
  { id: "contato", label: "contato.md", type: "md" },
];

const iconColor = { tsx: "#61dafb", json: "#f1e05a", ts: "#3178c6", css: "#a970ff", md: "#7ee787" };

function FileIcon({ type }: { type: PortfolioFile["type"] }) {
  return type === "json" ? <FileJson2 size={16} color={iconColor[type]} /> : <FileCode2 size={16} color={iconColor[type]} />;
}

export function Workspace() {
  const [active, setActive] = useState<FileId>("inicio");
  const [tabs, setTabs] = useState<FileId[]>(["inicio"]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [command, setCommand] = useState("");
  const [terminalLines, setTerminalLines] = useState(["Bem-vindo ao terminal de Bernardo. Digite 'help' para ver os comandos."]);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [typedRole, setTypedRole] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const openFile = (id: FileId) => {
    setTabs((current) => (current.includes(id) ? current : [...current, id]));
    setActive(id);
    setSidebarOpen(false);
  };

  const closeTab = (id: FileId) => {
    if (tabs.length === 1) return;
    const index = tabs.indexOf(id);
    const nextTabs = tabs.filter((tab) => tab !== id);
    setTabs(nextTabs);
    if (active === id) setActive(nextTabs[Math.max(0, index - 1)]);
  };

  const runCommand = (event: React.FormEvent) => {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) return;
    if (value === "clear") {
      setTerminalLines([]);
    } else if (value === "help") {
      setTerminalLines((lines) => [...lines, `> ${command}`, "about · projects · skills · experience · contact · clear"]);
    } else {
      const target: Record<string, FileId> = { about: "sobre", projects: "projetos", skills: "habilidades", experience: "experiencias", contact: "contato" };
      if (target[value]) {
        openFile(target[value]);
        setTerminalLines((lines) => [...lines, `> ${command}`, `Abrindo ${files.find((file) => file.id === target[value])?.label}...`]);
      } else {
        setTerminalLines((lines) => [...lines, `> ${command}`, `Comando não encontrado: ${value}`]);
      }
    }
    setCommand("");
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : preferredTheme;
    const frame = window.requestAnimationFrame(() => setTheme(initialTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const role = "Desenvolvedor Front-End Júnior";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setTypedRole(role));
      return () => window.cancelAnimationFrame(frame);
    }
    let position = 0;
    const timer = window.setInterval(() => {
      position += 1;
      setTypedRole(role.slice(0, position));
      if (position === role.length) window.clearInterval(timer);
    }, 48);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "`") {
        event.preventDefault();
        setTerminalOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <main className="ide-shell">
      <header className="titlebar">
        <button className="mobile-menu" onClick={() => setSidebarOpen((open) => !open)} aria-label="Abrir Explorer"><Menu size={17} /></button>
        <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
        <nav aria-label="Menu principal"><button>Arquivo</button><button>Editar</button><button>Exibir</button></nav>
        <div className="command-center"><Search size={14} /><span>bernardo-maia / portfólio</span></div>
        <div className="window-actions" aria-hidden="true"><span>—</span><span>□</span><span>×</span></div>
      </header>

      <div className="workbench">
        <aside className="activitybar" aria-label="Atividades">
          <div><button className="active" aria-label="Explorer"><Files /></button><button aria-label="Pesquisar"><Search /></button><button aria-label="Controle de código-fonte"><GitBranch /></button><button aria-label="Extensões"><Blocks /></button></div>
          <div><button onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`}>{theme === "dark" ? <Sun /> : <Moon />}</button><button aria-label="Conta"><CircleUserRound /></button><button aria-label="Configurações"><Settings /></button></div>
        </aside>

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-title"><span>EXPLORER</span><button aria-label="Fechar Explorer" onClick={() => setSidebarOpen(false)}><X size={16} /></button></div>
          <div className="folder-title"><ChevronDown size={15} /><strong>PORTFOLIO-BERNARDO</strong></div>
          <div className="folder-subtitle"><ChevronDown size={15} /><span>src</span></div>
          <div className="file-tree">
            {files.map((file) => <button key={file.id} className={active === file.id ? "selected" : ""} onClick={() => openFile(file.id)}><FileIcon type={file.type} /><span>{file.label}</span></button>)}
            <a href="/Curriculo-Bernardo-Maia.pdf" target="_blank" rel="noreferrer"><FileIcon type="md" /><span>curriculo.pdf</span><small>PDF</small></a>
          </div>
        </aside>

        <section className="editor-area">
          <div className="tabs" role="tablist" aria-label="Arquivos abertos">
            {tabs.map((id) => {
              const file = files.find((item) => item.id === id)!;
              return <button key={id} role="tab" aria-selected={active === id} className={active === id ? "active" : ""} onClick={() => setActive(id)}><FileIcon type={file.type} /><span>{file.label}</span><span className="tab-close" onClick={(event) => { event.stopPropagation(); closeTab(id); }} aria-label={`Fechar ${file.label}`}><X size={14} /></span></button>;
            })}
          </div>
          <div className="breadcrumbs"><span>portfolio-bernardo</span><ChevronRight /><span>src</span><ChevronRight /><span>{files.find((file) => file.id === active)?.label}</span></div>
          <div className="editor-scroll"><EditorContent active={active} openFile={openFile} typedRole={typedRole} /></div>
          {terminalOpen && <section className="terminal" onClick={() => inputRef.current?.focus()} aria-label="Terminal interativo">
            <div className="terminal-header"><div><button className="active">TERMINAL</button><button>SAÍDA</button><button>PROBLEMAS</button></div><button onClick={() => setTerminalOpen(false)} aria-label="Fechar terminal"><X size={16} /></button></div>
            <div className="terminal-body">{terminalLines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}<form onSubmit={runCommand}><span><b>bernardo</b>@portfolio:~$</span><input ref={inputRef} value={command} onChange={(event) => setCommand(event.target.value)} aria-label="Comando do terminal" autoComplete="off" /></form></div>
          </section>}
        </section>
      </div>

      <footer className="statusbar"><div><GitBranch size={14} /><span>main*</span><span>✓ 0</span><span>△ 0</span></div><div><button onClick={() => setTerminalOpen((open) => !open)}><PanelBottom size={14} /> Terminal</button><span>UTF-8</span><span>TypeScript React</span><span>Ln 1, Col 1</span></div></footer>
    </main>
  );
}

function EditorContent({ active, openFile, typedRole }: { active: FileId; openFile: (id: FileId) => void; typedRole: string }) {
  if (active === "sobre") return <AboutContent />;
  if (active === "projetos") return <ProjectsContent />;
  if (active === "habilidades") return <SkillsContent />;
  if (active === "experiencias") return <ExperienceContent />;
  if (active === "contato") return <ContactContent />;
  return (
    <article className="hero-editor">
      <div className="line-numbers" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <span key={index}>{index + 1}</span>)}</div>
      <div className="hero-content">
        <p className="code-comment">{"// olá, mundo! Bem-vindo ao meu portfólio"}</p>
        <div className="availability"><span /> Disponível para oportunidades</div>
        <p className="code-tag">&lt;desenvolvedor&gt;</p>
        <h1>Bernardo <span>Maia</span></h1>
        <h2 className="typing-role">{typedRole}<span aria-hidden="true" /></h2>
        <p className="intro">Transformo ideias em interfaces acessíveis, responsivas e bem construídas — com atenção aos detalhes e vontade constante de aprender.</p>
        <div className="hero-actions"><button className="primary" onClick={() => openFile("projetos")}><Code2 size={18} /> Explorar projetos</button><button onClick={() => openFile("contato")}><Mail size={18} /> Entrar em contato</button></div>
        <div className="quick-grid"><button onClick={() => openFile("sobre")}><span><Braces /></span><div><strong>Sobre mim</strong><small>Conheça minha trajetória</small></div><ChevronRight /></button><button onClick={() => openFile("projetos")}><span><Copy /></span><div><strong>Projetos</strong><small>Veja o que estou criando</small></div><ChevronRight /></button></div>
        <div className="social-links"><a href="https://github.com/SempreGM" target="_blank" rel="noreferrer"><Github /> GitHub</a><a href="https://linkedin.com/in/bernardomaia57" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href="mailto:bernardomaia57@gmail.com"><Mail /> E-mail</a></div>
        <p className="code-tag">&lt;/desenvolvedor&gt;</p>
      </div>
    </article>
  );
}

function EditorDocument({ children, eyebrow, title, extension }: { children: React.ReactNode; eyebrow: string; title: string; extension: PortfolioFile["type"] }) {
  return <article className="editor-document"><header><div className="document-icon"><FileIcon type={extension} /></div><div><p>{eyebrow}</p><h1>{title}</h1></div></header>{children}</article>;
}

function AboutContent() {
  return <EditorDocument eyebrow="sobre-mim.json" title="Um pouco sobre mim" extension="json">
    <div className="json-card code-block" aria-label="Perfil em formato JSON">
      <p><span className="syntax-bracket">{"{"}</span></p>
      <p><span className="syntax-key">&quot;nome&quot;</span>: <span className="syntax-string">&quot;Bernardo Maia&quot;</span>,</p>
      <p><span className="syntax-key">&quot;localização&quot;</span>: <span className="syntax-string">&quot;Contagem, Minas Gerais&quot;</span>,</p>
      <p><span className="syntax-key">&quot;objetivo&quot;</span>: <span className="syntax-string">&quot;Desenvolvedor Front-End Júnior&quot;</span>,</p>
      <p><span className="syntax-key">&quot;perfil&quot;</span>: <span className="syntax-string long-string">&quot;Profissional em transição para tecnologia, com experiência prática em desenvolvimento web e foco em construir interfaces claras, responsivas e acessíveis.&quot;</span>,</p>
      <p><span className="syntax-key">&quot;qualidades&quot;</span>: [</p>
      <p className="indent"><span className="syntax-string">&quot;proatividade&quot;</span>, <span className="syntax-string">&quot;persistência&quot;</span>, <span className="syntax-string">&quot;organização&quot;</span>,</p>
      <p className="indent"><span className="syntax-string">&quot;atenção aos detalhes&quot;</span>, <span className="syntax-string">&quot;resolução de problemas&quot;</span></p>
      <p>],</p>
      <p><span className="syntax-key">&quot;experiência_anterior&quot;</span>: [<span className="syntax-string">&quot;liderança&quot;</span>, <span className="syntax-string">&quot;atendimento&quot;</span>]</p>
      <p><span className="syntax-bracket">{"}"}</span></p>
    </div>
    <div className="prose-note"><h2>Minha trajetória</h2><p>Minha experiência fora da tecnologia fortaleceu competências que levo para cada projeto: comunicação, responsabilidade, trabalho em equipe e cuidado com a experiência de quem está do outro lado da tela. Aprendo rápido, gosto de entender problemas e transformar necessidades em soluções úteis.</p></div>
  </EditorDocument>;
}

const projectList = [
  { name: "Borbô", label: "PROJETO PRINCIPAL", image: "/projeto-borbo.png", description: "E-commerce de moda íntima feminina com uma experiência completa de compra e gerenciamento.", problem: "Organiza catálogo, autenticação, imagens e administração em uma única plataforma responsiva.", features: ["Autenticação", "Catálogo de produtos", "Painel de gerenciamento", "Banco de dados", "Componentes reutilizáveis"], stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Zustand", "React Hook Form", "Zod"], status: "Online", href: "https://borbo.vercel.app/" },
  { name: "Saldo em Ordem", label: "PROJETO FINALIZADO", image: "/projeto-saldo-em-ordem.png", description: "Aplicação para organizar finanças compartilhadas de forma simples e transparente.", problem: "Centraliza entradas, saídas e organização mensal para participantes com acesso compartilhado.", features: ["Controle de entradas e saídas", "Visão financeira mensal", "Acesso compartilhado", "Autenticação"], stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"], status: "Finalizado", href: "https://sistema-financeiro-roan.vercel.app/" },
];

function ProjectsContent() {
  return <EditorDocument eyebrow="projetos.ts" title="Projetos em destaque" extension="ts">
    <p className="section-lead">Soluções construídas com foco em problemas reais, experiência do usuário e código reutilizável.</p>
    <div className="project-list">{projectList.map((project, index) => <article className="project-card" key={project.name}>
      <div className="project-visual"><Image src={project.image} alt={`Página inicial do projeto ${project.name}`} fill sizes="(max-width: 800px) 100vw, 230px" /><div className="project-image-overlay" /><div className="scan-line" /><div className="window-preview"><span /><span /><span /></div><small>0{index + 1}</small></div>
      <div className="project-copy"><div className="project-heading"><div><span className="project-status">{project.label}</span><h2>{project.name}</h2></div><span className="status-pill"><i />{project.status}</span></div>
        <p>{project.description}</p><div className="project-problem"><strong>Problema resolvido</strong><span>{project.problem}</span></div>
        <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">{project.href ? <a href={project.href} target="_blank" rel="noreferrer">Ver projeto <ChevronRight /></a> : <span>Link disponível após a conclusão</span>}</div>
      </div>
    </article>)}</div>
  </EditorDocument>;
}

const skillGroups = [
  { selector: ".frontend", description: "Base para construir experiências web modernas.", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"] },
  { selector: ".interface", description: "Interfaces consistentes em diferentes telas.", skills: ["Tailwind CSS", "shadcn/ui", "Design responsivo", "Componentes reutilizáveis"] },
  { selector: ".dados-e-ferramentas", description: "Integração, estado, validação e fluxo de desenvolvimento.", skills: ["Supabase", "PostgreSQL", "APIs REST", "Git", "GitHub", "Zustand", "React Hook Form", "Zod"] },
];

function SkillsContent() {
  return <EditorDocument eyebrow="habilidades.css" title="Tecnologias & conhecimentos" extension="css">
    <p className="section-lead">Sem porcentagens abstratas: minhas habilidades aparecem aplicadas nos projetos.</p>
    <div className="skills-grid">{skillGroups.map((group) => <section className="skill-card" key={group.selector}><h2>{group.selector} <span>{"{"}</span></h2><p>{group.description}</p><div>{group.skills.map((skill) => <span key={skill}>{skill}<i>;</i></span>)}</div><b>{"}"}</b></section>)}</div>
  </EditorDocument>;
}

const experiences = [
  { role: "Desenho técnico e programação de peças", company: "AÇO-X Soluções em Cortes", period: "06/2026 — Atual", description: "Desenvolvimento e programação de peças para corte em chapas metálicas com ProNest, interpretação de especificações e organização para melhor aproveitamento de material.", skills: ["Precisão", "Padronização", "Atenção aos detalhes"] },
  { role: "Supervisor Comercial", company: "Casa do Construtor", period: "03/2025 — 05/2026", description: "Gestão de equipe, acompanhamento de metas, organização da operação, atendimento ao cliente e tomada de decisões.", skills: ["Liderança", "Organização", "Resolução de problemas"] },
  { role: "Atendente Comercial", company: "Casa do Construtor", period: "04/2024 — 03/2025", description: "Atendimento ao cliente, apoio em vendas e locações, organização de processos internos e suporte à rotina comercial.", skills: ["Atendimento", "Processos", "Comunicação"] },
  { role: "Bartender", company: "Central do Malte", period: "2023 — 2024", description: "Atendimento ao público, trabalho em equipe e agilidade operacional.", skills: ["Agilidade", "Trabalho em equipe", "Atendimento"] },
  { role: "Barista / Atendente", company: "Cheirin Bão Contagem", period: "2022 — 2023", description: "Atendimento ao cliente, preparação de produtos e organização do ambiente.", skills: ["Organização", "Atendimento", "Responsabilidade"] },
  { role: "Apoio Administrativo", company: "Campanhas Eleitorais", period: "2020 · 2022 · 2024", description: "Controle de informações e documentos, organização de prazos e atenção aos detalhes.", skills: ["Prazos", "Documentação", "Atenção aos detalhes"] },
];

function ExperienceContent() {
  return <EditorDocument eyebrow="experiencias.md" title="Experiências profissionais" extension="md">
    <p className="section-lead">Uma trajetória diversa que desenvolveu habilidades humanas essenciais para criar bons produtos digitais.</p>
    <div className="timeline">{experiences.map((experience, index) => <article key={`${experience.company}-${experience.role}`}><span className="timeline-marker">{String(index + 1).padStart(2, "0")}</span><div><span className="experience-period">{experience.period}</span><h2>{experience.role}</h2><h3>{experience.company}</h3><p>{experience.description}</p><div className="transfer-list">{experience.skills.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}</div>
  </EditorDocument>;
}

function ContactContent() {
  return <EditorDocument eyebrow="contato.md" title="Vamos conversar?" extension="md">
    <div className="contact-layout"><section><p className="contact-intro">Estou disponível para oportunidades como Desenvolvedor Front-End Júnior, colaborações e novos projetos.</p><div className="contact-cards">
      <a href="mailto:bernardomaia57@gmail.com"><span><Mail /></span><div><small>E-MAIL</small><strong>bernardomaia57@gmail.com</strong></div><ChevronRight /></a>
      <a href="https://github.com/SempreGM" target="_blank" rel="noreferrer"><span><Github /></span><div><small>GITHUB</small><strong>github.com/SempreGM</strong></div><ChevronRight /></a>
      <a href="https://linkedin.com/in/bernardomaia57" target="_blank" rel="noreferrer"><span><Linkedin /></span><div><small>LINKEDIN</small><strong>linkedin.com/in/bernardomaia57</strong></div><ChevronRight /></a>
    </div></section><aside className="contact-callout"><span className="availability"><i /> Disponível para oportunidades</span><h2>Tem uma oportunidade ou ideia?</h2><p>Envie uma mensagem por e-mail. O seu aplicativo de e-mail será aberto automaticamente.</p><a href="mailto:bernardomaia57@gmail.com"><Mail /> Escrever e-mail</a><a className="resume-link" href="/Curriculo-Bernardo-Maia.pdf" download>Baixar currículo</a></aside></div>
  </EditorDocument>;
}
