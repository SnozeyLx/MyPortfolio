(function () {
    var body = document.body;
    var route = body.getAttribute('data-site-route');
    var root = body.getAttribute('data-site-root');

    if (!route || !root) {
        return;
    }

    var siteRoot = new URL(root, window.location.href);
    var languages = {
        pt: '',
        en: 'en/',
        es: 'es/'
    };

    document.querySelectorAll('[data-language-route]').forEach(function (link) {
        var language = link.getAttribute('data-language-route');

        if (Object.prototype.hasOwnProperty.call(languages, language)) {
            link.href = new URL(languages[language] + route, siteRoot).href;
        }
    });
}());
