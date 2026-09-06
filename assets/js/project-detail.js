(function () {
    var projects = {
        metainrio: {
            title: 'Meta in Rio', category: 'Game Design', image: 'assets/images/metainrio/slide.jpg', tags: ['Experiência', 'Metaverso', 'Narrativa espacial'],
            description: 'Meta in Rio é uma experiência virtual criada para transformar um espaço cultural em uma jornada navegável, combinando presença, descoberta e interação.',
            paragraphs: ['O projeto foi pensado como um ambiente em que o jogador aprende o espaço enquanto explora. A arquitetura, os pontos de interesse e a circulação funcionam juntos para orientar a experiência.', 'Meu trabalho envolveu pensar a relação entre cenário, narrativa e comportamento do visitante, criando uma experiência que comunica contexto sem depender apenas de textos.', 'A proposta combina direção de experiência, organização espacial e prototipagem de interações para construir um ambiente virtual claro e convidativo.'],
            facts: [['Engine', 'Unity'], ['Plataforma', 'Experiência virtual'], ['Foco', 'Exploração e narrativa'], ['Área', 'Game Design']],
            gallery: ['assets/images/metainrio/1.jpg', 'assets/images/metainrio/2.jpg', 'assets/images/metainrio/3.jpg', 'assets/images/metainrio/4.jpg'],
            contribution: 'Minha contribuição esteve na concepção da experiência, na organização da navegação e na definição das interações que conectam o público ao espaço virtual.'
        },
        rainbowrevenge: {
            title: 'Rainbow Revenge: Recruit', category: 'Game Design', image: 'assets/images/rainbowrevenge/slide.jpg', tags: ['Ação', 'Aventura', 'Gameplay'],
            description: 'Rainbow Revenge: Recruit é uma aventura de ação em 3D construída ao redor de personagens marcantes, desafios diretos e ritmo constante.',
            paragraphs: ['O projeto combina combate, exploração e objetivos claros para criar uma aventura fácil de entender e com espaço para descoberta.', 'O design trabalha contraste visual, leitura de ameaças e progressão de desafios para manter o jogador orientado durante a ação.', 'A experiência foi estruturada para que cada fase tenha uma identidade própria, mas mantenha uma curva de aprendizado consistente.'],
            facts: [['Engine', 'Unity'], ['Plataforma', 'PC / Web'], ['Foco', 'Ação e aventura'], ['Área', 'Game Design']],
            gallery: ['assets/images/rainbowrevenge/r14.jpg', 'assets/images/rainbowrevenge/r10.jpg', 'assets/images/rainbowrevenge/r16.jpg', 'assets/images/rainbowrevenge/r4.jpg'],
            contribution: 'Minha contribuição esteve no desenho do gameplay, na organização dos desafios e na busca por uma leitura mais clara para combate, exploração e progressão.'
        },
        whiteroom: {
            title: 'WhiteRoom Market', category: 'Game Design', image: 'assets/images/salabranca/slide.jpg', tags: ['Imersivo', 'Realidade mista', 'Experiência de marca'],
            description: 'WhiteRoom Market conecta marcas, ambiente físico e espaço virtual em uma experiência de descoberta e compra no metaverso.',
            paragraphs: ['A experiência foi pensada para aproximar um espaço digital de uma situação real, mantendo o usuário orientado entre produtos, ambientes e pontos de interação.', 'O projeto exigiu atenção à jornada do usuário, à apresentação de marcas e à criação de uma navegação que não competisse com o conteúdo.', 'A direção de experiência equilibra exploração, comunicação visual e objetivos de produto em um ambiente imersivo.'],
            facts: [['Tecnologia', 'Realidade mista'], ['Plataforma', 'Metaverso'], ['Foco', 'Jornada do usuário'], ['Área', 'Game Design']],
            gallery: ['assets/images/salabranca/1.jpg', 'assets/images/salabranca/3.jpg', 'assets/images/salabranca/5.jpg', 'assets/images/salabranca/7.jpg'],
            contribution: 'Minha contribuição foi organizar a jornada, pensar os pontos de interação e alinhar a experiência de exploração às necessidades das marcas e do público.'
        },
        annie: {
            title: "Annie's Sweet Nightmares", category: 'Game Design', image: 'assets/images/annie/slide.jpg', tags: ['Casual', 'Cooperativo', 'Gerenciamento'],
            description: "Annie's Sweet Nightmares é um jogo cooperativo de gerenciamento em que decisões rápidas protegem a casa de Annie.",
            paragraphs: ['O jogo transforma uma tarefa simples em um sistema de escolhas: observar o espaço, identificar ameaças e decidir qual armadilha usar em cada momento.', 'O design foi construído em torno de cooperação, comunicação e distribuição de tarefas entre os jogadores.', 'A experiência combina humor visual, pressão crescente e regras acessíveis para criar partidas fáceis de começar e interessantes de repetir.'],
            facts: [['Engine', 'Unity'], ['Tipo', 'Casual cooperativo'], ['Foco', 'Sistemas e cooperação'], ['Área', 'Game Design']],
            gallery: ['assets/images/annie/1.jpg', 'assets/images/annie/8.jpg', 'assets/images/annie/10.jpg', 'assets/images/annie/14.jpg'],
            contribution: 'Minha contribuição esteve na estruturação do loop de jogo, no equilíbrio entre cooperação e pressão e na organização das regras para uma leitura rápida.'
        },
        rio2030: {
            title: 'Rio 2030', category: 'Desenvolvedor', image: 'assets/images/metainrio/slide.jpg', tags: ['Unity', 'Interativo', 'Experiência digital'],
            description: 'Rio 2030 é uma experiência digital construída para apresentar conteúdo e interação em um ambiente navegável.',
            paragraphs: ['O desenvolvimento combinou implementação, organização de cenas e integração de interações para transformar uma ideia visual em uma experiência funcional.', 'A prioridade foi manter a navegação simples, responsiva e coerente com a linguagem do projeto.', 'O trabalho também envolveu prototipagem e ajustes técnicos para aproximar o resultado final da intenção de design.'],
            facts: [['Tecnologia', 'Unity'], ['Foco', 'Interação'], ['Entrega', 'Build jogável'], ['Área', 'Desenvolvimento']],
            gallery: ['assets/images/metainrio/1.jpg', 'assets/images/metainrio/2.jpg', 'assets/images/metainrio/3.jpg', 'assets/images/metainrio/4.jpg'], contribution: 'Minha contribuição esteve na implementação das interações, organização técnica das cenas e preparação da experiência para apresentação.'
        },
        vaccine: {
            title: 'Vaccine Race', category: 'Desenvolvedor', image: 'assets/images/vacinerace/vacinerace1.jpg', tags: ['Gameplay', 'Unity', 'Protótipo'],
            description: 'Vaccine Race é uma experiência interativa orientada por objetivos, movimento e resposta rápida do jogador.',
            paragraphs: ['O desenvolvimento concentrou-se em transformar regras simples em uma sequência de ações clara e responsiva.', 'A implementação de estados, interações e feedbacks ajudou a comunicar ao jogador o que fazer e por que continuar.', 'O projeto também serviu como espaço para experimentar ritmo, interface e integração de sistemas.'],
            facts: [['Tecnologia', 'Unity'], ['Foco', 'Gameplay'], ['Tipo', 'Protótipo'], ['Área', 'Desenvolvimento']],
            gallery: ['assets/images/vacinerace/vacinerace1.jpg', 'assets/images/vacinerace/vacinerace2.jpg', 'assets/images/vacinerace/vacinerace3.jpg', 'assets/images/vacinerace/vacinerace4.jpg'], contribution: 'Minha contribuição foi implementar sistemas de gameplay, interações e feedbacks para transformar o conceito em uma experiência jogável.'
        },
        greencoding: {
            title: 'GreenCoding Experience', category: 'Gerenciamento', image: 'assets/images/greencoding/slide.jpg', tags: ['Realidade virtual', 'Coordenação', 'Experiência'],
            description: 'GreenCoding Experience é uma experiência de realidade virtual em que decisões do jogador transformam progressivamente uma ilha.',
            paragraphs: ['O projeto exigiu coordenação entre conceito, produção, tecnologia e conteúdo para manter uma visão comum durante o desenvolvimento.', 'A experiência foi organizada ao redor de decisões que produzem consequências visuais e ajudam o público a entender o tema.', 'Planejamento, acompanhamento e comunicação foram essenciais para conectar as etapas criativas e técnicas.'],
            facts: [['Tecnologia', 'Meta Quest 2'], ['Foco', 'Experiência VR'], ['Gestão', 'Produção interdisciplinar'], ['Área', 'Gerenciamento']],
            gallery: ['assets/images/greencoding/100.jpg', 'assets/images/greencoding/102.jpg', 'assets/images/greencoding/110.jpg', 'assets/images/greencoding/114.jpg'], contribution: 'Minha contribuição esteve na organização do projeto, alinhamento entre equipes e acompanhamento das decisões que definiram a experiência final.'
        },
        woodyschool: {
            title: 'WoodySchool', category: 'Gerenciamento', image: 'assets/images/greencoding/news-slide.jpg', tags: ['Educação', 'Planejamento', 'Conteúdo'],
            description: 'WoodySchool é uma iniciativa voltada à organização de conhecimento, atividades e colaboração em projetos criativos.',
            paragraphs: ['A proposta depende de clareza de objetivos, organização de etapas e comunicação entre pessoas com diferentes responsabilidades.', 'O gerenciamento busca transformar ideias em rotinas, materiais e entregas que possam ser acompanhadas pelo time.', 'O projeto também reforça a importância de documentar decisões e criar processos que facilitem a colaboração.'],
            facts: [['Foco', 'Educação'], ['Método', 'Planejamento'], ['Entrega', 'Conteúdo e processos'], ['Área', 'Gerenciamento']],
            gallery: ['assets/images/greencoding/news-slide.jpg', 'assets/images/greencoding/100.jpg', 'assets/images/greencoding/102.jpg', 'assets/images/greencoding/110.jpg'], contribution: 'Minha contribuição envolveu estruturar processos, organizar prioridades e conectar pessoas, conteúdo e cronogramas.'
        },
        woodystreet: {
            title: 'WoodyStreet', category: 'Gerenciamento', image: 'assets/images/greencoding/114.jpg', tags: ['Comunidade', 'Gestão', 'Projeto'],
            description: 'WoodyStreet é um projeto de comunidade pensado para conectar pessoas, iniciativas e oportunidades em uma estrutura colaborativa.',
            paragraphs: ['A gestão de um projeto de comunidade exige visão de produto, consistência de comunicação e atenção às necessidades de quem participa.', 'O trabalho envolve organizar frentes, definir prioridades e criar condições para que novas iniciativas possam crescer.', 'A proposta valoriza colaboração, clareza e continuidade como parte da experiência do projeto.'],
            facts: [['Foco', 'Comunidade'], ['Método', 'Gestão colaborativa'], ['Prioridade', 'Organização'], ['Área', 'Gerenciamento']],
            gallery: ['assets/images/greencoding/114.jpg', 'assets/images/greencoding/118.jpg', 'assets/images/greencoding/123.jpg', 'assets/images/greencoding/133.jpg'], contribution: 'Minha contribuição foi estruturar frentes de trabalho, organizar a comunicação e acompanhar a evolução das iniciativas.'
        }
    };

    var key = document.body.dataset.project;
    var project = projects[key];
    if (!project) return;
    var categoryPage = project.category === 'Game Design' ? 'gamedesign.html' : project.category === 'Desenvolvedor' ? 'desenvolvedor.html' : 'gerenciamento.html';
    var root = document.querySelector('[data-project-content]');
    var dataSize = '1200x675';
    root.innerHTML = '<div class="container"><ul class="nk-breadcrumbs"><li><a href="index.html">Home</a></li><li><span class="fa fa-angle-right"></span></li><li><a href="' + categoryPage + '">' + project.category + '</a></li><li><span class="fa fa-angle-right"></span></li><li><span>' + project.title + '</span></li></ul><section class="infinity-article-section"><div class="container"><div class="row vertical-gap"><div class="col-lg-8"><div class="nk-blog-post nk-blog-post-single"><div class="nk-post-text mt-0 infinity-article"><div class="nk-post-img infinity-article-cover"><img src="' + project.image + '" alt="' + project.title + '"></div><div class="nk-gap-1"></div><div class="nk-post-by"><img src="assets/images/avatar-2.jpg" alt="Richard Mendonça" class="rounded-circle" width="35"> por <a href="#">Richard Mendonça</a> · ' + project.category + '<div class="nk-post-categories">' + project.tags.map(function (tag, i) { return '<span class="bg-main-' + (i + 1) + '">' + tag + '</span>'; }).join('') + '</div></div><p>' + project.description + '</p>' + project.paragraphs.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '<a class="nk-btn nk-btn-rounded nk-btn-color-main-1 nk-btn-hover-color-white" href="' + categoryPage + '">Voltar aos projetos <span class="icon"><i class="ion-arrow-right-c"></i></span></a></div></div></div><div class="col-lg-4"><aside class="nk-sidebar nk-sidebar-right nk-sidebar-sticky infinity-article-sidebar"><div class="nk-widget nk-widget-highlighted"><h4 class="nk-widget-title"><span><span class="text-main-1">Ficha</span> técnica</span></h4><div class="nk-widget-content"><div class="infinity-facts">' + project.facts.map(function (fact) { return '<div><span>' + fact[0] + '</span><strong>' + fact[1] + '</strong></div>'; }).join('') + '</div></div></div><div class="nk-widget nk-widget-highlighted infinity-sidebar-widget"><h4 class="nk-widget-title"><span><span class="text-main-1">Latest</span> Screenshots</span></h4><div class="nk-widget-content"><div class="row sm-gap vertical-gap infinity-sidebar-gallery">' + project.gallery.map(function (image) { return '<div class="col-6"><img src="' + image + '" alt="' + project.title + '"></div>'; }).join('') + '</div></div></div></aside></div></div></div></section><section class="infinity-section"><div class="container"><div class="infinity-section-heading"><p class="infinity-kicker">MINHA CONTRIBUIÇÃO</p><h2 class="nk-decorated-h-2"><span><span class="text-main-1">Do conceito</span> ao resultado</span></h2><p>' + project.contribution + '</p></div></div></section></div>';
    document.querySelectorAll('.infinity-sidebar-gallery img').forEach(function (image) {
        image.classList.add('infinity-gallery-preview');
    });

    var article = document.querySelector('.infinity-article');
    var comments = document.createElement('section');
    comments.className = 'infinity-section infinity-comments-section';
    comments.id = 'comments';
    comments.innerHTML = '<div class="container"><h3 class="nk-decorated-h-2"><span><span class="text-main-1">2</span> Comentários sobre o projeto</span></h3><div class="nk-gap"></div><div class="nk-comments"><div class="nk-comment"><div class="nk-comment-meta"><img src="assets/images/avatar-2.jpg" alt="Comentário sobre o projeto" class="rounded-circle" width="35"> por <a href="#">Richard Mendonça</a> · Direção do projeto</div><div class="nk-comment-text"><p>' + project.contribution + '</p></div></div><div class="nk-comment"><div class="nk-comment-meta"><img src="assets/images/avatar-1.jpg" alt="Comentário sobre o projeto" class="rounded-circle" width="35"> por <a href="#">Equipe do projeto</a> · Desenvolvimento</div><div class="nk-comment-text"><p>O projeto combinou decisões de conceito, produção e execução para transformar uma ideia em uma experiência consistente.</p></div></div></div><div class="nk-gap-2"></div><h3 class="nk-decorated-h-2"><span><span class="text-main-1">Leave</span> a Reply</span></h3><div class="nk-gap"></div><div class="nk-reply"><form action="#" class="nk-form"><div class="row sm-gap vertical-gap"><div class="col-md-4"><input type="email" class="form-control required" placeholder="Email *"></div><div class="col-md-4"><input type="text" class="form-control required" placeholder="Name *"></div><div class="col-md-4"><input type="text" class="form-control" placeholder="Website"></div></div><div class="nk-gap-1"></div><textarea class="form-control required" rows="5" placeholder="Message *"></textarea><div class="nk-gap-1"></div><button class="nk-btn nk-btn-rounded nk-btn-color-main-1" type="submit">Post Comment</button></form></div></div>';
    document.querySelector('.infinity-project').appendChild(comments);
})();
