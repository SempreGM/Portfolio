# Portfólio de Bernardo Maia

## Regras e especificações do projeto

### 1. Objetivo

Criar um portfólio interativo inspirado no Visual Studio Code para apresentar o perfil profissional, trajetória, habilidades, experiências, projetos, currículo e formas de contato de Bernardo Maia.

O visual deve demonstrar criatividade e conhecimento técnico sem dificultar a navegação. Mesmo quem não conhece o VS Code deve conseguir acessar todo o conteúdo facilmente.

### 2. Público principal

- Recrutadores de tecnologia;
- empresas procurando Desenvolvedor Front-End Júnior;
- desenvolvedores e possíveis clientes;
- visitantes acessando pelo computador ou celular.

### 3. Identidade visual

- Interface inspirada no VS Code, sem ser uma cópia exata;
- tema escuro como padrão;
- verde como cor principal de destaque;
- aparência moderna, profissional e tecnológica;
- tema claro opcional;
- tipografia legível;
- animações discretas e rápidas;
- nenhuma animação poderá atrapalhar a leitura ou a navegação.

### 4. Estrutura da interface

O portfólio deverá possuir:

- barra superior;
- barra lateral de atividades;
- Explorer com arquivos;
- sistema de abas;
- área principal de conteúdo;
- terminal interativo;
- barra inferior de status.

### 5. Arquivos do Explorer

Cada seção será representada por um arquivo:

| Arquivo | Conteúdo |
| --- | --- |
| `inicio.tsx` | Apresentação principal |
| `sobre-mim.json` | Perfil, objetivo e trajetória |
| `projetos.ts` | Projetos desenvolvidos |
| `habilidades.css` | Tecnologias e conhecimentos |
| `experiencias.md` | Experiências profissionais |
| `curriculo.pdf` | Visualização e download do currículo |
| `contato.md` | E-mail, LinkedIn e GitHub |

Os arquivos deverão usar cores e ícones relacionados às respectivas extensões.

### 6. Página inicial

A primeira tela deverá mostrar imediatamente:

- “Olá, eu sou Bernardo Maia”;
- cargo: Desenvolvedor Front-End Júnior;
- descrição profissional curta;
- indicador “Disponível para oportunidades”;
- botão “Explorar projetos”;
- botão “Entrar em contato”;
- acessos rápidos para “Sobre mim” e “Projetos”.

O visitante não deverá precisar entender o funcionamento do VS Code para encontrar as informações principais.

### 7. Sistema de abas

Ao clicar em um arquivo:

- o conteúdo será aberto em uma aba;
- a aba ativa ficará destacada;
- será possível alternar entre as abas;
- as abas poderão ser fechadas;
- a última aba aberta não poderá ser fechada;
- um arquivo já aberto não poderá criar uma aba duplicada;
- a ordem das abas deverá acompanhar a ordem de abertura;
- a navegação deverá funcionar com mouse, teclado e toque.

### 8. Seção “Sobre mim”

Deverá apresentar:

- nome: Bernardo Maia;
- localização: Contagem, Minas Gerais;
- objetivo de atuar como Desenvolvedor Front-End Júnior;
- transição profissional para tecnologia;
- experiência prática com desenvolvimento web;
- facilidade para aprender;
- proatividade;
- persistência;
- organização;
- atenção aos detalhes;
- resolução de problemas;
- experiência anterior com liderança e atendimento.

O texto deverá ser natural e profissional, sem exagerar o nível de experiência.

### 9. Projetos

Cada projeto deverá apresentar:

- nome;
- descrição;
- problema resolvido;
- principais funcionalidades;
- tecnologias utilizadas;
- status;
- imagem ou demonstração;
- link para o projeto;
- link para o GitHub, quando disponível.

Projetos incompletos nunca deverão ser apresentados como finalizados.

#### 9.1. Borbô

Projeto principal do portfólio:

- e-commerce de moda íntima feminina;
- autenticação;
- catálogo de produtos;
- banco de dados;
- armazenamento de imagens;
- painel de gerenciamento;
- componentes reutilizáveis;
- layout responsivo;
- deploy na Vercel;
- tecnologias: Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Zustand, React Hook Form e Zod.

