const fs = require('node:fs');
const path = require('node:path');

const pages = [
    'gamedesign/index.html',
    'gestao/index.html',
    'desenvolvedor/index.html',
    'gamedesign/missaomesquita.html',
    'gamedesign/metainrio.html',
    'gamedesign/rainbowrevenge.html',
    'desenvolvedor/whiteroom.html',
    'desenvolvedor/annie.html',
    'gestao/greencoding.html',
    'jogaveis.html',
    'galeria.html',
    'extra.html',
    'biografia.html'
];

const locales = {
    en: {
        'Projetos': 'Projects', 'Desenvolvedor': 'Developer', 'Desenvolvimento': 'Development',
        'Gerenciamento': 'Project management', 'Biografia': 'About', 'Jogaveis': 'Playable games',
        'Jogáveis': 'Playable games', 'Galeria': 'Gallery', 'Extra': 'More', 'Home': 'Home',
        'Saiba Mais': 'View project', 'Ver Jogos': 'View projects', 'Game DevOps': 'Project management',
        'MetainRio': 'Meta in Rio', 'PRÉ': 'FEATURED', 'VIA': 'PROJECTS',
        'Ultimas': 'Featured', 'Noticias': 'projects', 'Latest': 'Project', 'Pictures': 'gallery',
        'Principais': 'Main', 'Ferramentas': 'tools', 'Top': 'Top', 'Search': 'Search',
        'Called Let': 'Project images', 'Rainbow Trailer': 'Rainbow Revenge trailer',
        'Smell magic in the air. Or maybe barbecue': "Annie's Sweet Nightmares",
        'Grab your sword and fight the Horde': 'GreenCoding Experience',
        'We found a witch! May we burn her?': 'Meta in Rio',
        'For good, too though, in consequence': 'WhiteRoom Market',
        'He made his passenger captain of one': 'Vaccine Race',
        'At first, for some time, I was not able to answer': 'Rainbow Revenge: Recruit',
        'With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone...': "A cooperative game where players protect Annie's home by coordinating traps against incoming bears.",
        'For good, too; though, in consequence of my previous emotions, I was still occasionally seized with a stormy sob . After we had jogged on for some little time, I asked the carrier...': 'A virtual reality experience for Meta Quest 2 where player decisions gradually transform an island environment.',
        "And she went on planning to herself how she would manage it. `They must go by the carrier,' she thought; `and how funny it'll seem, sending presents to one's own feet!...": 'A virtual space created with Disque Denúncia to host Dora’s podcast and bring participants together.',
        'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...': 'A mixed-reality retail experience connecting brands, a virtual space, and a physical environment.',
        'Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...': 'An interactive game built around player goals, gameplay systems, and in-game interactions.',
        'Rainbow Revenge: Recruit é uma aventura de ação em 3D que acompanha o esquadrão espacial Rainbow Revenge em sua missão de defender a Terra contra o Koala Squad, uma perigosa gangue espacial.': 'Rainbow Revenge: Recruit is a 3D action adventure following a space squad on its mission to defend Earth from the Koala Squad.',
        'GreenCoding Experience é uma experiência de realidade virtual desenvolvida para o Meta Quest 2, na qual as decisões do jogador transformam progressivamente o ambiente de uma ilha.': 'GreenCoding Experience is a virtual reality project for Meta Quest 2 where player decisions gradually transform an island environment.',
        'Meta in Rio é um cenário desenvolvido para o Altspace em parceria com o Disque Denúncia, concebido como um espaço virtual para o podcast da Dora, uma influenciadora digital associada à organização.': 'Meta in Rio is a virtual environment developed for Altspace with Disque Denúncia to host a podcast by Dora, a digital creator associated with the organization.',
        "Annie's Sweet Nightmares é um casual game inspirado em jogos cooperativos de gerenciamento, no qual o jogador precisa proteger a casa de Annie utilizando diferentes armadilhas contra ursos.": "Annie's Sweet Nightmares is a cooperative casual game where players protect Annie's home by using different traps against bears.",
        'WhiteRoom Market é uma experiência de vendas no metaverso desenvolvida em parceria com diferentes marcas, utilizando realidade mista para conectar um espaço virtual a um ambiente físico.': 'WhiteRoom Market is a metaverse retail experience developed with multiple brands, using mixed reality to connect a virtual space with a physical environment.',
        'Ver projeto': 'View project', 'Projeto de Game Design': 'Game Design project',
        'Projeto de Desenvolvimento': 'Development project', 'Projeto de Gerenciamento': 'Project management project',
        'Corrida pela cidade': 'City run', 'Desafio no percurso': 'Course challenge',
        'Ilha virtual de GreenCoding Experience': 'Virtual island in GreenCoding Experience',
        'Espaço virtual de Meta in Rio': 'Virtual space in Meta in Rio',
        'Personagem de Annie’s Sweet Nightmares': "Character from Annie's Sweet Nightmares",
        'WhiteRoom Market: experiência de realidade mista': 'WhiteRoom Market mixed-reality experience',
        'Ação e aventura': 'Action adventure', 'Realidade virtual': 'Virtual reality',
        'Realidade mista': 'Mixed reality', 'Experiência virtual': 'Virtual experience',
        'Cooperativo': 'Co-op', 'Casual': 'Casual', 'Estratégia': 'Strategy',
        'Game design': 'Game Design', 'PROJETOS': 'FEATURED', 'EM DESTAQUE': 'PROJECTS',
        'Ultimas Noticias': 'Featured projects', 'Ferramentas de desenvolvimento': 'Development tools',
        'A galeria apresenta imagens de projetos de jogos e experiências digitais.': 'A gallery of game projects and digital experiences.',
        'Conheça alguns dos projetos que desenvolvi em diferentes áreas de jogos e experiências digitais.': 'Explore selected projects across games and digital experiences.',
        'Portfólio de Richard Mendonça: desenvolvimento de jogos, game design e gerenciamento de projetos interativos.': 'Richard Mendonça’s portfolio: game development, game design, and interactive project management.',
        'desenvolvimento de jogos, game design, gerenciamento de projetos': 'game development, game design, project management',
        'Jogo cooperativo': 'Co-op game', 'Jogo educativo': 'Educational game',
        'Ação e aventura': 'Action adventure', 'Gestão de projetos': 'Project management',
        'Ver projetos': 'View projects', 'Buscar': 'Search',
        'Imagem do ambiente virtual criado para receber o podcast da Dora.': 'A view of the virtual environment created for Dora’s podcast.',
        'WhiteRoom Market: produtos e marcas em um ambiente de realidade mista.': 'WhiteRoom Market products and brands in a mixed-reality environment.',
        'WhiteRoom Market em realidade mista': 'WhiteRoom Market in mixed reality',
        'Personagem de Rainbow Revenge: Recruit': 'Character from Rainbow Revenge: Recruit',
        'Cena de Annie’s Sweet Nightmares': "Annie's Sweet Nightmares scene",
        'Ilha de GreenCoding Experience': 'GreenCoding Experience island',
        'Conheça Richard Mendonça, profissional de desenvolvimento de jogos, game design e gerenciamento de projetos interativos.': 'Meet Richard Mendonça, a professional in game development, game design, and interactive project management.',
        'Experimente jogos e projetos WebGL de Richard Mendonça diretamente no portfólio.': 'Play Richard Mendonça’s games and WebGL projects directly in the portfolio.',
        'Galeria de imagens de jogos e experiências digitais de Richard Mendonça.': 'A gallery of images from Richard Mendonça’s games and digital experiences.',
        'Ferramentas, tecnologias e outras informações sobre o trabalho de Richard Mendonça.': 'Tools, technologies, and more about Richard Mendonça’s work.',
        'Biografia · Richard Mendonça': 'About · Richard Mendonça',
        'Ideias que ganham vida': 'Ideas come to life',
        'quando a gente joga.': 'when we play.',
        'Sou Richard Mendonça, profissional de desenvolvimento de jogos, Game Design e gerenciamento de projetos. Gosto de transformar boas ideias em experiências interativas, unindo criatividade, tecnologia e colaboração.': 'I’m Richard Mendonça, working across game development, game design, and project management. I enjoy turning good ideas into interactive experiences through creativity, technology, and collaboration.',
        'Ao longo do meu trabalho, participei de jogos e experiências digitais para diferentes plataformas — de mundos virtuais a projetos WebGL. Cada projeto é uma oportunidade de aprender, experimentar e construir algo que as pessoas possam explorar.': 'I have worked on games and digital experiences for different platforms, from virtual worlds to WebGL projects. Each project is an opportunity to learn, experiment, and build something people can explore.',
        'Imagens de projetos autorais e colaborativos. Este espaço também pode receber fotos pessoais e dos bastidores.': 'Images from personal and collaborative projects. This space can also feature personal and behind-the-scenes photos.',
        'Game Design e desenvolvimento': 'Game design and development',
        'Experiências virtuais': 'Virtual experiences', 'Projetos imersivos': 'Immersive projects',
        'Como trabalho': 'How I work',
        'Do primeiro esboço à experiência pronta para jogar.': 'From the first sketch to a playable experience.',
        '01 · CRIAR': '01 · CREATE', '02 · CONSTRUIR': '02 · BUILD', '03 · COLABORAR': '03 · COLLABORATE',
        'Imaginar com propósito': 'Imagine with purpose',
        'Exploro conceitos, mecânicas e formas de interação para dar identidade e direção a cada experiência.': 'I explore concepts, mechanics, and interactions to give each experience a clear identity and direction.',
        'Prototipar e desenvolver': 'Prototype and develop',
        'Transformo ideias em protótipos e sistemas jogáveis, aproximando design e implementação.': 'I turn ideas into prototypes and playable systems, bringing design and implementation together.',
        'Fazer acontecer em equipe': 'Make it happen together',
        'Organizo prioridades e conecto pessoas para que projetos criativos avancem com clareza.': 'I organize priorities and connect people so creative projects can move forward with clarity.',
        'Um portfólio em construção': 'A portfolio in progress',
        'Cada projeto conta um pedaço da história.': 'Every project tells part of the story.',
        'Explore os trabalhos de desenvolvimento, Game Design e gerenciamento para conhecer diferentes desafios, ideias e mundos que ajudei a criar.': 'Explore development, game design, and project management work to discover different challenges, ideas, and worlds I helped create.',
        'Continue explorando': 'Keep exploring',
        'Experimente os projetos jogáveis': 'Try the playable projects',
        'veja imagens dos projetos': 'browse project images',
        'Jogáveis · WebGL': 'Playable · WebGL',
        'Escolha um projeto.': 'Choose a project.',
        'Entre no jogo.': 'Jump into the game.',
        'Selecione uma das demos WebGL para carregá-la no player. O jogo só começa a carregar depois que você escolher um projeto.': 'Select a WebGL demo to load it in the player. The game only starts loading after you choose a project.',
        'Projetos jogáveis': 'Playable projects', 'Escolha uma demo': 'Choose a demo',
        'Corrida · exploração · WebGL': 'Runner · exploration · WebGL',
        'Ação e aventura · WebGL': 'Action adventure · WebGL',
        'Mais demos em breve': 'More demos coming soon',
        'Este espaço foi preparado para adicionar outros projetos WebGL ao player.': 'This space is ready for more WebGL projects to be added to the player.',
        'Seu próximo jogo começa aqui': 'Your next game starts here',
        'Escolha uma demo na lista para abrir o player nesta área.': 'Choose a demo from the list to open the player here.',
        'Escolha um projeto para iniciar a demo.': 'Choose a project to start the demo.',
        'Carregando a demo. O tempo pode variar conforme sua conexão.': 'Loading the demo. Load time may vary with your connection.',
        'Demo iniciada. Clique ou toque na área do jogo para interagir.': 'Demo started. Click or tap the game area to interact.',
        'Fechar demo': 'Close demo',
        'As demos WebGL precisam ser abertas por um servidor HTTP/HTTPS e podem levar alguns instantes para carregar.': 'WebGL demos must be served over HTTP/HTTPS and may take a moment to load.',
        'Galeria · imagens dos projetos': 'Gallery · project images',
        'Mundos, personagens': 'Worlds, characters',
        'e momentos.': 'and moments.',
        'Uma seleção visual dos jogos e experiências digitais que fazem parte do portfólio. Escolha uma imagem para destacá-la no carrossel.': 'A visual selection of games and digital experiences from the portfolio. Choose an image to feature it in the carousel.',
        'Explore a seleção': 'Explore the collection',
        'Imagem anterior': 'Previous image', 'Próxima imagem': 'Next image',
        'Escolha uma imagem': 'Choose an image',
        'Mais imagens': 'More images',
        'Veja de perto cada projeto.': 'Take a closer look at each project.',
        'Missão Mesquita · corrida pela cidade': 'Missão Mesquita · city run',
        'Missão Mesquita · cenário urbano': 'Missão Mesquita · urban setting',
        'Meta in Rio · cenário virtual': 'Meta in Rio · virtual setting',
        'Meta in Rio · espaço de encontro': 'Meta in Rio · gathering space',
        'GreenCoding · experiência imersiva': 'GreenCoding · immersive experience',
        'GreenCoding · ilha virtual': 'GreenCoding · virtual island',
        'WhiteRoom Market · ambiente de vendas': 'WhiteRoom Market · retail environment',
        'WhiteRoom Market · experiência virtual': 'WhiteRoom Market · virtual experience',
        'Rainbow Revenge · cena de ação': 'Rainbow Revenge · action scene',
        'Rainbow Revenge · personagens': 'Rainbow Revenge · characters',
        'Annie’s Sweet Nightmares · gameplay': "Annie's Sweet Nightmares · gameplay",
        'Annie’s Sweet Nightmares · ambiente': "Annie's Sweet Nightmares · environment",
        'Vaccine Race · gameplay': 'Vaccine Race · gameplay',
        'Vaccine Race · percurso': 'Vaccine Race · course',
        'Missão Mesquita · itens e percurso': 'Missão Mesquita · collectibles and course',
        'Meta in Rio · detalhes do espaço': 'Meta in Rio · environment details',
        'GreenCoding · exploração da ilha': 'GreenCoding · island exploration',
        'WhiteRoom Market · realidade mista': 'WhiteRoom Market · mixed reality',
        'Personagem de Missão Mesquita correndo por uma rua da cidade': 'Missão Mesquita character running through a city street',
        'Cena de Missão Mesquita em uma área urbana': 'Missão Mesquita scene in an urban area',
        'Cenário virtual de Meta in Rio': 'Meta in Rio virtual environment',
        'Espaço de encontro virtual em Meta in Rio': 'Virtual gathering space in Meta in Rio',
        'Cena de GreenCoding Experience em realidade virtual': 'GreenCoding Experience virtual reality scene',
        'Paisagem da ilha de GreenCoding Experience': 'GreenCoding Experience island landscape',
        'Interior de WhiteRoom Market': 'WhiteRoom Market interior',
        'Experiência virtual WhiteRoom Market': 'WhiteRoom Market virtual experience',
        'Cena de ação de Rainbow Revenge: Recruit': 'Rainbow Revenge: Recruit action scene',
        'Personagem em Rainbow Revenge: Recruit': 'Rainbow Revenge: Recruit character',
        'Cena de Annie’s Sweet Nightmares': "Annie's Sweet Nightmares scene",
        'Ambiente de Annie’s Sweet Nightmares': "Annie's Sweet Nightmares environment",
        'Cena de Vaccine Race': 'Vaccine Race scene',
        'Outra cena de Vaccine Race': 'Another Vaccine Race scene',
        'Espaço de realidade mista do WhiteRoom Market': 'WhiteRoom Market mixed reality space',
        'Missão Mesquita: personagem correndo': 'Missão Mesquita: running character',
        'Missão Mesquita: cenário urbano': 'Missão Mesquita: urban setting',
        'Espaço virtual de Meta in Rio': 'Meta in Rio virtual space',
        'GreenCoding Experience em realidade virtual': 'GreenCoding Experience in virtual reality',
        'Ilha virtual de GreenCoding Experience': 'GreenCoding Experience virtual island',
        'Ambiente de WhiteRoom Market': 'WhiteRoom Market environment',
        'Experiência WhiteRoom Market': 'WhiteRoom Market experience',
        'Rainbow Revenge: Recruit em ação': 'Rainbow Revenge: Recruit in action',
        'Personagem de Rainbow Revenge': 'Rainbow Revenge character',
        'Gameplay de Annie’s Sweet Nightmares': "Annie's Sweet Nightmares gameplay",
        'Ambiente de Annie’s Sweet Nightmares': "Annie's Sweet Nightmares environment",
        'Gameplay de Vaccine Race': 'Vaccine Race gameplay',
        'Percurso de Vaccine Race': 'Vaccine Race course',
        'Extra · ferramentas e referências': 'Extra · tools and references',
        'O que uso para': 'What I use to',
        'dar forma às ideias.': 'bring ideas to life.',
        'Uma seleção de ferramentas e tecnologias presentes no meu processo de desenvolvimento, prototipagem e criação de experiências interativas.': 'A selection of tools and technologies used in my development, prototyping, and interactive experience workflows.',
        'Ferramentas e tecnologias': 'Tools and technologies',
        'Game engine': 'Game engine', 'Desenvolvimento': 'Development', 'Realidade virtual': 'Virtual reality',
        'Web': 'Web', 'Prototipagem': 'Prototyping', '3D para web': '3D for the web',
        'experimente as demos WebGL': 'try the WebGL demos',
        'Desenvolvimento de jogos, protótipos e experiências interativas.': 'Game development, prototypes, and interactive experiences.',
        'Lógica de gameplay, sistemas e ferramentas para projetos digitais.': 'Gameplay logic, systems, and tools for digital projects.',
        'Interações e experiências para navegadores e plataformas web.': 'Interactions and experiences for browsers and web platforms.',
        'Criação e exploração de ambientes e experiências em tempo real.': 'Creating and exploring real-time environments and experiences.',
        'Um ambiente flexível para construir, testar e iterar projetos.': 'A flexible environment for building, testing, and iterating on projects.',
        'Possibilidades de visualização e experiências tridimensionais no navegador.': 'Visualization and 3D experience possibilities in the browser.',
        'Explore mais': 'Explore more',
        'Ferramentas são parte da jornada — os projetos mostram o resultado.': 'Tools are part of the journey — the projects show the results.',
        'Veja os projetos de desenvolvimento': 'Explore development projects',
        'ou': 'or', 'Player de jogos WebGL': 'WebGL game player', 'Abrir menu': 'Open menu',
        'Carrossel de imagens': 'Image carousel',
        'Projetos em destaque': 'Featured projects', 'Galeria de imagens': 'Project gallery',
        'Annie’s Sweet Nightmares é um jogo cooperativo em que os jogadores protegem a casa de Annie usando armadilhas para impedir a chegada dos ursos.': "Annie's Sweet Nightmares is a cooperative game where players protect Annie's home using traps to stop incoming bears.",
        'GreenCoding Experience é uma experiência de realidade virtual para Meta Quest 2 em que as escolhas do jogador transformam gradualmente uma ilha.': 'GreenCoding Experience is a Meta Quest 2 virtual reality project where player choices gradually transform an island.',
        'Meta in Rio é um espaço virtual criado com o Disque Denúncia para receber o podcast da Dora e reunir seus participantes.': 'Meta in Rio is a virtual space created with Disque Denúncia to host Dora’s podcast and bring its participants together.',
        'WhiteRoom Market é uma experiência de vendas em realidade mista que conecta marcas, um espaço virtual e um ambiente físico.': 'WhiteRoom Market is a mixed-reality retail experience connecting brands, a virtual space, and a physical environment.',
        'Vaccine Race é um jogo interativo que transforma a corrida pela vacinação em uma experiência de gameplay.': 'Vaccine Race is an interactive game that turns the race for vaccination into a gameplay experience.',
        'Rainbow Revenge: Recruit é uma aventura de ação em 3D sobre um esquadrão espacial que defende a Terra do Koala Squad.': 'Rainbow Revenge: Recruit is a 3D action adventure about a space squad defending Earth from the Koala Squad.',
        'O portfólio reúne jogos e experiências digitais de diferentes gêneros, com foco na criatividade e na interação.': 'The portfolio brings together games and digital experiences across genres, with a focus on creativity and interaction.',
        'de Game Design': 'in Game Design', 'de Desenvolvimento': 'in Development',
        'de Gerenciamento': 'in Project Management', 'SOBRE MEU GAME DESIGN': 'ABOUT MY GAME DESIGN WORK',
        'SOBRE MEU GERENCIAMENTO': 'ABOUT MY PROJECT MANAGEMENT WORK', 'SOBRE MEU DESENVOLVIMENTO': 'ABOUT MY DEVELOPMENT WORK',
        'Projetar experiências que fazem sentido quando jogadas': 'Designing experiences that make sense when played',
        'Meu trabalho em Game Design parte da relação entre intenção e experiência: entender o que o jogador precisa sentir, aprender e fazer em cada momento.': 'My game design work connects intent with experience: understanding what players should feel, learn, and do at each moment.',
        'Atuo na criação de conceitos, definição de mecânicas, desenho de loops de gameplay, ritmo de fases, progressão, narrativa espacial e organização de interfaces. Também trabalho com prototipagem e testes para transformar ideias em decisões jogáveis.': 'I develop concepts, define mechanics, shape gameplay loops, level pacing, progression, spatial storytelling, and interfaces. I also prototype and test ideas to turn them into playable decisions.',
        'Os projetos abaixo mostram experiências diferentes, de jogos de ação e corrida a ambientes virtuais e propostas cooperativas. Em comum, todos exigem clareza de objetivo, leitura visual e atenção ao comportamento do jogador.': 'The projects below range from action and racing games to virtual environments and cooperative experiences. Each calls for clear goals, readable visuals, and careful attention to player behavior.',
        'Organizar pessoas, ideias e entregas': 'Bringing people, ideas, and delivery together',
        'Meu trabalho de gerenciamento está ligado à capacidade de transformar objetivos amplos em etapas claras, combinando organização, comunicação e acompanhamento.': 'My project management work turns broad goals into clear steps through organization, communication, and follow-through.',
        'Atuo conectando equipes criativas e técnicas, estruturando prioridades, acompanhando cronogramas e ajudando projetos a avançarem com mais clareza. A experiência em jogos e tecnologia também me permite entender as necessidades específicas de cada etapa de produção.': 'I connect creative and technical teams, set priorities, track schedules, and help projects move forward with clarity. My experience in games and technology also helps me understand the needs of each production stage.',
        'Os projetos abaixo representam iniciativas em que planejamento, colaboração e visão de produto foram tão importantes quanto a execução.': 'These projects show how planning, collaboration, and product thinking can matter as much as execution.',
        'Construir sistemas que viram experiências': 'Building systems that become experiences',
        'Meu trabalho como desenvolvedor conecta código, ferramentas e interação para transformar conceitos em produtos jogáveis e experiências digitais funcionais.': 'As a developer, I connect code, tools, and interaction to turn concepts into playable products and working digital experiences.',
        'Atuo com Unity, programação de gameplay, integração de sistemas, prototipagem, interfaces e preparação de builds. Gosto de trabalhar perto do design para que a implementação preserve a intenção da experiência.': 'I work with Unity, gameplay programming, system integration, prototyping, interfaces, and build preparation. I collaborate closely with design so implementation supports the intended experience.',
        'Esta seleção reúne projetos com diferentes desafios técnicos: jogos, experiências imersivas, aplicações interativas e soluções desenvolvidas para contextos reais.': 'This selection includes projects with different technical challenges: games, immersive experiences, interactive applications, and solutions built for real-world contexts.',
        'Projetos': 'Projects', 'Ver projeto': 'View project', 'Conhecer projeto': 'Explore project',
        'Destaques': 'Project', 'do projeto': 'highlights', 'Galeria': 'Project', 'de imagens': 'gallery',
        'Top 3': 'Project', 'Recent': 'highlights', 'Latest': 'Project', 'Screenshots': 'gallery',
        'Ficha': 'Project', 'técnica': 'details', 'Área': 'Field', 'Home': 'Home',
        'Voltar ao portfólio': 'Back to portfolio', 'Deixe um comentário': 'Leave a comment',
        'Enviar comentário': 'Post comment', 'Leave a Reply': 'Leave a comment', 'Post Comment': 'Post comment',
        '2 Notas sobre o projeto': '2 Project notes', '2 Comentários sobre o projeto': '2 Project notes',
        'MINHA CONTRIBUIÇÃO': 'MY CONTRIBUTION', 'ELEMENTOS DO PROJETO': 'PROJECT ELEMENTS',
        'Minha contribuição': 'My contribution', 'Do conceito ao build': 'From concept to build',
        'por': 'by', 'Projeto de Game Design': 'Game Design project', 'Projeto de Desenvolvedor': 'Development project',
        'Aventura': 'Adventure', 'Ação': 'Action', 'Endless Runner': 'Endless runner', 'Indie': 'Indie',
        'Experiência virtual': 'Virtual experience', 'Espaço para podcast': 'Podcast space', 'Conteúdo': 'Content',
        'Parceiro': 'Partner', 'Formato': 'Format', 'Gênero': 'Genre', 'Perspectiva': 'Perspective',
        'Equipe': 'Team', 'Objetivo': 'Goal', 'Experiência imersiva': 'Immersive experience',
        'Realidade virtual': 'Virtual reality', 'Impacto ambiental': 'Environmental impact',
        'Metaverso': 'Metaverse', 'Realidade mista': 'Mixed reality', 'Experiência de vendas': 'Retail experience',
        'Diferentes marcas': 'Multiple brands', 'Jogo casual': 'Casual game', 'Cooperativo': 'Co-op',
        'Referência': 'Inspired by', 'Proteger a casa': 'Protect the house', 'Ursos': 'Bears',
        'Game Design': 'Game Design', 'Altspace': 'Altspace', 'Disque Denúncia': 'Disque Denúncia',
        'Podcast da Dora': 'Dora’s podcast', 'Terceira pessoa': 'Third person', 'Corrida e cartas': 'Running and cards',
        'Gameplay': 'Gameplay', 'Obstáculos': 'Obstacles', 'Progressão': 'Progression',
        'Corrida pela cidade': 'City run', 'Desafios do percurso': 'Course challenges', 'Coleção de cartas': 'Card collection',
        'Meta · Meta in Rio': 'Meta · Meta in Rio', 'WhiteRoom · WhiteRoom Market': 'WhiteRoom · WhiteRoom Market',
        "Annie's · Annie's Sweet Nightmares": "Annie's · Annie's Sweet Nightmares",
        'GreenCoding · GreenCoding Experience': 'GreenCoding · GreenCoding Experience',
        'Meta in Rio é um cenário desenvolvido para o Altspace em parceria com o Disque Denúncia. O espaço foi concebido para receber o podcast da Dora, influenciadora digital associada à organização.': 'Meta in Rio is a virtual environment developed for Altspace in partnership with Disque Denúncia. It was designed to host a podcast by Dora, a digital creator associated with the organization.',
        'O ambiente virtual funciona como ponto de encontro e dá contexto visual ao conteúdo, criando um espaço pensado para receber o público e acompanhar a conversa.': 'The virtual environment provides a meeting place and visual context for the content, welcoming an audience into the conversation.',
        'A proposta combina presença, ambientação e comunicação em uma experiência social. Diferentes ângulos do cenário mostram a identidade visual construída para esse encontro.': 'The concept combines presence, environment, and communication in a social experience. Different views of the scene show the visual identity created for this gathering.',
        'O projeto explora como um espaço digital pode apoiar a apresentação de conteúdo e aproximar pessoas em torno de uma iniciativa de comunicação.': 'The project explores how a digital space can support content and bring people together around a communication initiative.',
        'Meta in Rio combina cenário virtual, presença social e conteúdo em um ambiente pensado para receber o podcast da Dora.': 'Meta in Rio brings together a virtual setting, social presence, and content in a space designed to host Dora’s podcast.',
        'O cenário dá identidade visual ao espaço e contexto ao encontro.': 'The setting gives the space a visual identity and gives the gathering context.',
        'O ambiente virtual foi concebido para receber participantes em torno do podcast.': 'The virtual environment was designed to bring participants together around the podcast.',
        'A experiência conecta o espaço digital à iniciativa do Disque Denúncia.': 'The experience connects the digital space with Disque Denúncia’s initiative.',
        'O cenário transforma o podcast em um encontro situado em um ambiente virtual próprio, em vez de uma transmissão sem contexto espacial.': 'The setting turns the podcast into a gathering in its own virtual environment rather than a broadcast without a sense of place.',
        'A parceria com o Disque Denúncia orienta o propósito do espaço e a forma como o conteúdo é apresentado.': 'The partnership with Disque Denúncia shapes the purpose of the space and how the content is presented.',
        'Rainbow Revenge: Recruit é uma aventura de ação em 3D sobre o esquadrão espacial Rainbow Revenge e sua missão de defender a Terra contra o Koala Squad.': 'Rainbow Revenge: Recruit is a 3D action adventure about the Rainbow Revenge space squad and its mission to defend Earth from the Koala Squad.',
        'A aventura apresenta um conflito entre dois grupos e estabelece um universo próprio por meio de personagens, cenários e identidade visual marcante.': 'The adventure sets two groups against each other and builds a distinct universe through its characters, settings, and bold visual identity.',
        'As imagens do projeto mostram diferentes partes desse universo e ajudam a apresentar o tom de ação e aventura da experiência.': 'The project images reveal different parts of this universe and convey the experience’s action-adventure tone.',
        'O projeto combina uma missão clara com uma apresentação visual colorida, criando uma base reconhecível para a jornada do esquadrão.': 'The project pairs a clear mission with colorful visuals, establishing a recognizable foundation for the squad’s journey.',
        'A aventura acompanha o esquadrão Rainbow Revenge em seu confronto com o Koala Squad.': 'The adventure follows the Rainbow Revenge squad as they face the Koala Squad.',
        'Personagens e cenários dão forma ao mundo de Rainbow Revenge.': 'Characters and settings bring the world of Rainbow Revenge to life.',
        'O Koala Squad estabelece a ameaça que move a missão.': 'The Koala Squad is the threat driving the mission.',
        'A ação em 3D coloca o esquadrão no centro da defesa da Terra.': 'The 3D action puts the squad at the heart of Earth’s defense.',
        'Rainbow Revenge: Recruit apresenta uma aventura de ação construída em torno de um esquadrão espacial e de uma ameaça à Terra.': 'Rainbow Revenge: Recruit is an action adventure built around a space squad and a threat to Earth.',
        'A identidade colorida do projeto aparece nos personagens, cenários e materiais visuais reunidos na galeria.': 'The project’s colorful identity comes through in the characters, settings, and artwork in the gallery.',
        'WhiteRoom Market é uma experiência de vendas no metaverso desenvolvida em parceria com diferentes marcas. A proposta utiliza realidade mista para conectar um espaço virtual a um ambiente físico.': 'WhiteRoom Market is a metaverse retail experience developed with multiple brands. It uses mixed reality to connect a virtual space with a physical environment.',
        'O projeto explora a apresentação de produtos e marcas em um contexto imersivo, articulando presença digital e espaço real em uma mesma experiência.': 'The project explores presenting products and brands in an immersive context, bringing digital presence and physical space into one experience.',
        'O ambiente reúne elementos de exposição e exploração para apresentar as marcas dentro de um espaço virtual compartilhado.': 'The environment combines display and exploration to present brands in a shared virtual space.',
        'As imagens mostram diferentes ângulos do WhiteRoom Market e dos elementos que compõem essa experiência.': 'The images show different views of WhiteRoom Market and the elements that make up the experience.',
        'WhiteRoom Market articula apresentação de marcas, exploração de produtos e um ambiente de realidade mista.': 'WhiteRoom Market combines brand presentation, product discovery, and a mixed-reality environment.',
        'A experiência foi desenvolvida em parceria com diferentes marcas.': 'The experience was developed in partnership with multiple brands.',
        'O ambiente virtual organiza a apresentação e a exploração dos produtos.': 'The virtual environment structures how products are presented and explored.',
        'A realidade mista aproxima o espaço digital do contexto físico.': 'Mixed reality brings the digital space closer to the physical setting.',
        'WhiteRoom Market propõe uma experiência de vendas em que o espaço virtual participa da apresentação das marcas.': 'WhiteRoom Market proposes a retail experience where the virtual space is part of how brands are presented.',
        'A realidade mista conecta a experiência imersiva a um ambiente físico, aproximando os dois contextos.': 'Mixed reality connects the immersive experience to a physical environment, bringing the two contexts together.',
        "Annie's Sweet Nightmares é um jogo casual cooperativo inspirado em jogos de gerenciamento. Os jogadores precisam proteger a casa de Annie utilizando diferentes armadilhas contra ursos.": "Annie's Sweet Nightmares is a cooperative casual game inspired by management games. Players protect Annie’s home using different traps against bears.",
        'A dinâmica gira em torno de observar as ameaças e escolher como responder a elas. A cooperação ajuda a organizar as ações necessárias para manter a casa protegida.': 'The gameplay centers on watching for threats and choosing how to respond. Cooperation helps players coordinate the actions needed to protect the house.',
        'As armadilhas e os elementos da casa dão variedade às decisões dos jogadores e ajudam a construir o ritmo da experiência.': 'Traps and objects around the house add variety to player decisions and shape the pace of the experience.',
        'A galeria reúne imagens de personagens, cenários e objetos que compõem o universo do jogo.': 'The gallery brings together characters, settings, and objects from the game’s world.',
        'Um jogo cooperativo de gerenciamento em que as armadilhas ajudam a responder às ameaças dos ursos.': 'A cooperative management game where traps help players respond to the bears’ threats.',
        'Os jogadores coordenam suas ações para proteger a casa.': 'Players coordinate their actions to protect the house.',
        'Diferentes armadilhas oferecem respostas às ameaças.': 'Different traps offer ways to respond to threats.',
        'Acompanhar a situação da casa orienta as decisões durante a partida.': 'Keeping track of the house helps guide decisions during each round.',
        'A proteção da casa organiza o objetivo principal e dá contexto às decisões dos jogadores.': 'Protecting the house defines the main goal and gives context to player decisions.',
        'A cooperação e o uso das armadilhas conectam os elementos de gerenciamento à ação do jogo.': 'Cooperation and trap use connect the management elements with the game’s action.',
        'GreenCoding Experience é uma experiência de realidade virtual desenvolvida para o Meta Quest 2. As decisões do jogador transformam progressivamente o ambiente de uma ilha.': 'GreenCoding Experience is a virtual reality project for Meta Quest 2. The player’s decisions progressively transform an island environment.',
        'A mudança no cenário torna visível o impacto das escolhas e conecta a interação à temática ambiental.': 'Changes to the scenery make the impact of each choice visible and connect the interaction to environmental themes.',
        'A ilha funciona como o espaço de exploração da experiência. O jogador observa suas transformações conforme avança e toma decisões.': 'The island is the experience’s explorable space. Players watch it change as they progress and make decisions.',
        'As imagens registram diferentes áreas e momentos do ambiente virtual da GreenCoding Experience.': 'The images capture different areas and moments in GreenCoding Experience’s virtual environment.',
        'Uma experiência de realidade virtual em que as decisões do jogador alteram progressivamente o ambiente.': 'A virtual reality experience where player decisions progressively change the environment.',
        'A ilha é o espaço virtual percorrido durante a experiência.': 'The island is the virtual space players explore.',
        'As escolhas do jogador conduzem a transformação do ambiente.': 'The player’s choices drive the environment’s transformation.',
        'As mudanças visuais conectam a interação à temática ambiental.': 'Visual changes connect player interaction to environmental themes.',
        'GreenCoding Experience apresenta o impacto das decisões por meio da transformação progressiva do ambiente.': 'GreenCoding Experience shows the impact of decisions through the environment’s gradual transformation.',
        'A realidade virtual coloca o jogador dentro de uma ilha que muda ao longo da experiência.': 'Virtual reality places the player on an island that changes throughout the experience.',
        'visão geral': 'overview', 'visão do projeto': 'project overview', 'detalhe do ambiente': 'environment detail',
        'cena do projeto': 'project scene', 'outro ângulo': 'another angle', 'imagem 5': 'image 5',
        'imagem 6': 'image 6', 'detalhes': 'details', 'ambiente': 'environment',
        'AÇÃO E PROGRESSÃO': 'ACTION & PROGRESSION', 'Corrida, obstáculos, cartas e progressão em uma cidade estilizada.': 'Running, obstacles, cards, and progression in a stylized city.',
        'EXPERIÊNCIA VIRTUAL': 'VIRTUAL EXPERIENCE', 'Presença, narrativa espacial e interação em um cenário cultural.': 'Presence, spatial storytelling, and interaction in a cultural setting.',
        'AÇÃO E AVENTURA': 'ACTION ADVENTURE', 'Personagens, desafios e ritmo organizados para sustentar a aventura.': 'Characters, challenges, and pacing shape the adventure.',
        'EXPERIÊNCIA DE MARCA': 'BRAND EXPERIENCE', 'Marcas, espaço físico e exploração conectados em um ambiente virtual.': 'Brands, physical space, and exploration connected in a virtual environment.',
        'COOPERAÇÃO': 'CO-OP', 'Decisões rápidas, proteção do espaço e uso estratégico de armadilhas.': 'Quick decisions, protecting the house, and strategic trap use.',
        'PROJETO IMERSIVO': 'IMMERSIVE PROJECT', 'Experiência de realidade virtual orientada por decisões, impacto ambiental e transformação progressiva do espaço.': 'A virtual reality experience shaped by decisions, environmental impact, and gradual changes to the environment.',
        'EDUCAÇÃO E PRODUÇÃO': 'EDUCATION & PRODUCTION', 'Iniciativa voltada à organização de conhecimento, atividades e colaboração em torno de projetos criativos.': 'An initiative focused on organizing knowledge, activities, and collaboration around creative projects.',
        'COMUNIDADE E PROJETO': 'COMMUNITY & PROJECTS', 'Projeto focado em conectar pessoas, iniciativas e oportunidades por meio de uma estrutura colaborativa.': 'A project focused on connecting people, initiatives, and opportunities through collaboration.',
        'PRODUTO E PARCERIAS': 'PRODUCT & PARTNERSHIPS', 'Articulação entre marcas, experiência digital e ambiente físico para criar uma proposta de produto coerente.': 'Bringing brands, digital experiences, and physical environments together in a coherent product concept.',
        'EXPERIÊNCIA DIGITAL': 'DIGITAL EXPERIENCE', 'Desenvolvimento de uma experiência digital com foco em navegação, interação e apresentação de conteúdo.': 'Development of a digital experience focused on navigation, interaction, and content presentation.',
        'JOGO INTERATIVO': 'INTERACTIVE GAME', 'Implementação de sistemas e interações para uma experiência de jogo orientada por objetivos.': 'Implementing systems and interactions for a goal-driven game experience.',
        'REALIDADE MISTA': 'MIXED REALITY', 'Construção de uma experiência que conecta ambiente físico, marcas e espaço virtual.': 'Building an experience that connects a physical environment, brands, and virtual space.',
        'GAMEPLAY': 'GAMEPLAY', 'Desenvolvimento de mecânicas, sistemas de interação e lógica para um jogo cooperativo.': 'Developing mechanics, interaction systems, and logic for a cooperative game.',
        'AÇÃO': 'ACTION', 'Experiência': 'Experience', 'Metaverso': 'Metaverse', 'Imersivo': 'Immersive',
        'Casual': 'Casual', 'Cooperativo': 'Co-op', 'Planejamento': 'Planning', 'Conteúdo': 'Content',
        'Coordenação': 'Coordination', 'Gestão': 'Management', 'Comunidade': 'Community',
        'Meta in Rio: visão geral': 'Meta in Rio: overview', 'Meta in Rio: ambiente': 'Meta in Rio: environment',
        'Meta in Rio: detalhes': 'Meta in Rio: details', 'Rainbow Revenge: Recruit: visão geral': 'Rainbow Revenge: Recruit: overview',
        'Rainbow Revenge: Recruit: ambiente': 'Rainbow Revenge: Recruit: environment', 'Rainbow Revenge: Recruit: detalhes': 'Rainbow Revenge: Recruit: details',
        'WhiteRoom Market: visão geral': 'WhiteRoom Market: overview', 'WhiteRoom Market: ambiente': 'WhiteRoom Market: environment',
        'WhiteRoom Market: detalhes': 'WhiteRoom Market: details', "Annie's Sweet Nightmares: visão geral": "Annie's Sweet Nightmares: overview",
        "Annie's Sweet Nightmares: ambiente": "Annie's Sweet Nightmares: environment", "Annie's Sweet Nightmares: detalhes": "Annie's Sweet Nightmares: details",
        'GreenCoding Experience: visão geral': 'GreenCoding Experience: overview', 'GreenCoding Experience: ambiente': 'GreenCoding Experience: environment',
        'GreenCoding Experience: detalhes': 'GreenCoding Experience: details',
        'Ambientação': 'Environment design', 'Encontro': 'Gathering', 'Comunicação': 'Communication',
        'Universo': 'Universe', 'Conflito': 'Conflict', 'Marcas': 'Brands', 'Espaço': 'Space',
        'Conexão': 'Connection', 'Exploração': 'Exploration', 'Decisões': 'Decisions', 'Impacto': 'Impact',
        'Cooperação': 'Cooperation', 'Armadilhas': 'Traps',
        'Projetos de Game Design desenvolvidos por Richard Mendonça.': 'Game design projects by Richard Mendonça.',
        'Projetos de gerenciamento e coordenação desenvolvidos por Richard Mendonça.': 'Project management and coordination work by Richard Mendonça.',
        'Projetos de desenvolvimento realizados por Richard Mendonça.': 'Development projects by Richard Mendonça.',
        'Missão Mesquita, projeto de Game Design desenvolvido por Richard Mendonça.': 'Missão Mesquita, a game design project by Richard Mendonça.',
        'Meta in Rio, projeto de Game Design desenvolvido por Richard Mendonça.': 'Meta in Rio, a game design project by Richard Mendonça.',
        'Rainbow Revenge: Recruit, projeto de Game Design desenvolvido por Richard Mendonça.': 'Rainbow Revenge: Recruit, a game design project by Richard Mendonça.',
        'WhiteRoom Market, projeto de desenvolvimento realizado por Richard Mendonça.': 'WhiteRoom Market, a development project by Richard Mendonça.',
        "Annie's Sweet Nightmares, projeto de desenvolvimento realizado por Richard Mendonça.": "Annie's Sweet Nightmares, a development project by Richard Mendonça.",
        'GreenCoding Experience, projeto de gerenciamento desenvolvido por Richard Mendonça.': 'GreenCoding Experience, a project management project by Richard Mendonça.',
        'Projeto de Game Design': 'Game Design project', 'Projeto de Gerenciamento': 'Project Management project',
        'Projeto de Desenvolvedor': 'Development project', '· Projeto de Game Design': '· Game Design project',
        '· Projeto de Gerenciamento': '· Project Management project', '· Projeto de Desenvolvedor': '· Development project',
        'Notas sobre o projeto': 'Project notes', '· Visão do projeto': '· Project overview',
        '· Elementos da experiência': '· Project elements', 'Leave': 'Leave', 'a Reply': 'a comment',
        'Área': 'Field', 'Áreas': 'Areas', 'Ambiente': 'Environment', 'Desenvolvedor': 'Developer',
        '· Desenvolvimento': '· Development',
        'Do conceito': 'From concept', 'ao build': 'to build',
        'Deixe': 'Leave', 'um comentário': 'a comment',
        'Comentários sobre o projeto': 'Project comments',
        'EXPERIÊNCIA VIRTUAL': 'VIRTUAL EXPERIENCE', 'EXPERIÊNCIA DE MARCA': 'BRAND EXPERIENCE',
        'Experiência virtual': 'Virtual experience', 'Experiência de vendas': 'Retail experience',
        'Projetos de Game Design': 'Game Design projects',
        'Entrega': 'Delivery', '· Direção de gameplay': '· Gameplay direction',
        'Espaço virtual do Meta in Rio': 'Virtual space in Meta in Rio',
        'Meta in Rio · visão do projeto': 'Meta in Rio · project overview',
        'Meta in Rio · detalhe do ambiente': 'Meta in Rio · environment detail',
        'Meta in Rio · cena do projeto': 'Meta in Rio · project scene',
        'Personagem correndo pelas ruas de Missão Mesquita': 'Character running through the streets of Missão Mesquita',
        'Corrida pela cidade': 'City run', 'Desafio no percurso': 'Course challenge',
        'Obstáculo na cidade': 'Obstacle in the city', 'Personagem na cidade': 'Character in the city',
        'Carta especial': 'Special card', 'Tela de coleção': 'Collection screen',
        'Tela de Missão Mesquita': 'Missão Mesquita screen', 'Gameplay de Missão Mesquita': 'Missão Mesquita gameplay',
        'Personagem no percurso': 'Character on the course', 'Desafio do jogo': 'In-game challenge',
        'Gameplay em cidade': 'Gameplay in the city', 'Personagem em movimento': 'Character in motion',
        'Cena de Missão Mesquita': 'Missão Mesquita scene', 'Obstáculo de Missão Mesquita': 'Missão Mesquita obstacle',
        'Percurso do jogo': 'Game course',
        'Tela de cartas do jogo': 'Game card screen', 'Obstáculo e personagem': 'Obstacle and character',
        'Rainbow Revenge: Recruit: ambiente': 'Rainbow Revenge: Recruit: environment',
        'Rainbow Revenge: Recruit · visão do projeto': 'Rainbow Revenge: Recruit · project overview',
        'Rainbow Revenge: Recruit · detalhe do ambiente': 'Rainbow Revenge: Recruit · environment detail',
        'Rainbow Revenge: Recruit · cena do projeto': 'Rainbow Revenge: Recruit · project scene',
        "Cena de Annie's Sweet Nightmares": "Annie's Sweet Nightmares scene",
        "Annie's Sweet Nightmares: ambiente": "Annie's Sweet Nightmares: environment",
        "Annie's Sweet Nightmares · visão do projeto": "Annie's Sweet Nightmares · project overview",
        "Annie's Sweet Nightmares · detalhe do ambiente": "Annie's Sweet Nightmares · environment detail",
        "Annie's Sweet Nightmares · cena do projeto": "Annie's Sweet Nightmares · project scene",
        'Espaço virtual do WhiteRoom Market': 'Virtual space in WhiteRoom Market',
        'WhiteRoom Market: ambiente': 'WhiteRoom Market: environment',
        'WhiteRoom Market · visão do projeto': 'WhiteRoom Market · project overview',
        'WhiteRoom Market · detalhe do ambiente': 'WhiteRoom Market · environment detail',
        'WhiteRoom Market · cena do projeto': 'WhiteRoom Market · project scene',
        'Ilha da GreenCoding Experience': 'GreenCoding Experience island',
        'GreenCoding Experience: ambiente': 'GreenCoding Experience: environment',
        'GreenCoding Experience · visão do projeto': 'GreenCoding Experience · project overview',
        'GreenCoding Experience · detalhe do ambiente': 'GreenCoding Experience · environment detail',
        'GreenCoding Experience · cena do projeto': 'GreenCoding Experience · project scene',
        'Name *': 'Name *', 'Message *': 'Comment *',
        'As imagens registram diferentes Áreas e momentos do ambiente virtual da GreenCoding Experience.': 'The images capture different areas and moments in GreenCoding Experience’s virtual environment.',
        'Missão Mesquita é um projeto de jogo criado a partir da ideia de atravessar uma cidade viva, colorida e cheia de possibilidades. A experiência coloca o jogador em movimento constante, combinando corrida, reação e exploração em um cenário urbano estilizado.': 'Missão Mesquita is a game built around crossing a lively, colorful city full of possibilities. Players are constantly on the move, combining running, quick reactions, and exploration in a stylized urban setting.',
        'Ao longo do percurso, o jogador encontra obstáculos, personagens e elementos colecionáveis que ajudam a construir a identidade do mundo. As cartas e telas de coleção ampliam essa proposta, trazendo uma camada de descoberta para além do caminho principal.': 'Along the way, players encounter obstacles, characters, and collectibles that shape the game world. Cards and collection screens add a layer of discovery beyond the main route.',
        'O projeto busca uma leitura simples e direta: o jogador entende rapidamente que precisa avançar, desviar e reagir, mas encontra espaço para melhorar seu desempenho a cada tentativa. Essa combinação entre acessibilidade e repetição é parte central da experiência.': 'The game is designed to be easy to read: players quickly understand that they need to move forward, dodge, and react, while still having room to improve with each attempt. This balance between accessibility and replayability is central to the experience.',
        'Visualmente, Missão Mesquita mistura uma cidade reconhecível com personagens e interfaces de cores marcantes. O resultado é uma apresentação leve e própria, que aproxima o jogo de uma experiência casual sem abandonar a sensação de progressão.': 'Visually, Missão Mesquita blends a recognizable city with colorful characters and interfaces. The result is a distinctive, approachable presentation that feels casual while retaining a sense of progression.',
        'Jogar Missão Mesquita': 'Play Missão Mesquita', 'Minha contribuição esteve na construção da experiência jogável, conectando as decisões de gameplay, a organização do projeto e a preparação da versão para navegador.': 'My contribution focused on building the playable experience, connecting gameplay decisions with project organization and preparing the browser version.',
        'Estruturação do loop principal e dos comandos que sustentam a corrida.': 'Shaping the core loop and controls that drive the run.',
        'Organização da experiência para comunicar objetivo e ritmo sem excesso de texto.': 'Structuring the experience to communicate goals and pacing without unnecessary text.',
        'Preparação da versão jogável para navegador e integração ao portfólio.': 'Preparing the browser version and integrating it into the portfolio.',
        'Missão Mesquita foi uma oportunidade de experimentar como um sistema simples de movimento pode sustentar uma experiência completa. A cidade, os obstáculos e as cartas foram pensados para dar ao jogador motivos diferentes para continuar explorando.': 'Missão Mesquita was an opportunity to explore how a simple movement system can support a complete experience. The city, obstacles, and cards give players different reasons to keep exploring.',
        'O projeto também serviu como espaço para testar ritmo, leitura visual e progressão em uma experiência jogável para navegador.': 'The project also provided a way to test pacing, visual readability, and progression in a browser-playable experience.',
        'Equipe do projeto': 'Project team', 'Elementos da experiência': 'Project elements'
    },
    es: {
        'Projetos': 'Proyectos', 'Desenvolvedor': 'Desarrollo', 'Desenvolvimento': 'Desarrollo',
        'Gerenciamento': 'Gestión de proyectos', 'Biografia': 'Biografía', 'Jogaveis': 'Juegos jugables',
        'Jogáveis': 'Juegos jugables', 'Galeria': 'Galería', 'Extra': 'Más', 'Home': 'Inicio',
        'Saiba Mais': 'Ver proyecto', 'Ver Jogos': 'Ver proyectos', 'Game DevOps': 'Gestión de proyectos',
        'MetainRio': 'Meta in Rio', 'PRÉ': 'PROYECTOS', 'VIA': 'DESTACADOS',
        'Ultimas': 'Proyectos', 'Noticias': 'destacados', 'Latest': 'Galería', 'Pictures': 'de proyectos',
        'Principais': 'Principales', 'Ferramentas': 'herramientas', 'Top': 'Top', 'Search': 'Buscar',
        'Called Let': 'Imágenes del proyecto', 'Rainbow Trailer': 'Tráiler de Rainbow Revenge',
        'Smell magic in the air. Or maybe barbecue': "Annie's Sweet Nightmares",
        'Grab your sword and fight the Horde': 'GreenCoding Experience',
        'We found a witch! May we burn her?': 'Meta in Rio',
        'For good, too though, in consequence': 'WhiteRoom Market',
        'He made his passenger captain of one': 'Vaccine Race',
        'At first, for some time, I was not able to answer': 'Rainbow Revenge: Recruit',
        'With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone...': "Un juego cooperativo en el que los jugadores protegen la casa de Annie coordinando trampas contra los osos.",
        'For good, too; though, in consequence of my previous emotions, I was still occasionally seized with a stormy sob . After we had jogged on for some little time, I asked the carrier...': 'Una experiencia de realidad virtual para Meta Quest 2 donde las decisiones del jugador transforman gradualmente una isla.',
        "And she went on planning to herself how she would manage it. `They must go by the carrier,' she thought; `and how funny it'll seem, sending presents to one's own feet!...": 'Un espacio virtual creado con Disque Denúncia para recibir el pódcast de Dora y reunir a sus participantes.',
        'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that...': 'Una experiencia de venta en realidad mixta que conecta marcas, un espacio virtual y un entorno físico.',
        'Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...': 'Un juego interactivo basado en objetivos, sistemas de gameplay e interacciones dentro del juego.',
        'Rainbow Revenge: Recruit é uma aventura de ação em 3D que acompanha o esquadrão espacial Rainbow Revenge em sua missão de defender a Terra contra o Koala Squad, uma perigosa gangue espacial.': 'Rainbow Revenge: Recruit es una aventura de acción en 3D sobre un escuadrón espacial que defiende la Tierra del Koala Squad.',
        'GreenCoding Experience é uma experiência de realidade virtual desenvolvida para o Meta Quest 2, na qual as decisões do jogador transformam progressivamente o ambiente de uma ilha.': 'GreenCoding Experience es una experiencia de realidad virtual para Meta Quest 2 donde las decisiones del jugador transforman gradualmente una isla.',
        'Meta in Rio é um cenário desenvolvido para o Altspace em parceria com o Disque Denúncia, concebido como um espaço virtual para o podcast da Dora, uma influenciadora digital associada à organização.': 'Meta in Rio es un entorno virtual desarrollado para Altspace junto con Disque Denúncia para recibir el pódcast de Dora, creadora digital vinculada a la organización.',
        "Annie's Sweet Nightmares é um casual game inspirado em jogos cooperativos de gerenciamento, no qual o jogador precisa proteger a casa de Annie utilizando diferentes armadilhas contra ursos.": "Annie's Sweet Nightmares es un juego casual cooperativo en el que los jugadores protegen la casa de Annie con trampas contra osos.",
        'WhiteRoom Market é uma experiência de vendas no metaverso desenvolvida em parceria com diferentes marcas, utilizando realidade mista para conectar um espaço virtual a um ambiente físico.': 'WhiteRoom Market es una experiencia de venta en el metaverso creada con varias marcas y realidad mixta para conectar un espacio virtual con un entorno físico.',
        'Ver projeto': 'Ver proyecto', 'Projeto de Game Design': 'Proyecto de diseño de videojuegos',
        'Projeto de Desenvolvimento': 'Proyecto de desarrollo', 'Projeto de Gerenciamento': 'Proyecto de gestión',
        'Corrida pela cidade': 'Carrera por la ciudad', 'Desafio no percurso': 'Reto del recorrido',
        'Ilha virtual de GreenCoding Experience': 'Isla virtual de GreenCoding Experience',
        'Espaço virtual de Meta in Rio': 'Espacio virtual de Meta in Rio',
        'Personagem de Annie’s Sweet Nightmares': "Personaje de Annie's Sweet Nightmares",
        'WhiteRoom Market: experiência de realidade mista': 'Experiencia de realidad mixta de WhiteRoom Market',
        'Ação e aventura': 'Acción y aventura', 'Realidade virtual': 'Realidad virtual',
        'Realidade mista': 'Realidad mixta', 'Experiência virtual': 'Experiencia virtual',
        'Cooperativo': 'Cooperativo', 'Casual': 'Casual', 'Estratégia': 'Estrategia',
        'Game design': 'Diseño de videojuegos', 'PROJETOS': 'PROYECTOS', 'EM DESTAQUE': 'DESTACADOS',
        'Ultimas Noticias': 'Proyectos destacados', 'Ferramentas de desenvolvimento': 'Herramientas de desarrollo',
        'A galeria apresenta imagens de projetos de jogos e experiências digitais.': 'Una galería de imágenes de videojuegos y experiencias digitales.',
        'Conheça alguns dos projetos que desenvolvi em diferentes áreas de jogos e experiências digitais.': 'Conoce algunos proyectos que desarrollé en videojuegos y experiencias digitales.',
        'Portfólio de Richard Mendonça: desenvolvimento de jogos, game design e gerenciamento de projetos interativos.': 'Portafolio de Richard Mendonça: desarrollo de videojuegos, diseño de juegos y gestión de proyectos interactivos.',
        'desenvolvimento de jogos, game design, gerenciamento de projetos': 'desarrollo de videojuegos, diseño de juegos, gestión de proyectos',
        'Jogo cooperativo': 'Juego cooperativo', 'Jogo educativo': 'Juego educativo',
        'Ação e aventura': 'Acción y aventura', 'Gestão de projetos': 'Gestión de proyectos',
        'Ver projetos': 'Ver proyectos', 'Buscar': 'Buscar',
        'Imagem do ambiente virtual criado para receber o podcast da Dora.': 'Vista del entorno virtual creado para recibir el pódcast de Dora.',
        'WhiteRoom Market: produtos e marcas em um ambiente de realidade mista.': 'Productos y marcas de WhiteRoom Market en un entorno de realidad mixta.',
        'WhiteRoom Market em realidade mista': 'WhiteRoom Market en realidad mixta',
        'Personagem de Rainbow Revenge: Recruit': 'Personaje de Rainbow Revenge: Recruit',
        'Cena de Annie’s Sweet Nightmares': "Escena de Annie's Sweet Nightmares",
        'Ilha de GreenCoding Experience': 'Isla de GreenCoding Experience',
        'Projetos em destaque': 'Proyectos destacados', 'Galeria de imagens': 'Galería de proyectos',
        'Annie’s Sweet Nightmares é um jogo cooperativo em que os jogadores protegem a casa de Annie usando armadilhas para impedir a chegada dos ursos.': "Annie's Sweet Nightmares es un juego cooperativo en el que los jugadores protegen la casa de Annie con trampas para detener a los osos.",
        'GreenCoding Experience é uma experiência de realidade virtual para Meta Quest 2 em que as escolhas do jogador transformam gradualmente uma ilha.': 'GreenCoding Experience es un proyecto de realidad virtual para Meta Quest 2 donde las decisiones del jugador transforman gradualmente una isla.',
        'Meta in Rio é um espaço virtual criado com o Disque Denúncia para receber o podcast da Dora e reunir seus participantes.': 'Meta in Rio es un espacio virtual creado con Disque Denúncia para recibir el pódcast de Dora y reunir a sus participantes.',
        'WhiteRoom Market é uma experiência de vendas em realidade mista que conecta marcas, um espaço virtual e um ambiente físico.': 'WhiteRoom Market es una experiencia de venta en realidad mixta que conecta marcas, un espacio virtual y un entorno físico.',
        'Vaccine Race é um jogo interativo que transforma a corrida pela vacinação em uma experiência de gameplay.': 'Vaccine Race es un juego interactivo que convierte la carrera por la vacunación en una experiencia de juego.',
        'Rainbow Revenge: Recruit é uma aventura de ação em 3D sobre um esquadrão espacial que defende a Terra do Koala Squad.': 'Rainbow Revenge: Recruit es una aventura de acción en 3D sobre un escuadrón espacial que defiende la Tierra del Koala Squad.',
        'O portfólio reúne jogos e experiências digitais de diferentes gêneros, com foco na criatividade e na interação.': 'El portafolio reúne videojuegos y experiencias digitales de distintos géneros, con énfasis en la creatividad y la interacción.',
        'de Game Design': 'de diseño de videojuegos', 'de Desenvolvimento': 'de desarrollo',
        'de Gerenciamento': 'de gestión de proyectos', 'SOBRE MEU GAME DESIGN': 'SOBRE MI TRABAJO EN DISEÑO DE JUEGOS',
        'SOBRE MEU GERENCIAMENTO': 'SOBRE MI TRABAJO EN GESTIÓN DE PROYECTOS', 'SOBRE MEU DESENVOLVIMENTO': 'SOBRE MI TRABAJO EN DESARROLLO',
        'Projetar experiências que fazem sentido quando jogadas': 'Diseñar experiencias que se entienden al jugar',
        'Meu trabalho em Game Design parte da relação entre intenção e experiência: entender o que o jogador precisa sentir, aprender e fazer em cada momento.': 'Mi trabajo en diseño de juegos conecta intención y experiencia: entender qué debe sentir, aprender y hacer el jugador en cada momento.',
        'Atuo na criação de conceitos, definição de mecânicas, desenho de loops de gameplay, ritmo de fases, progressão, narrativa espacial e organização de interfaces. Também trabalho com prototipagem e testes para transformar ideias em decisões jogáveis.': 'Trabajo en conceptos, definición de mecánicas, ciclos de juego, ritmo de niveles, progresión, narrativa espacial e interfaces. También creo prototipos y pruebo ideas para convertirlas en decisiones jugables.',
        'Os projetos abaixo mostram experiências diferentes, de jogos de ação e corrida a ambientes virtuais e propostas cooperativas. Em comum, todos exigem clareza de objetivo, leitura visual e atenção ao comportamento do jogador.': 'Los proyectos siguientes muestran experiencias variadas: desde juegos de acción y carreras hasta entornos virtuales y propuestas cooperativas. Todos requieren objetivos claros, lectura visual y atención al comportamiento del jugador.',
        'Organizar pessoas, ideias e entregas': 'Coordinar personas, ideas y entregas',
        'Meu trabalho de gerenciamento está ligado à capacidade de transformar objetivos amplos em etapas claras, combinando organização, comunicação e acompanhamento.': 'Mi trabajo de gestión convierte objetivos amplios en etapas claras mediante organización, comunicación y seguimiento.',
        'Atuo conectando equipes criativas e técnicas, estruturando prioridades, acompanhando cronogramas e ajudando projetos a avançarem com mais clareza. A experiência em jogos e tecnologia também me permite entender as necessidades específicas de cada etapa de produção.': 'Conecto equipos creativos y técnicos, organizo prioridades, hago seguimiento de cronogramas y ayudo a que los proyectos avancen con claridad. Mi experiencia en videojuegos y tecnología también me permite comprender las necesidades de cada etapa de producción.',
        'Os projetos abaixo representam iniciativas em que planejamento, colaboração e visão de produto foram tão importantes quanto a execução.': 'Estos proyectos muestran iniciativas en las que la planificación, la colaboración y la visión de producto fueron tan importantes como la ejecución.',
        'Construir sistemas que viram experiências': 'Crear sistemas que se convierten en experiencias',
        'Meu trabalho como desenvolvedor conecta código, ferramentas e interação para transformar conceitos em produtos jogáveis e experiências digitais funcionais.': 'Como desarrollador, conecto código, herramientas e interacción para convertir conceptos en productos jugables y experiencias digitales funcionales.',
        'Atuo com Unity, programação de gameplay, integração de sistemas, prototipagem, interfaces e preparação de builds. Gosto de trabalhar perto do design para que a implementação preserve a intenção da experiência.': 'Trabajo con Unity, programación de gameplay, integración de sistemas, prototipado, interfaces y preparación de versiones. Colaboro con diseño para que la implementación mantenga la intención de la experiencia.',
        'Esta seleção reúne projetos com diferentes desafios técnicos: jogos, experiências imersivas, aplicações interativas e soluções desenvolvidas para contextos reais.': 'Esta selección reúne proyectos con distintos retos técnicos: videojuegos, experiencias inmersivas, aplicaciones interactivas y soluciones para contextos reales.',
        'Ver projeto': 'Ver proyecto', 'Conhecer projeto': 'Descubrir proyecto',
        'Destaques': 'Selección', 'do projeto': 'de proyectos', 'Galeria': 'Galería', 'de imagens': 'del proyecto',
        'Top 3': 'Selección', 'Recent': 'de proyectos', 'Latest': 'Galería', 'Screenshots': 'del proyecto',
        'Ficha': 'Datos', 'técnica': 'del proyecto', 'Área': 'Área', 'Voltar ao portfólio': 'Volver al portafolio',
        'Deixe um comentário': 'Deja un comentario', 'Enviar comentário': 'Enviar comentario',
        'Leave a Reply': 'Deja un comentario', 'Post Comment': 'Publicar comentario',
        '2 Notas sobre o projeto': '2 notas del proyecto', '2 Comentários sobre o projeto': '2 notas del proyecto',
        'MINHA CONTRIBUIÇÃO': 'MI CONTRIBUCIÓN', 'ELEMENTOS DO PROJETO': 'ELEMENTOS DEL PROYECTO',
        'Minha contribuição': 'Mi contribución', 'Do conceito ao build': 'Del concepto a la versión final',
        'por': 'por', 'Projeto de Game Design': 'Proyecto de diseño de juegos', 'Projeto de Desenvolvedor': 'Proyecto de desarrollo',
        'Aventura': 'Aventura', 'Ação': 'Acción', 'Endless Runner': 'Endless runner', 'Indie': 'Indie',
        'Experiência virtual': 'Experiencia virtual', 'Espaço para podcast': 'Espacio para pódcast', 'Conteúdo': 'Contenido',
        'Parceiro': 'Socio', 'Formato': 'Formato', 'Gênero': 'Género', 'Perspectiva': 'Perspectiva',
        'Equipe': 'Equipo', 'Objetivo': 'Objetivo', 'Experiência imersiva': 'Experiencia inmersiva',
        'Realidade virtual': 'Realidad virtual', 'Impacto ambiental': 'Impacto ambiental',
        'Metaverso': 'Metaverso', 'Realidade mista': 'Realidad mixta', 'Experiência de vendas': 'Experiencia de venta',
        'Diferentes marcas': 'Varias marcas', 'Jogo casual': 'Juego casual', 'Cooperativo': 'Cooperativo',
        'Referência': 'Referencia', 'Proteger a casa': 'Proteger la casa', 'Ursos': 'Osos',
        'Game Design': 'Diseño de videojuegos', 'Altspace': 'Altspace', 'Disque Denúncia': 'Disque Denúncia',
        'Podcast da Dora': 'Pódcast de Dora', 'Terceira pessoa': 'Tercera persona', 'Corrida e cartas': 'Carreras y cartas',
        'Gameplay': 'Gameplay', 'Obstáculos': 'Obstáculos', 'Progressão': 'Progresión',
        'Corrida pela cidade': 'Carrera por la ciudad', 'Desafios do percurso': 'Retos del recorrido', 'Coleção de cartas': 'Colección de cartas',
        'Meta · Meta in Rio': 'Meta · Meta in Rio', 'WhiteRoom · WhiteRoom Market': 'WhiteRoom · WhiteRoom Market',
        "Annie's · Annie's Sweet Nightmares": "Annie's · Annie's Sweet Nightmares",
        'GreenCoding · GreenCoding Experience': 'GreenCoding · GreenCoding Experience',
        'Meta in Rio é um cenário desenvolvido para o Altspace em parceria com o Disque Denúncia. O espaço foi concebido para receber o podcast da Dora, influenciadora digital associada à organização.': 'Meta in Rio es un entorno virtual desarrollado para Altspace junto con Disque Denúncia. Fue creado para recibir el pódcast de Dora, creadora digital vinculada a la organización.',
        'O ambiente virtual funciona como ponto de encontro e dá contexto visual ao conteúdo, criando um espaço pensado para receber o público e acompanhar a conversa.': 'El entorno virtual funciona como punto de encuentro y aporta contexto visual al contenido, con un espacio pensado para recibir al público y acompañar la conversación.',
        'A proposta combina presença, ambientação e comunicação em uma experiência social. Diferentes ângulos do cenário mostram a identidade visual construída para esse encontro.': 'La propuesta combina presencia, ambientación y comunicación en una experiencia social. Las distintas vistas muestran la identidad visual creada para este encuentro.',
        'O projeto explora como um espaço digital pode apoiar a apresentação de conteúdo e aproximar pessoas em torno de uma iniciativa de comunicação.': 'El proyecto explora cómo un espacio digital puede apoyar la presentación de contenidos y reunir a personas en torno a una iniciativa de comunicación.',
        'Meta in Rio combina cenário virtual, presença social e conteúdo em um ambiente pensado para receber o podcast da Dora.': 'Meta in Rio combina un entorno virtual, presencia social y contenido en un espacio creado para recibir el pódcast de Dora.',
        'O cenário dá identidade visual ao espaço e contexto ao encontro.': 'El escenario aporta identidad visual al espacio y contexto al encuentro.',
        'O ambiente virtual foi concebido para receber participantes em torno do podcast.': 'El entorno virtual fue diseñado para reunir a los participantes alrededor del pódcast.',
        'A experiência conecta o espaço digital à iniciativa do Disque Denúncia.': 'La experiencia conecta el espacio digital con la iniciativa de Disque Denúncia.',
        'O cenário transforma o podcast em um encontro situado em um ambiente virtual próprio, em vez de uma transmissão sem contexto espacial.': 'El escenario convierte el pódcast en un encuentro dentro de un entorno virtual propio, en lugar de una transmisión sin contexto espacial.',
        'A parceria com o Disque Denúncia orienta o propósito do espaço e a forma como o conteúdo é apresentado.': 'La colaboración con Disque Denúncia orienta el propósito del espacio y la forma de presentar el contenido.',
        'Rainbow Revenge: Recruit é uma aventura de ação em 3D sobre o esquadrão espacial Rainbow Revenge e sua missão de defender a Terra contra o Koala Squad.': 'Rainbow Revenge: Recruit es una aventura de acción en 3D sobre el escuadrón espacial Rainbow Revenge y su misión de defender la Tierra del Koala Squad.',
        'A aventura apresenta um conflito entre dois grupos e estabelece um universo próprio por meio de personagens, cenários e identidade visual marcante.': 'La aventura presenta el conflicto entre dos grupos y construye un universo propio mediante sus personajes, escenarios e identidad visual.',
        'As imagens do projeto mostram diferentes partes desse universo e ajudam a apresentar o tom de ação e aventura da experiência.': 'Las imágenes muestran distintas partes de este universo y transmiten el tono de acción y aventura de la experiencia.',
        'O projeto combina uma missão clara com uma apresentação visual colorida, criando uma base reconhecível para a jornada do esquadrão.': 'El proyecto combina una misión clara con una presentación colorida que da identidad al viaje del escuadrón.',
        'A aventura acompanha o esquadrão Rainbow Revenge em seu confronto com o Koala Squad.': 'La aventura sigue al escuadrón Rainbow Revenge en su enfrentamiento con el Koala Squad.',
        'Personagens e cenários dão forma ao mundo de Rainbow Revenge.': 'Los personajes y escenarios dan forma al mundo de Rainbow Revenge.',
        'O Koala Squad estabelece a ameaça que move a missão.': 'El Koala Squad representa la amenaza que impulsa la misión.',
        'A ação em 3D coloca o esquadrão no centro da defesa da Terra.': 'La acción en 3D sitúa al escuadrón en el centro de la defensa de la Tierra.',
        'Rainbow Revenge: Recruit apresenta uma aventura de ação construída em torno de um esquadrão espacial e de uma ameaça à Terra.': 'Rainbow Revenge: Recruit presenta una aventura de acción protagonizada por un escuadrón espacial y una amenaza para la Tierra.',
        'A identidade colorida do projeto aparece nos personagens, cenários e materiais visuais reunidos na galeria.': 'La identidad colorida del proyecto se refleja en los personajes, escenarios y materiales visuales de la galería.',
        'WhiteRoom Market é uma experiência de vendas no metaverso desenvolvida em parceria com diferentes marcas. A proposta utiliza realidade mista para conectar um espaço virtual a um ambiente físico.': 'WhiteRoom Market es una experiencia de venta en el metaverso creada junto con varias marcas. Utiliza realidad mixta para conectar un espacio virtual con un entorno físico.',
        'O projeto explora a apresentação de produtos e marcas em um contexto imersivo, articulando presença digital e espaço real em uma mesma experiência.': 'El proyecto explora la presentación de productos y marcas en un contexto inmersivo que une presencia digital y espacio físico.',
        'O ambiente reúne elementos de exposição e exploração para apresentar as marcas dentro de um espaço virtual compartilhado.': 'El entorno combina exposición y exploración para presentar las marcas en un espacio virtual compartido.',
        'As imagens mostram diferentes ângulos do WhiteRoom Market e dos elementos que compõem essa experiência.': 'Las imágenes muestran distintas perspectivas de WhiteRoom Market y los elementos que componen la experiencia.',
        'WhiteRoom Market articula apresentação de marcas, exploração de produtos e um ambiente de realidade mista.': 'WhiteRoom Market combina presentación de marcas, exploración de productos y un entorno de realidad mixta.',
        'A experiência foi desenvolvida em parceria com diferentes marcas.': 'La experiencia se desarrolló en colaboración con varias marcas.',
        'O ambiente virtual organiza a apresentação e a exploração dos produtos.': 'El entorno virtual organiza la presentación y exploración de los productos.',
        'A realidade mista aproxima o espaço digital do contexto físico.': 'La realidad mixta acerca el espacio digital al entorno físico.',
        'WhiteRoom Market propõe uma experiência de vendas em que o espaço virtual participa da apresentação das marcas.': 'WhiteRoom Market propone una experiencia de venta en la que el espacio virtual forma parte de la presentación de las marcas.',
        'A realidade mista conecta a experiência imersiva a um ambiente físico, aproximando os dois contextos.': 'La realidad mixta conecta la experiencia inmersiva con un entorno físico y acerca ambos contextos.',
        "Annie's Sweet Nightmares é um jogo casual cooperativo inspirado em jogos de gerenciamento. Os jogadores precisam proteger a casa de Annie utilizando diferentes armadilhas contra ursos.": "Annie's Sweet Nightmares es un juego casual cooperativo inspirado en juegos de gestión. Los jugadores deben proteger la casa de Annie usando distintas trampas contra osos.",
        'A dinâmica gira em torno de observar as ameaças e escolher como responder a elas. A cooperação ajuda a organizar as ações necessárias para manter a casa protegida.': 'La dinámica consiste en observar las amenazas y decidir cómo responder. La cooperación ayuda a coordinar las acciones necesarias para proteger la casa.',
        'As armadilhas e os elementos da casa dão variedade às decisões dos jogadores e ajudam a construir o ritmo da experiência.': 'Las trampas y los elementos de la casa aportan variedad a las decisiones y marcan el ritmo de la experiencia.',
        'A galeria reúne imagens de personagens, cenários e objetos que compõem o universo do jogo.': 'La galería reúne personajes, escenarios y objetos que forman parte del universo del juego.',
        'Um jogo cooperativo de gerenciamento em que as armadilhas ajudam a responder às ameaças dos ursos.': 'Un juego cooperativo de gestión en el que las trampas ayudan a responder a las amenazas de los osos.',
        'Os jogadores coordenam suas ações para proteger a casa.': 'Los jugadores coordinan sus acciones para proteger la casa.',
        'Diferentes armadilhas oferecem respostas às ameaças.': 'Las distintas trampas ofrecen respuestas a las amenazas.',
        'Acompanhar a situação da casa orienta as decisões durante a partida.': 'Observar el estado de la casa guía las decisiones durante la partida.',
        'A proteção da casa organiza o objetivo principal e dá contexto às decisões dos jogadores.': 'Proteger la casa define el objetivo principal y da contexto a las decisiones de los jugadores.',
        'A cooperação e o uso das armadilhas conectam os elementos de gerenciamento à ação do jogo.': 'La cooperación y el uso de trampas conectan la gestión con la acción del juego.',
        'GreenCoding Experience é uma experiência de realidade virtual desenvolvida para o Meta Quest 2. As decisões do jogador transformam progressivamente o ambiente de uma ilha.': 'GreenCoding Experience es una experiencia de realidad virtual para Meta Quest 2. Las decisiones del jugador transforman progresivamente el entorno de una isla.',
        'A mudança no cenário torna visível o impacto das escolhas e conecta a interação à temática ambiental.': 'Los cambios del escenario hacen visible el impacto de las decisiones y conectan la interacción con la temática ambiental.',
        'A ilha funciona como o espaço de exploração da experiência. O jogador observa suas transformações conforme avança e toma decisões.': 'La isla es el espacio que se explora. El jugador observa cómo se transforma a medida que avanza y toma decisiones.',
        'As imagens registram diferentes áreas e momentos do ambiente virtual da GreenCoding Experience.': 'Las imágenes muestran distintas áreas y momentos del entorno virtual de GreenCoding Experience.',
        'Uma experiência de realidade virtual em que as decisões do jogador alteram progressivamente o ambiente.': 'Una experiencia de realidad virtual donde las decisiones del jugador transforman el entorno progresivamente.',
        'A ilha é o espaço virtual percorrido durante a experiência.': 'La isla es el espacio virtual que se recorre durante la experiencia.',
        'As escolhas do jogador conduzem a transformação do ambiente.': 'Las decisiones del jugador impulsan la transformación del entorno.',
        'As mudanças visuais conectam a interação à temática ambiental.': 'Los cambios visuales conectan la interacción con la temática ambiental.',
        'GreenCoding Experience apresenta o impacto das decisões por meio da transformação progressiva do ambiente.': 'GreenCoding Experience muestra el impacto de las decisiones mediante la transformación progresiva del entorno.',
        'A realidade virtual coloca o jogador dentro de uma ilha que muda ao longo da experiência.': 'La realidad virtual sitúa al jugador en una isla que cambia durante la experiencia.',
        'visão geral': 'vista general', 'visão do projeto': 'vista del proyecto', 'detalhe do ambiente': 'detalle del entorno',
        'cena do projeto': 'escena del proyecto', 'outro ângulo': 'otra perspectiva', 'imagem 5': 'imagen 5',
        'imagem 6': 'imagen 6', 'detalhes': 'detalles', 'ambiente': 'entorno',
        'AÇÃO E PROGRESSÃO': 'ACCIÓN Y PROGRESIÓN', 'Corrida, obstáculos, cartas e progressão em uma cidade estilizada.': 'Carreras, obstáculos, cartas y progresión en una ciudad estilizada.',
        'EXPERIÊNCIA VIRTUAL': 'EXPERIENCIA VIRTUAL', 'Presença, narrativa espacial e interação em um cenário cultural.': 'Presencia, narrativa espacial e interacción en un entorno cultural.',
        'AÇÃO E AVENTURA': 'ACCIÓN Y AVENTURA', 'Personagens, desafios e ritmo organizados para sustentar a aventura.': 'Personajes, desafíos y ritmo al servicio de la aventura.',
        'EXPERIÊNCIA DE MARCA': 'EXPERIENCIA DE MARCA', 'Marcas, espaço físico e exploração conectados em um ambiente virtual.': 'Marcas, espacio físico y exploración conectados en un entorno virtual.',
        'COOPERAÇÃO': 'COOPERACIÓN', 'Decisões rápidas, proteção do espaço e uso estratégico de armadilhas.': 'Decisiones rápidas, proteger la casa y usar las trampas con estrategia.',
        'PROJETO IMERSIVO': 'PROYECTO INMERSIVO', 'Experiência de realidade virtual orientada por decisões, impacto ambiental e transformação progressiva do espaço.': 'Una experiencia de realidad virtual guiada por decisiones, impacto ambiental y transformación progresiva del entorno.',
        'EDUCAÇÃO E PRODUÇÃO': 'EDUCACIÓN Y PRODUCCIÓN', 'Iniciativa voltada à organização de conhecimento, atividades e colaboração em torno de projetos criativos.': 'Iniciativa centrada en organizar conocimientos, actividades y colaboración en proyectos creativos.',
        'COMUNIDADE E PROJETO': 'COMUNIDAD Y PROYECTOS', 'Projeto focado em conectar pessoas, iniciativas e oportunidades por meio de uma estrutura colaborativa.': 'Proyecto centrado en conectar personas, iniciativas y oportunidades mediante una estructura colaborativa.',
        'PRODUTO E PARCERIAS': 'PRODUCTO Y COLABORACIONES', 'Articulação entre marcas, experiência digital e ambiente físico para criar uma proposta de produto coerente.': 'Conectar marcas, experiencia digital y entorno físico para crear una propuesta de producto coherente.',
        'EXPERIÊNCIA DIGITAL': 'EXPERIENCIA DIGITAL', 'Desenvolvimento de uma experiência digital com foco em navegação, interação e apresentação de conteúdo.': 'Desarrollo de una experiencia digital centrada en navegación, interacción y presentación de contenidos.',
        'JOGO INTERATIVO': 'JUEGO INTERACTIVO', 'Implementação de sistemas e interações para uma experiência de jogo orientada por objetivos.': 'Implementación de sistemas e interacciones para una experiencia de juego orientada a objetivos.',
        'REALIDADE MISTA': 'REALIDAD MIXTA', 'Construção de uma experiência que conecta ambiente físico, marcas e espaço virtual.': 'Desarrollo de una experiencia que conecta el entorno físico, las marcas y el espacio virtual.',
        'GAMEPLAY': 'GAMEPLAY', 'Desenvolvimento de mecânicas, sistemas de interação e lógica para um jogo cooperativo.': 'Desarrollo de mecánicas, sistemas de interacción y lógica para un juego cooperativo.',
        'AÇÃO': 'ACCIÓN', 'Experiência': 'Experiencia', 'Imersivo': 'Inmersivo',
        'Casual': 'Casual', 'Planejamento': 'Planificación', 'Conteúdo': 'Contenido',
        'Coordenação': 'Coordinación', 'Gestão': 'Gestión', 'Comunidade': 'Comunidad',
        'Meta in Rio: visão geral': 'Meta in Rio: vista general', 'Meta in Rio: ambiente': 'Meta in Rio: entorno',
        'Meta in Rio: detalhes': 'Meta in Rio: detalles', 'Rainbow Revenge: Recruit: visão geral': 'Rainbow Revenge: Recruit: vista general',
        'Rainbow Revenge: Recruit: ambiente': 'Rainbow Revenge: Recruit: entorno', 'Rainbow Revenge: Recruit: detalhes': 'Rainbow Revenge: Recruit: detalles',
        'WhiteRoom Market: visão geral': 'WhiteRoom Market: vista general', 'WhiteRoom Market: ambiente': 'WhiteRoom Market: entorno',
        'WhiteRoom Market: detalhes': 'WhiteRoom Market: detalles', "Annie's Sweet Nightmares: visão geral": "Annie's Sweet Nightmares: vista general",
        "Annie's Sweet Nightmares: ambiente": "Annie's Sweet Nightmares: entorno", "Annie's Sweet Nightmares: detalhes": "Annie's Sweet Nightmares: detalles",
        'GreenCoding Experience: visão geral': 'GreenCoding Experience: vista general', 'GreenCoding Experience: ambiente': 'GreenCoding Experience: entorno',
        'GreenCoding Experience: detalhes': 'GreenCoding Experience: detalles',
        'Ambientação': 'Ambientación', 'Encontro': 'Encuentro', 'Comunicação': 'Comunicación',
        'Universo': 'Universo', 'Conflito': 'Conflicto', 'Marcas': 'Marcas', 'Espaço': 'Espacio',
        'Conexão': 'Conexión', 'Exploração': 'Exploración', 'Decisões': 'Decisiones', 'Impacto': 'Impacto',
        'Cooperação': 'Cooperación', 'Armadilhas': 'Trampas',
        'Projetos de Game Design desenvolvidos por Richard Mendonça.': 'Proyectos de diseño de videojuegos de Richard Mendonça.',
        'Projetos de gerenciamento e coordenação desenvolvidos por Richard Mendonça.': 'Proyectos de gestión y coordinación de Richard Mendonça.',
        'Projetos de desenvolvimento realizados por Richard Mendonça.': 'Proyectos de desarrollo de Richard Mendonça.',
        'Missão Mesquita, projeto de Game Design desenvolvido por Richard Mendonça.': 'Missão Mesquita, un proyecto de diseño de videojuegos de Richard Mendonça.',
        'Meta in Rio, projeto de Game Design desenvolvido por Richard Mendonça.': 'Meta in Rio, un proyecto de diseño de videojuegos de Richard Mendonça.',
        'Rainbow Revenge: Recruit, projeto de Game Design desenvolvido por Richard Mendonça.': 'Rainbow Revenge: Recruit, un proyecto de diseño de videojuegos de Richard Mendonça.',
        'WhiteRoom Market, projeto de desenvolvimento realizado por Richard Mendonça.': 'WhiteRoom Market, un proyecto de desarrollo de Richard Mendonça.',
        "Annie's Sweet Nightmares, projeto de desenvolvimento realizado por Richard Mendonça.": "Annie's Sweet Nightmares, un proyecto de desarrollo de Richard Mendonça.",
        'GreenCoding Experience, projeto de gerenciamento desenvolvido por Richard Mendonça.': 'GreenCoding Experience, un proyecto de gestión de Richard Mendonça.',
        'Projeto de Game Design': 'Proyecto de diseño de videojuegos', 'Projeto de Gerenciamento': 'Proyecto de gestión',
        'Projeto de Desenvolvedor': 'Proyecto de desarrollo', '· Projeto de Game Design': '· Proyecto de diseño de videojuegos',
        '· Projeto de Gerenciamento': '· Proyecto de gestión', '· Projeto de Desenvolvedor': '· Proyecto de desarrollo',
        'Notas sobre o projeto': 'Notas del proyecto', '· Visão do projeto': '· Resumen del proyecto',
        '· Elementos da experiência': '· Elementos de la experiencia', 'Leave': 'Deja', 'a Reply': 'un comentario',
        'Área': 'Área', 'Áreas': 'Áreas', 'Ambiente': 'Entorno', 'Desenvolvedor': 'Desarrollo',
        '· Desenvolvimento': '· Desarrollo',
        'Do conceito': 'Del concepto', 'ao build': 'a la versión final',
        'Deixe': 'Deja', 'um comentário': 'un comentario',
        'Comentários sobre o projeto': 'Comentarios del proyecto',
        'EXPERIÊNCIA VIRTUAL': 'EXPERIENCIA VIRTUAL', 'EXPERIÊNCIA DE MARCA': 'EXPERIENCIA DE MARCA',
        'Experiência virtual': 'Experiencia virtual', 'Experiência de vendas': 'Experiencia de venta',
        'Projetos de Game Design': 'Proyectos de diseño de videojuegos',
        'Entrega': 'Entrega', '· Direção de gameplay': '· Diseño de gameplay',
        'Espaço virtual do Meta in Rio': 'Espacio virtual de Meta in Rio',
        'Meta in Rio · visão do projeto': 'Meta in Rio · resumen del proyecto',
        'Meta in Rio · detalhe do ambiente': 'Meta in Rio · detalle del entorno',
        'Meta in Rio · cena do projeto': 'Meta in Rio · escena del proyecto',
        'Personagem correndo pelas ruas de Missão Mesquita': 'Personaje corriendo por las calles de Missão Mesquita',
        'Corrida pela cidade': 'Carrera por la ciudad', 'Desafio no percurso': 'Reto del recorrido',
        'Obstáculo na cidade': 'Obstáculo en la ciudad', 'Personagem na cidade': 'Personaje en la ciudad',
        'Carta especial': 'Carta especial', 'Tela de coleção': 'Pantalla de colección',
        'Tela de Missão Mesquita': 'Pantalla de Missão Mesquita', 'Gameplay de Missão Mesquita': 'Gameplay de Missão Mesquita',
        'Personagem no percurso': 'Personaje en el recorrido', 'Desafio do jogo': 'Reto del juego',
        'Gameplay em cidade': 'Gameplay en la ciudad', 'Personagem em movimento': 'Personaje en movimiento',
        'Cena de Missão Mesquita': 'Escena de Missão Mesquita', 'Obstáculo de Missão Mesquita': 'Obstáculo de Missão Mesquita',
        'Percurso do jogo': 'Recorrido del juego',
        'Tela de cartas do jogo': 'Pantalla de cartas del juego', 'Obstáculo e personagem': 'Obstáculo y personaje',
        'Rainbow Revenge: Recruit: ambiente': 'Rainbow Revenge: Recruit: entorno',
        'Rainbow Revenge: Recruit · visão do projeto': 'Rainbow Revenge: Recruit · resumen del proyecto',
        'Rainbow Revenge: Recruit · detalhe do ambiente': 'Rainbow Revenge: Recruit · detalle del entorno',
        'Rainbow Revenge: Recruit · cena do projeto': 'Rainbow Revenge: Recruit · escena del proyecto',
        "Cena de Annie's Sweet Nightmares": "Escena de Annie's Sweet Nightmares",
        "Annie's Sweet Nightmares: ambiente": "Annie's Sweet Nightmares: entorno",
        "Annie's Sweet Nightmares · visão do projeto": "Annie's Sweet Nightmares · resumen del proyecto",
        "Annie's Sweet Nightmares · detalhe do ambiente": "Annie's Sweet Nightmares · detalle del entorno",
        "Annie's Sweet Nightmares · cena do projeto": "Annie's Sweet Nightmares · escena del proyecto",
        'Espaço virtual do WhiteRoom Market': 'Espacio virtual de WhiteRoom Market',
        'WhiteRoom Market: ambiente': 'WhiteRoom Market: entorno',
        'WhiteRoom Market · visão do projeto': 'WhiteRoom Market · resumen del proyecto',
        'WhiteRoom Market · detalhe do ambiente': 'WhiteRoom Market · detalle del entorno',
        'WhiteRoom Market · cena do projeto': 'WhiteRoom Market · escena del proyecto',
        'Ilha da GreenCoding Experience': 'Isla de GreenCoding Experience',
        'GreenCoding Experience: ambiente': 'GreenCoding Experience: entorno',
        'GreenCoding Experience · visão do projeto': 'GreenCoding Experience · resumen del proyecto',
        'GreenCoding Experience · detalhe do ambiente': 'GreenCoding Experience · detalle del entorno',
        'GreenCoding Experience · cena do projeto': 'GreenCoding Experience · escena del proyecto',
        'Name *': 'Nombre *', 'Message *': 'Comentario *',
        'As imagens registram diferentes Áreas e momentos do ambiente virtual da GreenCoding Experience.': 'Las imágenes muestran distintas áreas y momentos del entorno virtual de GreenCoding Experience.',
        'Missão Mesquita é um projeto de jogo criado a partir da ideia de atravessar uma cidade viva, colorida e cheia de possibilidades. A experiência coloca o jogador em movimento constante, combinando corrida, reação e exploração em um cenário urbano estilizado.': 'Missão Mesquita es un juego basado en recorrer una ciudad viva, colorida y llena de posibilidades. El jugador se mantiene en movimiento, combinando carreras, reflejos y exploración en un entorno urbano estilizado.',
        'Ao longo do percurso, o jogador encontra obstáculos, personagens e elementos colecionáveis que ajudam a construir a identidade do mundo. As cartas e telas de coleção ampliam essa proposta, trazendo uma camada de descoberta para além do caminho principal.': 'Durante el recorrido, el jugador encuentra obstáculos, personajes y objetos coleccionables que dan identidad al mundo. Las cartas y pantallas de colección añaden descubrimientos más allá del camino principal.',
        'O projeto busca uma leitura simples e direta: o jogador entende rapidamente que precisa avançar, desviar e reagir, mas encontra espaço para melhorar seu desempenho a cada tentativa. Essa combinação entre acessibilidade e repetição é parte central da experiência.': 'El juego busca una lectura clara: el jugador entiende rápidamente que debe avanzar, esquivar y reaccionar, y puede mejorar su rendimiento en cada intento. Este equilibrio entre accesibilidad y repetición es central en la experiencia.',
        'Visualmente, Missão Mesquita mistura uma cidade reconhecível com personagens e interfaces de cores marcantes. O resultado é uma apresentação leve e própria, que aproxima o jogo de uma experiência casual sem abandonar a sensação de progressão.': 'Visualmente, Missão Mesquita combina una ciudad reconocible con personajes e interfaces coloridos. El resultado es una presentación propia y accesible, cercana a una experiencia casual sin perder la sensación de progresión.',
        'Jogar Missão Mesquita': 'Jugar Missão Mesquita', 'Minha contribuição esteve na construção da experiência jogável, conectando as decisões de gameplay, a organização do projeto e a preparação da versão para navegador.': 'Mi contribución se centró en construir la experiencia jugable, conectando las decisiones de gameplay con la organización del proyecto y la preparación de la versión para navegador.',
        'Estruturação do loop principal e dos comandos que sustentam a corrida.': 'Diseño del ciclo principal y los controles que sostienen la carrera.',
        'Organização da experiência para comunicar objetivo e ritmo sem excesso de texto.': 'Organización de la experiencia para comunicar objetivos y ritmo sin exceso de texto.',
        'Preparação da versão jogável para navegador e integração ao portfólio.': 'Preparación de la versión para navegador e integración en el portafolio.',
        'Missão Mesquita foi uma oportunidade de experimentar como um sistema simples de movimento pode sustentar uma experiência completa. A cidade, os obstáculos e as cartas foram pensados para dar ao jogador motivos diferentes para continuar explorando.': 'Missão Mesquita fue una oportunidad para explorar cómo un sistema sencillo de movimiento puede sostener una experiencia completa. La ciudad, los obstáculos y las cartas ofrecen distintos motivos para seguir explorando.',
        'O projeto também serviu como espaço para testar ritmo, leitura visual e progressão em uma experiência jogável para navegador.': 'El proyecto también permitió probar el ritmo, la lectura visual y la progresión en una experiencia jugable desde el navegador.',
        'Conheça Richard Mendonça, profissional de desenvolvimento de jogos, game design e gerenciamento de projetos interativos.': 'Conoce a Richard Mendonça, profesional del desarrollo de videojuegos, diseño de juegos y gestión de proyectos interactivos.',
        'Experimente jogos e projetos WebGL de Richard Mendonça diretamente no portfólio.': 'Prueba videojuegos y proyectos WebGL de Richard Mendonça directamente en el portafolio.',
        'Galeria de imagens de jogos e experiências digitais de Richard Mendonça.': 'Galería de imágenes de videojuegos y experiencias digitales de Richard Mendonça.',
        'Ferramentas, tecnologias e outras informações sobre o trabalho de Richard Mendonça.': 'Herramientas, tecnologías y más información sobre el trabajo de Richard Mendonça.',
        'Biografia · Richard Mendonça': 'Biografía · Richard Mendonça',
        'Ideias que ganham vida': 'Ideas que cobran vida',
        'quando a gente joga.': 'cuando jugamos.',
        'Sou Richard Mendonça, profissional de desenvolvimento de jogos, Game Design e gerenciamento de projetos. Gosto de transformar boas ideias em experiências interativas, unindo criatividade, tecnologia e colaboração.': 'Soy Richard Mendonça y trabajo en desarrollo de videojuegos, diseño de juegos y gestión de proyectos. Me gusta convertir buenas ideas en experiencias interactivas, combinando creatividad, tecnología y colaboración.',
        'Ao longo do meu trabalho, participei de jogos e experiências digitais para diferentes plataformas — de mundos virtuais a projetos WebGL. Cada projeto é uma oportunidade de aprender, experimentar e construir algo que as pessoas possam explorar.': 'He trabajado en videojuegos y experiencias digitales para distintas plataformas, desde mundos virtuales hasta proyectos WebGL. Cada proyecto es una oportunidad para aprender, experimentar y crear algo que las personas puedan explorar.',
        'Imagens de projetos autorais e colaborativos. Este espaço também pode receber fotos pessoais e dos bastidores.': 'Imágenes de proyectos propios y colaborativos. Este espacio también puede incluir fotos personales y del proceso creativo.',
        'Game Design e desenvolvimento': 'Diseño y desarrollo de videojuegos',
        'Experiências virtuais': 'Experiencias virtuales', 'Projetos imersivos': 'Proyectos inmersivos',
        'Como trabalho': 'Cómo trabajo',
        'Do primeiro esboço à experiência pronta para jogar.': 'Del primer boceto a una experiencia lista para jugar.',
        '01 · CRIAR': '01 · CREAR', '02 · CONSTRUIR': '02 · CONSTRUIR', '03 · COLABORAR': '03 · COLABORAR',
        'Imaginar com propósito': 'Imaginar con propósito',
        'Exploro conceitos, mecânicas e formas de interação para dar identidade e direção a cada experiência.': 'Exploro conceptos, mecánicas e interacciones para dar identidad y dirección a cada experiencia.',
        'Prototipar e desenvolver': 'Prototipar y desarrollar',
        'Transformo ideias em protótipos e sistemas jogáveis, aproximando design e implementação.': 'Convierto ideas en prototipos y sistemas jugables, conectando diseño e implementación.',
        'Fazer acontecer em equipe': 'Hacerlo realidad en equipo',
        'Organizo prioridades e conecto pessoas para que projetos criativos avancem com clareza.': 'Organizo prioridades y conecto personas para que los proyectos creativos avancen con claridad.',
        'Um portfólio em construção': 'Un portafolio en construcción',
        'Cada projeto conta um pedaço da história.': 'Cada proyecto cuenta una parte de la historia.',
        'Explore os trabalhos de desenvolvimento, Game Design e gerenciamento para conhecer diferentes desafios, ideias e mundos que ajudei a criar.': 'Explora proyectos de desarrollo, diseño de juegos y gestión para descubrir distintos retos, ideas y mundos que ayudé a crear.',
        'Continue explorando': 'Sigue explorando',
        'Experimente os projetos jogáveis': 'Prueba los proyectos jugables',
        'veja imagens dos projetos': 'explora imágenes de los proyectos',
        'Jogáveis · WebGL': 'Jugables · WebGL',
        'Escolha um projeto.': 'Elige un proyecto.',
        'Entre no jogo.': 'Entra al juego.',
        'Selecione uma das demos WebGL para carregá-la no player. O jogo só começa a carregar depois que você escolher um projeto.': 'Selecciona una demo WebGL para cargarla en el reproductor. El juego solo empezará a cargar cuando elijas un proyecto.',
        'Projetos jogáveis': 'Proyectos jugables', 'Escolha uma demo': 'Elige una demo',
        'Corrida · exploração · WebGL': 'Carreras · exploración · WebGL',
        'Ação e aventura · WebGL': 'Acción y aventura · WebGL',
        'Mais demos em breve': 'Próximamente más demos',
        'Este espaço foi preparado para adicionar outros projetos WebGL ao player.': 'Este espacio está preparado para añadir más proyectos WebGL al reproductor.',
        'Seu próximo jogo começa aqui': 'Tu próximo juego empieza aquí',
        'Escolha uma demo na lista para abrir o player nesta área.': 'Elige una demo de la lista para abrir el reproductor aquí.',
        'Escolha um projeto para iniciar a demo.': 'Elige un proyecto para iniciar la demo.',
        'Carregando a demo. O tempo pode variar conforme sua conexão.': 'Cargando la demo. El tiempo puede variar según tu conexión.',
        'Demo iniciada. Clique ou toque na área do jogo para interagir.': 'Demo iniciada. Haz clic o toca el área del juego para interactuar.',
        'Fechar demo': 'Cerrar demo',
        'As demos WebGL precisam ser abertas por um servidor HTTP/HTTPS e podem levar alguns instantes para carregar.': 'Las demos WebGL deben servirse mediante HTTP/HTTPS y pueden tardar unos instantes en cargar.',
        'Galeria · imagens dos projetos': 'Galería · imágenes de los proyectos',
        'Mundos, personagens': 'Mundos, personajes',
        'e momentos.': 'y momentos.',
        'Uma seleção visual dos jogos e experiências digitais que fazem parte do portfólio. Escolha uma imagem para destacá-la no carrossel.': 'Una selección visual de videojuegos y experiencias digitales del portafolio. Elige una imagen para destacarla en el carrusel.',
        'Explore a seleção': 'Explora la selección',
        'Imagem anterior': 'Imagen anterior', 'Próxima imagem': 'Imagen siguiente',
        'Escolha uma imagem': 'Elige una imagen',
        'Mais imagens': 'Más imágenes',
        'Veja de perto cada projeto.': 'Descubre cada proyecto de cerca.',
        'Missão Mesquita · corrida pela cidade': 'Missão Mesquita · carrera por la ciudad',
        'Missão Mesquita · cenário urbano': 'Missão Mesquita · entorno urbano',
        'Meta in Rio · cenário virtual': 'Meta in Rio · escenario virtual',
        'Meta in Rio · espaço de encontro': 'Meta in Rio · espacio de encuentro',
        'GreenCoding · experiência imersiva': 'GreenCoding · experiencia inmersiva',
        'GreenCoding · ilha virtual': 'GreenCoding · isla virtual',
        'WhiteRoom Market · ambiente de vendas': 'WhiteRoom Market · entorno de venta',
        'WhiteRoom Market · experiência virtual': 'WhiteRoom Market · experiencia virtual',
        'Rainbow Revenge · cena de ação': 'Rainbow Revenge · escena de acción',
        'Rainbow Revenge · personagens': 'Rainbow Revenge · personajes',
        'Annie’s Sweet Nightmares · gameplay': "Annie's Sweet Nightmares · gameplay",
        'Annie’s Sweet Nightmares · ambiente': "Annie's Sweet Nightmares · entorno",
        'Vaccine Race · gameplay': 'Vaccine Race · gameplay',
        'Vaccine Race · percurso': 'Vaccine Race · recorrido',
        'Missão Mesquita · itens e percurso': 'Missão Mesquita · objetos y recorrido',
        'Meta in Rio · detalhes do espaço': 'Meta in Rio · detalles del espacio',
        'GreenCoding · exploração da ilha': 'GreenCoding · exploración de la isla',
        'WhiteRoom Market · realidade mista': 'WhiteRoom Market · realidad mixta',
        'Personagem de Missão Mesquita correndo por uma rua da cidade': 'Personaje de Missão Mesquita corriendo por una calle de la ciudad',
        'Cena de Missão Mesquita em uma área urbana': 'Escena de Missão Mesquita en una zona urbana',
        'Cenário virtual de Meta in Rio': 'Entorno virtual de Meta in Rio',
        'Espaço de encontro virtual em Meta in Rio': 'Espacio virtual de encuentro en Meta in Rio',
        'Cena de GreenCoding Experience em realidade virtual': 'Escena de realidad virtual de GreenCoding Experience',
        'Paisagem da ilha de GreenCoding Experience': 'Paisaje de la isla de GreenCoding Experience',
        'Interior de WhiteRoom Market': 'Interior de WhiteRoom Market',
        'Experiência virtual WhiteRoom Market': 'Experiencia virtual de WhiteRoom Market',
        'Cena de ação de Rainbow Revenge: Recruit': 'Escena de acción de Rainbow Revenge: Recruit',
        'Personagem em Rainbow Revenge: Recruit': 'Personaje de Rainbow Revenge: Recruit',
        'Cena de Annie’s Sweet Nightmares': "Escena de Annie's Sweet Nightmares",
        'Ambiente de Annie’s Sweet Nightmares': "Entorno de Annie's Sweet Nightmares",
        'Cena de Vaccine Race': 'Escena de Vaccine Race',
        'Outra cena de Vaccine Race': 'Otra escena de Vaccine Race',
        'Espaço de realidade mista do WhiteRoom Market': 'Espacio de realidad mixta de WhiteRoom Market',
        'Missão Mesquita: personagem correndo': 'Missão Mesquita: personaje corriendo',
        'Missão Mesquita: cenário urbano': 'Missão Mesquita: entorno urbano',
        'Espaço virtual de Meta in Rio': 'Espacio virtual de Meta in Rio',
        'GreenCoding Experience em realidade virtual': 'GreenCoding Experience en realidad virtual',
        'Ilha virtual de GreenCoding Experience': 'Isla virtual de GreenCoding Experience',
        'Ambiente de WhiteRoom Market': 'Entorno de WhiteRoom Market',
        'Experiência WhiteRoom Market': 'Experiencia WhiteRoom Market',
        'Rainbow Revenge: Recruit em ação': 'Rainbow Revenge: Recruit en acción',
        'Personagem de Rainbow Revenge': 'Personaje de Rainbow Revenge',
        'Gameplay de Annie’s Sweet Nightmares': "Gameplay de Annie's Sweet Nightmares",
        'Ambiente de Annie’s Sweet Nightmares': "Entorno de Annie's Sweet Nightmares",
        'Gameplay de Vaccine Race': 'Gameplay de Vaccine Race',
        'Percurso de Vaccine Race': 'Recorrido de Vaccine Race',
        'Extra · ferramentas e referências': 'Extra · herramientas y referencias',
        'O que uso para': 'Lo que uso para',
        'dar forma às ideias.': 'dar forma a las ideas.',
        'Uma seleção de ferramentas e tecnologias presentes no meu processo de desenvolvimento, prototipagem e criação de experiências interativas.': 'Una selección de herramientas y tecnologías que forman parte de mi proceso de desarrollo, prototipado y creación de experiencias interactivas.',
        'Ferramentas e tecnologias': 'Herramientas y tecnologías',
        'Game engine': 'Motor de videojuegos', 'Web': 'Web', 'Prototipagem': 'Prototipado',
        '3D para web': '3D para la web', 'Abrir menu': 'Abrir menú',
        'Carrossel de imagens': 'Carrusel de imágenes',
        'Desenvolvimento de jogos, protótipos e experiências interativas.': 'Desarrollo de videojuegos, prototipos y experiencias interactivas.',
        'Lógica de gameplay, sistemas e ferramentas para projetos digitais.': 'Lógica de gameplay, sistemas y herramientas para proyectos digitales.',
        'Interações e experiências para navegadores e plataformas web.': 'Interacciones y experiencias para navegadores y plataformas web.',
        'Criação e exploração de ambientes e experiências em tempo real.': 'Creación y exploración de entornos y experiencias en tiempo real.',
        'Um ambiente flexível para construir, testar e iterar projetos.': 'Un entorno flexible para crear, probar e iterar proyectos.',
        'Possibilidades de visualização e experiências tridimensionais no navegador.': 'Visualización y experiencias tridimensionales en el navegador.',
        'Explore mais': 'Explora más',
        'experimente as demos WebGL': 'prueba las demos WebGL',
        'Ferramentas são parte da jornada — os projetos mostram o resultado.': 'Las herramientas son parte del camino; los proyectos muestran el resultado.',
        'Veja os projetos de desenvolvimento': 'Descubre los proyectos de desarrollo',
        'ou': 'o', 'Player de jogos WebGL': 'Reproductor de juegos WebGL',
        'Equipe do projeto': 'Equipo del proyecto', 'Elementos da experiência': 'Elementos de la experiencia'
    }
};

