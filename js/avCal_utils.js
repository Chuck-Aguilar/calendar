window.onload = function() {
    try {
        $('#innerCal');
        colorbox();
        adjs();
    } catch (e) {
        var script = document.createElement("script");
        script.setAttribute('type', 'text/javascript');
        script.src = 'https://img.homepagemodules.de/ds/static/jquery/min/jquery-1.7.1.min.js';
        document.getElementsByTagName("head")[0].appendChild(script);


        colorbox();
        adjs();
    }
};

function colorbox() {
    var cbox = document.createElement("script");
    cbox.setAttribute('type', 'text/javascript');
    cbox.src = 'js/jquery.colorbox-min.js';
    document.getElementsByTagName("head")[0].appendChild(cbox);
}

function adjs() {
    var ajs = document.createElement("script");
    ajs.setAttribute('type', 'text/javascript');
    ajs.src = 'js/advCal_1.js';
    document.getElementsByTagName("head")[0].appendChild(ajs);
}