Link: [borbo.vercel.app](https://borbo.vercel.app/)

#### 9.2. Saldo em Ordem

- aplicação de finanças compartilhadas;
- controle de entradas e saídas;
- organização financeira mensal;
- participantes com acesso compartilhado;
- autenticação;
- tecnologias: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui e Supabase;
- status: “Em desenvolvimento” enquanto não estiver concluído.

### 10. Habilidades

As habilidades deverão ser organizadas por categorias.

#### Front-end

- HTML5;
- CSS3;
- JavaScript;
- TypeScript;
- React;
- Next.js.

#### Interface

- Tailwind CSS;
- shadcn/ui;
- design responsivo;
- componentes reutilizáveis.

#### Dados e ferramentas

- Supabase;
- PostgreSQL;
- APIs REST;
- Git;
- GitHub;
- Zustand;
- React Hook Form;
- Zod.

Não deverão ser utilizadas barras ou porcentagens inventadas, como “React 90%”. O conhecimento será demonstrado pelos projetos.

### 11. Experiências profissionais

A seção poderá utilizar uma linha do tempo e apresentar:

- AÇO-X Soluções em Cortes;
- Casa do Construtor;
- Central do Malte;
- Cheirin Bão;
- campanhas eleitorais;
- outras experiências relevantes presentes no currículo.

As experiências fora de tecnologia deverão destacar competências transferíveis:

- organização;
- liderança;
- atendimento e relacionamento com clientes;
- atenção aos detalhes;
- trabalho em equipe;
- responsabilidade;
- solução de problemas.

### 12. Terminal interativo

O terminal será uma funcionalidade complementar e não poderá ser a única forma de navegação.

Comandos iniciais:

```text
help
about
projects
skills
experience
contact
clear
```

Comportamentos:

- `help`: mostra os comandos disponíveis;
- `about`: abre `sobre-mim.json`;
- `projects`: abre `projetos.ts`;
- `skills`: abre `habilidades.css`;
- `experience`: abre `experiencias.md`;
- `contact`: abre `contato.md`;
- `clear`: limpa o terminal.

O terminal poderá ser aberto pelo botão inferior ou pelo atalho `Ctrl + \``.

### 13. Contato

A seção deverá apresentar:

- e-mail: [bernardomaia57@gmail.com](mailto:bernardomaia57@gmail.com);
- GitHub: [github.com/SempreGM](https://github.com/SempreGM);
- LinkedIn: [linkedin.com/in/bernardomaia57](https://linkedin.com/in/bernardomaia57);
- botão para visualizar ou baixar o currículo.

No MVP não haverá formulário de contato. O link de e-mail deverá abrir o aplicativo de e-mail do visitante.

### 14. Temas

- tema escuro como padrão;
- tema claro opcional;
- botão para alternar os temas;
- preferência salva no navegador;
- respeito à configuração `prefers-reduced-motion`.

### 15. Responsividade

#### Computador

- Explorer visível;
- abas completas;
- área semelhante ao editor;
- terminal na parte inferior.

#### Celular

- menu lateral recolhido;
- navegação adaptada para barra inferior ou menu;
- abas com rolagem horizontal;
- textos e botões legíveis;
- projetos apresentados verticalmente;
- terminal adaptado ou simplificado.

O portfólio não poderá depender de ações de passar o mouse para funcionar.

### 16. Acessibilidade

O projeto deverá possuir:

- navegação por teclado;
- contraste adequado;
- foco visível;
- textos alternativos nas imagens;
- botões com nomes compreensíveis;
- HTML semântico;
- suporte a leitores de tela;
- respeito à preferência de movimento reduzido.

### 17. Performance

- evitar animações pesadas;
- otimizar imagens;
- carregar somente os recursos necessários;
- evitar bibliotecas sem necessidade;
- priorizar Server Components;
- usar Client Components somente nas partes interativas;
- não utilizar vídeos pesados como fundo;
- buscar uma boa pontuação no Lighthouse.

### 18. Tecnologias

Stack definida:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- shadcn/ui somente quando necessário;
- Lucide React para ícones;
- Framer Motion somente para animações que melhorem a experiência;
- Vercel para publicação.

O MVP não precisará de banco de dados nem Supabase.

### 19. SEO e compartilhamento

O projeto deverá incluir:

- título personalizado;
- descrição profissional;
- favicon;
- imagem de compartilhamento;
- metadados para LinkedIn e WhatsApp;
- idioma `pt-BR`;
- estrutura adequada para mecanismos de busca.

### 20. Escopo do MVP

A primeira versão deverá conter:

1. Interface inspirada no VS Code;
2. Explorer;
3. sistema de abas;
4. página inicial;
5. seção “Sobre mim”;
6. projetos;
7. habilidades;
8. experiências;
9. contato;
10. currículo para download;
11. temas claro e escuro;
12. terminal básico;
13. versão responsiva;
14. acessibilidade básica;
15. SEO configurado.

### 21. Funcionalidades futuras

Depois da conclusão do MVP, poderão ser adicionados:

- versão em inglês;
- histórico visual semelhante ao Git;
- comandos adicionais no terminal;
- busca de arquivos;
- easter eggs;
- animação de digitação;
- novos projetos;
- estatísticas reais do GitHub;
- painel para atualizar projetos sem alterar o código.

Essas funcionalidades não deverão atrasar a conclusão da primeira versão.

### 22. Regra principal de desenvolvimento

O portfólio deve parecer criativo para desenvolvedores e, ao mesmo tempo, permanecer simples para recrutadores. Toda decisão visual ou técnica deverá preservar:

1. clareza;
2. facilidade de navegação;
3. desempenho;
4. responsividade;
5. acessibilidade;
6. fidelidade às experiências reais de Bernardo Maia.