function translateHtml(html, dictionary) {
    const translateValue = value => Object.prototype.hasOwnProperty.call(dictionary, value) ? dictionary[value] : value;

    html = html.replace(/>([^<>]+)</g, (match, content) => {
        const leading = content.match(/^\s*/)[0];
        const trailing = content.match(/\s*$/)[0];
        const text = content.trim();
        const translated = translateValue(text);
        return translated === text ? match : `>${leading}${translated}${trailing}<`;
    });

    return html.replace(/\b(alt|title|aria-label|placeholder|content|data-game-[\w-]+)="([^"]*)"/g, (match, attribute, value) => {
        const translated = translateValue(value);
        return translated === value ? match : `${attribute}="${translated}"`;
    });
}

function addSwitcher(html, locale, route, outputPath) {
    const languageNames = ['pt', 'en', 'es'];
    const ariaLabel = { pt: 'Selecionar idioma', en: 'Select language', es: 'Seleccionar idioma' }[locale];
    html = removeSwitcherItems(html);
    const options = languageNames.map(language => {
        const target = language === 'pt' ? route : path.posix.join(language, route);
        const href = path.posix.relative(path.posix.dirname(outputPath), target).replace(/\\/g, '/');
        const lang = language === 'pt' ? 'pt-BR' : language;
        return language === locale
            ? `<span lang="${lang}" aria-current="page">${language.toUpperCase()}</span>`
            : `<a href="${href}" lang="${lang}" data-language-route="${language}" aria-label="${{ pt: 'Português', en: 'English', es: 'Español' }[language]}">${language.toUpperCase()}</a>`;
    }).join('<span class="language-switcher-separator" aria-hidden="true">|</span>');
    const switcher = `<div class="language-switcher" role="group" aria-label="${ariaLabel}">${options}</div>`;
    const navContainer = /(<nav\b[^>]*>[\s\S]*?<div class="container">)/;
    if (!navContainer.test(html)) throw new Error(`Navbar container not found in ${outputPath}`);
    html = html.replace(navContainer, `$1\n                ${switcher}`);

    const rootRelative = path.posix.relative(path.posix.dirname(outputPath), '.').replace(/\\/g, '/');
    const rootPath = rootRelative ? `${rootRelative.replace(/\/?$/, '/')}` : './';
    html = html.replace(/src="(?:\.\.\/|\.\/)*assets\/js\/goodgames-init\.min\.js"/g, `src="${rootPath}assets/js/goodgames-init.js"`);
    html = html.replace(/<body([^>]*)>/, (match, attributes) => {
        attributes = attributes.replace(/\sdata-site-root="[^"]*"/g, '').replace(/\sdata-site-route="[^"]*"/g, '');
        return `<body${attributes} data-site-root="${rootPath}" data-site-route="${route}">`;
    });
    if (!html.includes('language-switcher.js')) {
        const scriptPath = `${rootPath}assets/js/language-switcher.js`;
        html = html.replace('</body>', `    <script src="${scriptPath}"></script>\n</body>`);
    }
    return html;
}

