(() => {
    const gallery = document.querySelector('[data-portfolio-gallery]');
    if (gallery) {
        const stageImage = gallery.querySelector('[data-gallery-stage]');
        const caption = gallery.querySelector('[data-gallery-caption]');
        const count = gallery.querySelector('[data-gallery-count]');
        const thumbnails = [...gallery.querySelectorAll('[data-gallery-select]')];
        let activeIndex = 0;

        const showImage = index => {
            activeIndex = (index + thumbnails.length) % thumbnails.length;
            const thumbnail = thumbnails[activeIndex];
            const image = thumbnail.querySelector('img');
            const description = thumbnail.querySelector('[data-gallery-thumb-caption]');
            stageImage.src = image.src;
            stageImage.alt = image.alt;
            caption.textContent = description.textContent;
            count.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(thumbnails.length).padStart(2, '0')}`;
            thumbnails.forEach((item, itemIndex) => {
                item.setAttribute('aria-current', itemIndex === activeIndex ? 'true' : 'false');
            });
        };

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => showImage(index));
        });

        gallery.querySelector('[data-gallery-prev]').addEventListener('click', () => showImage(activeIndex - 1));
        gallery.querySelector('[data-gallery-next]').addEventListener('click', () => showImage(activeIndex + 1));
        showImage(0);
    }

    const gamePage = document.querySelector('[data-portfolio-games]');
    if (!gamePage) return;

    const frame = gamePage.querySelector('[data-game-frame]');
    const canvas = gamePage.querySelector('[data-game-canvas]');
    const placeholder = gamePage.querySelector('[data-game-placeholder]');
    const status = gamePage.querySelector('[data-game-status]');
    const choices = [...gamePage.querySelectorAll('[data-game-choice]')];
    const stopButton = gamePage.querySelector('[data-game-stop]');
    const root = document.body.dataset.siteRoot || './';
    const defaultMessage = gamePage.dataset.gameDefaultMessage;
    const loadingMessage = gamePage.dataset.gameLoadingMessage;
    const startedMessage = gamePage.dataset.gameStartedMessage;

    const stopGame = () => {
        frame.src = 'about:blank';
        frame.hidden = true;
        canvas.classList.remove('is-portrait');
        placeholder.hidden = false;
        status.textContent = defaultMessage;
        choices.forEach(choice => choice.setAttribute('aria-pressed', 'false'));
    };

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const gameUrl = new URL(`${root}${choice.dataset.gameSrc}`, document.baseURI);
            gameUrl.searchParams.set('embed', '1');
            frame.hidden = false;
            placeholder.hidden = true;
            canvas.classList.toggle('is-portrait', choice.dataset.gameShape === 'portrait');
            status.textContent = loadingMessage;
            choices.forEach(item => item.setAttribute('aria-pressed', String(item === choice)));
            frame.src = gameUrl.href;
        });
    });

    frame.addEventListener('load', () => {
        if (!frame.hidden && frame.src !== 'about:blank') status.textContent = startedMessage;
    });

    stopButton.addEventListener('click', stopGame);
})();
