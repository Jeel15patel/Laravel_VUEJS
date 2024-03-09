const js = require("laravel-mix").js;

js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .vue();