function removeSwitcherItems(html) {
    const opening = '<li class="nk-drop-item language-switcher">';
    let start = html.indexOf(opening);

    while (start !== -1) {
        const tokens = /<\/?li\b[^>]*>/g;
        tokens.lastIndex = start;
        let depth = 0;
        let token;
        let end = -1;

        while ((token = tokens.exec(html))) {
            if (token[0].startsWith('</')) {
                depth--;
                if (depth === 0) {
                    end = tokens.lastIndex;
                    break;
                }
            } else {
                depth++;
            }
        }

        if (end === -1) throw new Error('Unclosed language switcher list item');
        html = html.slice(0, start) + html.slice(end);
        start = html.indexOf(opening);
    }

    return html.replace(/\s*<div class="language-switcher"[^>]*>[\s\S]*?<\/div>/g, '');
}

function addAlternates(html, route, outputPath) {
    const links = ['pt', 'en', 'es'].map(locale => {
        const target = locale === 'pt' ? route : path.posix.join(locale, route);
        const href = path.posix.relative(path.posix.dirname(outputPath), target).replace(/\\/g, '/');
        const lang = locale === 'pt' ? 'pt-BR' : locale;
        return `    <link rel="alternate" hreflang="${lang}" href="${href}">`;
    }).join('\n');

    html = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, '');
    return html.replace('</head>', `${links}\n</head>`);
}

function addHomeSocialMetadata(html, locale, outputPath) {
    const baseUrl = 'https://snozeylx.github.io/MyPortfolio/';
    const localePrefix = locale === 'pt' ? '' : `${locale}/`;
    const pageUrl = new URL(localePrefix, baseUrl).href;
    const imageUrl = `${baseUrl}assets/images/infinitymesquita/Captura%20de%20tela%202026-09-03%20003027.png`;
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
    const imageAlt = {
        pt: 'Missão Mesquita, jogo desenvolvido por Richard Mendonça',
        en: 'Missão Mesquita, a game by Richard Mendonça',
        es: 'Missão Mesquita, un videojuego de Richard Mendonça'
    }[locale];
    if (!title || !description) throw new Error(`Home page title or description not found in ${outputPath}`);

    const metadata = [
        `<meta property="og:type" content="website">`,
        `<meta property="og:site_name" content="Richard Mendonça">`,
        `<meta property="og:title" content="${title}">`,
        `<meta property="og:description" content="${description}">`,
        `<meta property="og:url" content="${pageUrl}">`,
        `<meta property="og:image" content="${imageUrl}">`,
        '<meta property="og:image:width" content="998">',
        '<meta property="og:image:height" content="633">',
        `<meta property="og:image:alt" content="${imageAlt}">`,
        '<meta name="twitter:card" content="summary_large_image">'
    ].join('\n    ');
    html = html.replace(/\s*<meta (?:property="og:[^"]+"|name="twitter:card")[^>]*>/g, '');
    return html.replace('</head>', `    ${metadata}\n</head>`);
}

function wirePortuguesePage(route) {
    let html = fs.readFileSync(route, 'utf8');
    html = html.replace(/\.\.\/https:\/\//g, 'https://');
    html = restoreLegacyMenuItems(html);
    html = wirePortfolioNavigation(wireStaticNavigation(html, route, 'pt'), route, 'pt');
    html = wireSectionPageLinks(html, route, 'pt');
    if (route === 'gamedesign/missaomesquita.html') {
        html = html.replace(/\s*<a class="nk-btn nk-btn-rounded nk-btn-color-main-1 nk-btn-hover-color-white" href="\.\.\/webgl\/GameMesquita\/index\.html"[^>]*>[\s\S]*?<\/a>/, '');
    }
    if (route === 'desenvolvedor/index.html') {
        html = html.replace(/href="forum\.html"/g, 'href="whiteroom.html"')
            .replace(/href="forum-single-topic\.html"/g, 'href="annie.html"');
    }
    if (route === 'gamedesign/index.html') {
        html = html.replace('href="whiteroom.html"', 'href="../desenvolvedor/whiteroom.html"')
            .replace('href="annie.html"', 'href="../desenvolvedor/annie.html"');
    }
    html = html.replace('<a href="../gamedesign/index.html">Missão Mesquita</a>', '<a href="../gamedesign/missaomesquita.html">Missão Mesquita</a>');
    html = html.replace('<a href="../gamedesign/index.html">MetainRio</a>', '<a href="../gamedesign/metainrio.html">Meta in Rio</a>');
    html = html.replace(/<span><span class="text-main-1">(?:Top 3|Destaques)<\/span> Recent<\/span>/g, '<span><span class="text-main-1">Destaques</span> do projeto</span>')
        .replace(/<span><span class="text-main-1">(?:Latest|Galeria)<\/span> Screenshots<\/span>/g, '<span><span class="text-main-1">Galeria</span> de imagens</span>')
        .replace(/<span><span class="text-main-1">Latest<\/span> Screenshots<\/span>/g, '<span><span class="text-main-1">Galeria</span> de imagens</span>')
        .replace(/>Leave a Reply<\/h3>/g, '>Deixe um comentário</h3>')
        .replace('Leave</span> a Reply', 'Deixe</span> um comentário')
        .replace(/>Post Comment<\/button>/g, '>Enviar comentário</button>');
    html = addSwitcher(html, 'pt', route, route);
    html = addAlternates(html, route, route);
    fs.writeFileSync(route, html, 'utf8');
}

function findDivBlock(html, start) {
    const tokens = /<\/?div\b[^>]*>/g;
    tokens.lastIndex = start;
    let depth = 0;
    let token;
    while ((token = tokens.exec(html))) {
        depth += token[0].startsWith('</') ? -1 : 1;
        if (depth === 0) return [start, tokens.lastIndex];
    }
    throw new Error(`Unclosed div starting at offset ${start}`);
}

function replaceProjectBlock(html, type, imagePath, project, searchFrom = 0) {
    const imageIndex = html.indexOf(imagePath, searchFrom);
    if (imageIndex === -1) throw new Error(`Project image not found: ${imagePath}`);
    const openingDivs = /<div\b[^>]*>/g;
    let start = -1;
    let openingDiv;
    while ((openingDiv = openingDivs.exec(html)) && openingDiv.index < imageIndex) {
        const classes = openingDiv[0].match(/\bclass="([^"]*)"/);
        if (classes && classes[1].split(/\s+/).includes(type)) start = openingDiv.index;
    }
    if (start === -1) throw new Error(`Project block not found for ${imagePath}`);
    const [blockStart, blockEnd] = findDivBlock(html, start);
    let block = html.slice(blockStart, blockEnd);
    block = block.replace(/(<img\b[^>]*\balt=")[^"]*(")/g, `$1${project.title}$2`)
        .replace(/(<h[23]\b[^>]*>)([\s\S]*?)(<\/h[23]>)/, `$1${project.title}$3`)
        .replace(/<p>[\s\S]*?<\/p>/, `<p>${project.description}</p>`)
        .replace(/<span class="bg-main-\d+">[^<]*<\/span>/, `<span class="bg-main-4">${project.category}</span>`)
        .replace(/\bhref="[^"]*"/g, `href="${project.href}"`);
    return html.slice(0, blockStart) + block + html.slice(blockEnd);
}

function wirePortugueseHome() {
    let html = fs.readFileSync('index.html', 'utf8');
    const projects = [
        { image: 'assets/images/annie/news-thumb.jpg', title: "Annie’s Sweet Nightmares", category: 'Jogo cooperativo', description: 'Annie’s Sweet Nightmares é um jogo cooperativo em que os jogadores protegem a casa de Annie usando armadilhas para impedir a chegada dos ursos.', href: 'desenvolvedor/annie.html' },
        { image: 'assets/images/greencoding/news-thumb.jpg', title: 'GreenCoding Experience', category: 'Realidade virtual', description: 'GreenCoding Experience é uma experiência de realidade virtual para Meta Quest 2 em que as escolhas do jogador transformam gradualmente uma ilha.', href: 'gestao/greencoding.html' },
        { image: 'assets/images/metainrio/news-thumb.jpg', title: 'Meta in Rio', category: 'Experiência virtual', description: 'Meta in Rio é um espaço virtual criado com o Disque Denúncia para receber o podcast da Dora e reunir seus participantes.', href: 'gamedesign/metainrio.html' },
        { image: 'assets/images/salabranca/news-thumb.jpg', title: 'WhiteRoom Market', category: 'Realidade mista', description: 'WhiteRoom Market é uma experiência de vendas em realidade mista que conecta marcas, um espaço virtual e um ambiente físico.', href: 'desenvolvedor/whiteroom.html' },
        { image: 'assets/images/vacinerace/news-thumb.jpg', title: 'Vaccine Race', category: 'Jogo educativo', description: 'Vaccine Race é um jogo interativo que transforma a corrida pela vacinação em uma experiência de gameplay.', href: 'elements.html' },
        { image: 'assets/images/rainbowrevenge/news-thumb.jpg', title: 'Rainbow Revenge: Recruit', category: 'Ação e aventura', description: 'Rainbow Revenge: Recruit é uma aventura de ação em 3D sobre um esquadrão espacial que defende a Terra do Koala Squad.', href: 'gamedesign/rainbowrevenge.html' }
    ];
    for (const project of projects) {
        const newsStart = html.indexOf('<div class="nk-news-box-list">');
        html = replaceProjectBlock(html, 'nk-news-box-item', project.image, project, newsStart);
    }

    const posts = [
        { image: 'assets/images/metainrio/2.jpg', title: 'Meta in Rio', description: 'Meta in Rio é um espaço virtual criado com o Disque Denúncia para receber o podcast da Dora e reunir seus participantes.', href: 'gamedesign/metainrio.html' },
        { image: 'assets/images/annie/10.jpg', title: "Annie’s Sweet Nightmares", description: 'Annie’s Sweet Nightmares é um jogo cooperativo em que os jogadores protegem a casa de Annie usando armadilhas para impedir a chegada dos ursos.', href: 'desenvolvedor/annie.html' }
    ];
    for (const post of posts) {
        const postsStart = html.indexOf('<div class="nk-blog-grid">');
        html = replaceProjectBlock(html, 'nk-blog-post', post.image, { ...post, category: 'Projeto' }, postsStart);
    }

    html = html.replace(/<html lang="[^"]*">/, '<html lang="pt-BR">')
        .replace(/<title>[^<]*<\/title>/, '<title>Richard Mendonça | Desenvolvimento de jogos e Game Design</title>')
        .replace(/(<meta name="description" content=")[^"]*(")/, '$1Portfólio de Richard Mendonça: desenvolvimento de jogos, game design e gerenciamento de projetos interativos.$2')
        .replace(/(<meta name="keywords" content=")[^"]*(")/, '$1desenvolvimento de jogos, game design, gerenciamento de projetos$2')
        .replace(/href="elements\.html"/g, 'href="#"')
        .replace(/<img src="assets\/images\/logonome\/logoMag1\.1\.png" alt="[^"]*"/g, '<img src="assets/images/logonome/logoMag1.1.png" alt="Richard Mendonça"')
        .replace('<h3 class="nk-decorated-h-2"><span><span class="text-main-1">PRÉ</span>VIA</span></h3>', '<h3 class="nk-decorated-h-2"><span>Projetos em destaque</span></h3>')
        .replace('<h3 class="nk-decorated-h-2"><span><span class="text-main-1">Ultimas </span>Noticias</span></h3>', '<h3 class="nk-decorated-h-2"><span>Projetos em destaque</span></h3>')
        .replace('<h2 class="nk-decorated-h-2 h3"><span><span class="text-main-1">Latest</span> Pictures</span></h2>', '<h2 class="nk-decorated-h-2 h3"><span><span class="text-main-1">Galeria</span> de imagens</span></h2>')
        .replace('<h3 class="nk-feature-title"><a href="#">Game DevOps</a></h3>', '<h3 class="nk-feature-title"><a href="gestao/index.html">Gestão de projetos</a></h3>')
        .replace('<h3 class="nk-feature-title"><a href="#">Desenvolvedor</a></h3>', '<h3 class="nk-feature-title"><a href="desenvolvedor/index.html">Desenvolvedor</a></h3>')
        .replace('<h3 class="nk-feature-title"><a href="#">Game Design</a></h3>', '<h3 class="nk-feature-title"><a href="gamedesign/index.html">Game Design</a></h3>')
        .replace('<h4 class="nk-feature-title text-main-1"><a href="#">Ver Jogos</a></h4>', '<h4 class="nk-feature-title text-main-1"><a href="desenvolvedor/index.html">Ver projetos</a></h4>')
        .replace('<h4 class="nk-feature-title text-main-1"><a href="#">Ver Jogos</a></h4>', '<h4 class="nk-feature-title text-main-1"><a href="gamedesign/index.html">Ver projetos</a></h4>')
        .replace('<h4 class="nk-feature-title text-main-1"><a href="#">Ver Jogos</a></h4>', '<h4 class="nk-feature-title text-main-1"><a href="gestao/index.html">Ver projetos</a></h4>')
        .replace('<h4 class="nk-widget-title"><span><span class="text-main-1">Top </span> 3</span></h4>', '<h4 class="nk-widget-title"><span>Projetos em destaque</span></h4>')
        .replace('<a href="blog-article.html">GreenCoding Exprerience</a>', '<a href="gestao/greencoding.html">GreenCoding Experience</a>')
        .replace('<a href="blog-article.html">Meta in Rio</a>', '<a href="gamedesign/metainrio.html">Meta in Rio</a>')
        .replace('<a href="blog-article.html">Rainbow Revenge: Recruit</a>', '<a href="gamedesign/rainbowrevenge.html">Rainbow Revenge: Recruit</a>')
        .replace(/Jogaveis/g, 'Jogáveis')
        .replace(/Smell magic in the air\. Or maybe barbecue/g, 'Annie’s Sweet Nightmares')
        .replace(/Grab your sword and fight the Horde/g, 'GreenCoding Experience')
        .replace(/We found a witch! May we burn her\?/g, 'Meta in Rio')
        .replace(/For good, too though, in consequence/g, 'WhiteRoom Market')
        .replace(/He made his passenger captain of one/g, 'Vaccine Race')
        .replace(/At first, for some time, I was not able to answer/g, 'Rainbow Revenge: Recruit')
        .replace(/>Called Let<\/h4>/g, '>Meta in Rio</h4>')
        .replace(/(<div class="nk-gallery-item-description">\s*<h4>Meta in Rio<\/h4>)[\s\S]*?(?=\s*<\/div>)/, '$1Imagem do ambiente virtual criado para receber o podcast da Dora.')
        .replace(/<div class="nk-gallery-item-description">\s*Seed open[\s\S]*?<\/div>/, '<div class="nk-gallery-item-description">WhiteRoom Market: produtos e marcas em um ambiente de realidade mista.</div>')
        .replace('<img src="assets/images/metainrio/pic-thumb.jpg" alt="">', '<img src="assets/images/metainrio/pic-thumb.jpg" alt="Espaço virtual de Meta in Rio">')
        .replace('<img src="assets/images/salabranca/pic-thumb.jpg" alt="">', '<img src="assets/images/salabranca/pic-thumb.jpg" alt="WhiteRoom Market em realidade mista">')
        .replace('<img src="assets/images/rainbowrevenge/pic-thumb.jpg" alt="">', '<img src="assets/images/rainbowrevenge/pic-thumb.jpg" alt="Cena de Rainbow Revenge: Recruit">')
        .replace('<img src="assets/images/rainbowrevenge/pic-thumb2.jpg" alt="">', '<img src="assets/images/rainbowrevenge/pic-thumb2.jpg" alt="Personagem de Rainbow Revenge: Recruit">')
        .replace('<img src="assets/images/annie/pic-thumb.jpg" alt="">', '<img src="assets/images/annie/pic-thumb.jpg" alt="Cena de Annie’s Sweet Nightmares">')
        .replace('<img src="assets/images/greencoding/pic-thumb.jpg" alt="">', '<img src="assets/images/greencoding/pic-thumb.jpg" alt="Ilha de GreenCoding Experience">')
        .replace('<img src="assets/images/post-1.jpg" alt="">', '<img src="assets/images/annie/news-slide.jpg" alt="Annie’s Sweet Nightmares">')
        .replace('<span class="bg-main-4">MMO</span>', '<span class="bg-main-4">Jogo cooperativo</span>')
        .replace(/<p>This little wandering journey,[\s\S]*?<\/p>/g, '<p>O portfólio reúne jogos e experiências digitais de diferentes gêneros, com foco na criatividade e na interação.</p>')
        .replace(/<p>Just then her head struck[\s\S]*?<\/p>/g, '<p>O portfólio reúne jogos e experiências digitais de diferentes gêneros, com foco na criatividade e na interação.</p>')
        .replace(/<p>With what mingled joy[\s\S]*?<\/p>/g, '<p>Annie’s Sweet Nightmares é um jogo cooperativo em que os jogadores protegem a casa de Annie usando armadilhas para impedir a chegada dos ursos.</p>')
        .replace(/<p>For good, too; though,[\s\S]*?<\/p>/g, '<p>GreenCoding Experience é uma experiência de realidade virtual para Meta Quest 2 em que as escolhas do jogador transformam gradualmente uma ilha.</p>')
        .replace(/<p>And she went on planning[\s\S]*?<\/p>/g, '<p>Meta in Rio é um espaço virtual criado com o Disque Denúncia para receber o podcast da Dora e reunir seus participantes.</p>')
        .replace(/>Search<\/h4>/g, '>Buscar</h4>')
        .replace(/>Read More<\/a>/g, '>Saiba Mais</a>')
        .replace(/href="blog-article\.html"/g, 'href="desenvolvedor/annie.html"')
        .replace(/>Leave a Reply<\/h3>/g, '>Deixe um comentário</h3>')
        .replace('Leave</span> a Reply', 'Deixe</span> um comentário')
        .replace(/>Post Comment<\/button>/g, '>Enviar comentário</button>');
    html = html.replace(/(<h2 class="nk-post-title h4">Meta in Rio<\/h2>)[ \t]+/g, '$1')
        .replace(/(<h2 class="nk-post-title h4">Annie’s Sweet Nightmares<\/h2>)[ \t]+/g, '$1');

    html = wirePortfolioNavigation(wireStaticNavigation(html, 'index.html', 'pt'), 'index.html', 'pt');
    html = addHomeSocialMetadata(html, 'pt', 'index.html');
    html = addSwitcher(html, 'pt', 'index.html', 'index.html');
    html = addAlternates(html, 'index.html', 'index.html');
    fs.writeFileSync('index.html', html, 'utf8');
}

function wireStaticNavigation(html, outputPath, locale) {
    const pages = [
        { route: 'biografia.html', labels: ['Biografia', 'Biografía', 'About'], localized: { pt: 'Biografia', en: 'About', es: 'Biografía' } },
        { route: 'jogaveis.html', labels: ['Jogaveis', 'Jogáveis', 'Playable games', 'Juegos jugables'], localized: { pt: 'Jogáveis', en: 'Playable games', es: 'Juegos jugables' } },
        { route: 'galeria.html', labels: ['Galeria', 'Gallery', 'Galería', 'Project'], localized: { pt: 'Galeria', en: 'Gallery', es: 'Galería' } },
        { route: 'extra.html', labels: ['Extra', 'More', 'Más'], localized: { pt: 'Extra', en: 'Extra', es: 'Más' } }
    ];

    for (const page of pages) {
        const target = locale === 'pt' ? page.route : path.posix.join(locale, page.route);
        const href = path.posix.relative(path.posix.dirname(outputPath), target).replace(/\\/g, '/');
        const labelPattern = page.labels.map(label => label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
        const pattern = new RegExp(`<li\\b[^>]*>\\s*<a\\b[^>]*>\\s*(?:${labelPattern})\\s*<\\/a>\\s*<\\/li>`, 'g');
        html = html.replace(pattern, `<li><a href="${href}">${page.localized[locale]}</a></li>`);
    }
    return html;
}

function wirePortfolioNavigation(html, outputPath, locale) {
    const labels = {
        pt: { projects: 'Projetos', developer: 'Desenvolvedor', gameDesign: 'Game Design', management: 'Gerenciamento', biography: 'Biografia', playable: 'Jogáveis', gallery: 'Galeria', extra: 'Extra' },
        en: { projects: 'Projects', developer: 'Development', gameDesign: 'Game Design', management: 'Project management', biography: 'About', playable: 'Playable games', gallery: 'Gallery', extra: 'Extra' },
        es: { projects: 'Proyectos', developer: 'Desarrollo', gameDesign: 'Diseño de videojuegos', management: 'Gestión de proyectos', biography: 'Biografía', playable: 'Juegos jugables', gallery: 'Galería', extra: 'Más' }
    }[locale];
    const projectLabels = {
        pt: {
            whiteroom: 'WhiteRoom Market',
            annie: "Annie's Sweet Nightmares",
            missaomesquita: 'Missão Mesquita',
            metainrio: 'Meta in Rio',
            rainbowrevenge: 'Rainbow Revenge: Recruit',
            greencoding: 'GreenCoding Experience'
        },
        en: {
            whiteroom: 'WhiteRoom Market',
            annie: "Annie's Sweet Nightmares",
            missaomesquita: 'Missão Mesquita',
            metainrio: 'Meta in Rio',
            rainbowrevenge: 'Rainbow Revenge: Recruit',
            greencoding: 'GreenCoding Experience'
        },
        es: {
            whiteroom: 'WhiteRoom Market',
            annie: "Annie's Sweet Nightmares",
            missaomesquita: 'Missão Mesquita',
            metainrio: 'Meta in Rio',
            rainbowrevenge: 'Rainbow Revenge: Recruit',
            greencoding: 'GreenCoding Experience'
        }
    }[locale];
    const hrefFor = route => {
        const target = locale === 'pt' ? route : path.posix.join(locale, route);
        return path.posix.relative(path.posix.dirname(outputPath), target).replace(/\\/g, '/');
    };
    const staticLinks = [
        ['biografia.html', labels.biography],
        ['jogaveis.html', labels.playable],
        ['galeria.html', labels.gallery],
        ['extra.html', labels.extra]
    ];
    const categories = [
        {
            route: 'desenvolvedor/index.html',
            label: labels.developer,
            projects: [
                ['desenvolvedor/whiteroom.html', projectLabels.whiteroom],
                ['desenvolvedor/annie.html', projectLabels.annie]
            ]
        },
        {
            route: 'gamedesign/index.html',
            label: labels.gameDesign,
            projects: [
                ['gamedesign/missaomesquita.html', projectLabels.missaomesquita],
                ['gamedesign/metainrio.html', projectLabels.metainrio],
                ['gamedesign/rainbowrevenge.html', projectLabels.rainbowrevenge]
            ]
        },
        {
            route: 'gestao/index.html',
            label: labels.management,
            projects: [['gestao/greencoding.html', projectLabels.greencoding]]
        }
    ];
    const menu = `<li class="nk-drop-item"><a href="#">${labels.projects}</a><ul class="dropdown">` +
        categories.map(category =>
            `<li class="nk-drop-item"><a href="${hrefFor(category.route)}">${category.label}</a><ul class="dropdown">` +
            category.projects.map(([route, label]) => `<li><a href="${hrefFor(route)}">${label}</a></li>`).join('') +
            '</ul></li>').join('') +
        '</ul></li>' +
        staticLinks.map(([route, label]) => `<li><a href="${hrefFor(route)}">${label}</a></li>`).join('');
    const openingPattern = /<ul\b[^>]*class="[^"]*\bnk-nav-right\b[^"]*\bd-none\b[^"]*\bd-lg-table-cell[^"]*"[^>]*>/;
    const openingMatch = html.match(openingPattern);
    if (!openingMatch) throw new Error(`Desktop navigation not found in ${outputPath}`);

    const openingStart = openingMatch.index;
    let openingTag = openingMatch[0];
    if (!/\bdata-nav-mobile=/.test(openingTag)) {
        openingTag = openingTag.replace(/>$/, ' data-nav-mobile="#nk-nav-mobile">');
    }
    const tags = /<\/?ul\b[^>]*>/g;
    tags.lastIndex = openingStart;
    let depth = 0;
    let closingStart = -1;
    let tag;
    while ((tag = tags.exec(html))) {
        depth += tag[0].startsWith('</') ? -1 : 1;
        if (depth === 0) {
            closingStart = tag.index;
            break;
        }
    }
    if (closingStart === -1) throw new Error(`Desktop navigation list is not closed in ${outputPath}`);
    html = html.slice(0, openingStart) + openingTag + menu + html.slice(closingStart, html.length);

    const homeHref = hrefFor('index.html');
    return html.replace(/<a\b[^>]*class="[^"]*\bnk-nav-logo\b[^"]*"[^>]*>/g, opening =>
        /\bhref="[^"]*"/.test(opening)
            ? opening.replace(/\bhref="[^"]*"/, `href="${homeHref}"`)
            : opening.replace(/>$/, ` href="${homeHref}">`));
}

function wireSectionPageLinks(html, outputPath, locale) {
    for (const route of ['biografia.html', 'jogaveis.html', 'galeria.html', 'extra.html']) {
        const target = locale === 'pt' ? route : path.posix.join(locale, route);
        const href = path.posix.relative(path.posix.dirname(outputPath), target).replace(/\\/g, '/');
        const pattern = new RegExp(`href="(?:(?:\\.\\./)|(?:pt|en|es)/)*${route.replace('.', '\\.')}"`, 'g');
        html = html.replace(pattern, `href="${href}"`);
    }
    return html;
}

function restoreLegacyMenuItems(html) {
    const navStart = html.indexOf('<ul class="nk-nav nk-nav-right d-none d-lg-table-cell"');
    if (navStart === -1) throw new Error('Desktop navigation not found');
    const navTags = /<\/?ul\b[^>]*>/g;
    navTags.lastIndex = navStart;
    let depth = 0;
    let tag;
    let navEnd = -1;
    while ((tag = navTags.exec(html))) {
        depth += tag[0].startsWith('</') ? -1 : 1;
        if (depth === 0) {
            navEnd = navTags.lastIndex - tag[0].length;
            break;
        }
    }
    if (navEnd === -1) throw new Error('Desktop navigation list is not closed');

    const legacyItems = [
        '<li><a href="#">Biografia</a></li>',
        '<li><a href="#">Jogaveis</a></li>',
        '<li><a class="legacy-menu-gallery" href="#">Galeria</a></li>',
        '<li><a href="#">Extra</a></li>'
    ];
    const nav = html.slice(navStart, navEnd)
        .replace(/<li\b[^>]*>\s*<a\b[^>]*>\s*(?:Biografia|Jogaveis|Jogáveis|Galeria|Extra)\s*<\/a>\s*<\/li>/g, '');
    return html.slice(0, navStart) + nav + `\n${legacyItems.join('\n')}\n` + html.slice(navEnd);
}

function preserveProjectLinks(html, outputPath) {
    html = html.replace(/href="forum\.html"/g, 'href="whiteroom.html"')
        .replace(/href="forum-single-topic\.html"/g, 'href="annie.html"')
        .replace(/href="(?:[^"]*\/)?vaccine-race\.html"/g, 'href="#"');

    const portugueseRoutes = {
        'rio2030.html': 'desenvolvedor/rio2030.html',
        'woodyschool.html': 'gestao/woodyschool.html',
        'woodystreet.html': 'gestao/woodystreet.html',
        'widgets.html': 'widgets.html'
    };
    for (const [file, target] of Object.entries(portugueseRoutes)) {
        const href = path.posix.relative(path.posix.dirname(outputPath), target).replace(/\\/g, '/');
        const pattern = new RegExp(`href="(?:[^"]*/)?${file.replace('.', '\\.')}"`, 'g');
        html = html.replace(pattern, `href="${href}"`);
    }
    html = html.replace(/\bhref="([^"#][^"]*)"/g, (match, href) => {
        if (/^(?:[a-z]+:|\/\/|mailto:|tel:)/i.test(href)) return match;
        const target = path.resolve(path.dirname(outputPath), href);
        if (fs.existsSync(target)) return match;
        const rootTarget = path.resolve(href);
        if (!fs.existsSync(rootTarget)) return match;
        const relative = path.relative(path.dirname(outputPath), rootTarget).replace(/\\/g, '/');
        return `href="${relative}"`;
    });
    return html;
}

function buildHome(locale) {
    const route = 'index.html';
    const outputPath = path.posix.join(locale, route);
    const assetPrefix = '../';
    let html = translateHtml(fs.readFileSync(route, 'utf8'), locales[locale]);
    html = preserveProjectLinks(html, outputPath)
        .replace(/<html lang="[^"]*">/, `<html lang="${locale}">`)
        .replace(/\.\.\/https:\/\//g, 'https://')
        .replace(/(?:\.\.\/)*assets\//g, `${assetPrefix}assets/`)
        .replace(/(?:\.\.\/)*webgl\//g, `${assetPrefix}webgl/`)
        .replace(/<title>[^<]*<\/title>/, locale === 'en'
            ? '<title>Richard Mendonça | Game Development and Game Design</title>'
            : '<title>Richard Mendonça | Desarrollo de videojuegos y diseño de juegos</title>');
    html = wirePortfolioNavigation(wireSectionPageLinks(wireStaticNavigation(html, outputPath, locale), outputPath, locale), outputPath, locale);
    html = addSwitcher(html, locale, route, outputPath);
    html = addAlternates(html, route, outputPath);
    html = addHomeSocialMetadata(html, locale, outputPath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, 'utf8');
}

function buildPage(route, locale) {
    const source = fs.readFileSync(route, 'utf8');
    const outputPath = path.posix.join(locale, route.replace(/\\/g, '/'));
    const outputDir = path.posix.dirname(outputPath);
    const rootRelative = path.posix.relative(outputDir, '.').replace(/\\/g, '/');
    const assetPrefix = rootRelative ? `${rootRelative.replace(/\/?$/, '/')}` : './';
    let html = translateHtml(source, locales[locale]);
    const galleryLabel = locale === 'en' ? 'Gallery' : 'Galería';
    html = html.replace(/(<a class="legacy-menu-gallery" href="#">)[^<]*(<\/a>)/, `$1${galleryLabel}$2`);

    html = preserveProjectLinks(html, outputPath)
        .replace(/<html lang="[^"]*">/, `<html lang="${locale === 'en' ? 'en' : 'es'}">`)
        .replace(/\.\.\/https:\/\//g, 'https://')
        .replace(/(?:\.\.\/)*assets\//g, `${assetPrefix}assets/`)
        .replace(/\.\.\/webgl\//g, `${assetPrefix}webgl/`);

    const titleMap = {
        'gamedesign/index.html': locale === 'en' ? 'Game Design | Richard Mendonça' : 'Diseño de videojuegos | Richard Mendonça',
        'gestao/index.html': locale === 'en' ? 'Project Management | Richard Mendonça' : 'Gestión de proyectos | Richard Mendonça',
        'desenvolvedor/index.html': locale === 'en' ? 'Developer | Richard Mendonça' : 'Desarrollo | Richard Mendonça',
        'gamedesign/missaomesquita.html': 'Missão Mesquita | Richard Mendonça',
        'gamedesign/metainrio.html': 'Meta in Rio | Richard Mendonça',
        'gamedesign/rainbowrevenge.html': 'Rainbow Revenge: Recruit | Richard Mendonça',
        'desenvolvedor/whiteroom.html': 'WhiteRoom Market | Richard Mendonça',
        'desenvolvedor/annie.html': "Annie's Sweet Nightmares | Richard Mendonça",
        'gestao/greencoding.html': 'GreenCoding Experience | Richard Mendonça',
        'biografia.html': locale === 'en' ? 'About | Richard Mendonça' : 'Biografía | Richard Mendonça',
        'jogaveis.html': locale === 'en' ? 'Playable Games | Richard Mendonça' : 'Juegos jugables | Richard Mendonça',
        'galeria.html': locale === 'en' ? 'Gallery | Richard Mendonça' : 'Galería | Richard Mendonça',
        'extra.html': locale === 'en' ? 'More | Richard Mendonça' : 'Más | Richard Mendonça'
    };
    html = wirePortfolioNavigation(wireSectionPageLinks(wireStaticNavigation(html, outputPath, locale), outputPath, locale), outputPath, locale);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${titleMap[route]}</title>`);
    html = addSwitcher(html, locale, route, outputPath);
    html = addAlternates(html, route, outputPath);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, 'utf8');
    return outputPath;
}

for (const route of pages) {
    wirePortuguesePage(route);
}

wirePortugueseHome();

for (const locale of ['en', 'es']) {
    buildHome(locale);
    for (const route of pages) {
        console.log(`Generated ${buildPage(route, locale)}`);
    }
}
