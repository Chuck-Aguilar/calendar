var tDate = new Date();
var today = tDate.getDate();
var tMonth = tDate.getMonth() + offset;
var aa = Math.floor(Math.random() * 1100500);
var dd = Math.floor(Math.random() * 1100500);
var ects = 6;
var $bxo;

function placePicture(el) {
    $("#" + el).html("<a id=\"" + el + "link\" href=\"" + dayImgs[el - 1] + "\" class=\"group1\" > " + el + "</a>")
}

function bbbaaabbb(id) {
    var pos = $('#' + id).css('position');
    var dis = $('#' + id).css('display');
    var wi = $('#' + id).css('width');
    var le = $('#' + id).length;
    if (pos != "static") {
        ssc(id);
        ects = 6
    }
    if (dis == "none") {
        ssc(id);
        ects = 6
    }
    if (wi != "300px") {
        ssc(id);
        ects = 6
    }
    if ($bxo.parent()[0] !== $('#containerCal')[0]) {
        $('#' + id).remove();
        ssc(id);
        ects = 6
    }
    if (le < 1) {
        //addxobad()
    }
    if (ects != 0) {
        ects--;
        window.setTimeout("bbbaaabbb(aa)", 1000)
    }
}

function ssc(el) {
    $('#' + el).css('cssText', 'width: 300px !important;opacity: 1 !important ; float:left !important; border:1px solid #c7c7c7 !important; padding:3px !important; background-color: white !important; position: static !important; display: block !important; margin-top:-1.0%;')
}

function addxobad() {
    try {
        getHeightMargin()
    } catch (e) {
        $('#containerCal').append('<div id=\"' + aa + '\"></div>');
        //$('#' + aa).html('');
        ssc(aa);
        $bxo = $('#innerCal ~ div').first();
        window.setTimeout("bbbaaabbb(aa)", 1000)
    }
}

function snowSystem() {
    try {
        if (snow == "true") {
            $(document).snowfall({
                flakeCount: maxFlakes,
                collection: '.door',
                maxSpeed: maxFlakeSpeed,
                minSize: minFlakesSize,
                maxSize: mayFlakesSize,
                round: true
            })
        }
    } catch (e) {}
}
$(document).ready(function() {
    try {
        if (snow == "true") {
            var snowEngine = document.createElement("script");
            snowEngine.setAttribute('type', 'text/javascript');
            snowEngine.src = 'http://www.xobor.de/js_scripts/snow/snowfall.jquery.js';
            document.getElementsByTagName("head")[0].appendChild(snowEngine)
        }
    } catch (e) {}
    $('#mybg').attr('src', backgroundImg);
    $('#mybg').css('border-radius', borderRadius);
    $('#containerCal').css('width', width + 'px');
    $('#Adfooter').css('width', width + 'px');
    $('#containerCal').css('height', height + 'px');
    $('#containerCal').show();
    $('#Adfooter').show();
    if (backgroundIMG) {
        $('body').css('background-color', backgroundIMG)
    }
    if (blur == "true") {
        $('#mybg').css('-webkit-filter', 'blur(5px)');
        $('#mybg').css('-moz-filter', 'blur(5px)');
        $('#mybg').css('-o-filter', 'blur(5px)');
        $('#mybg').css('-ms-filter', 'blur(5px)')
    }
    if (tMonth == 12) {
        for (var i = 1; i < today; i++) {
            if (dayImgs[i - 1].match('http://')) {
                $("#" + i).css("background-image", "url(" + dayImgs[i - 1] + ")");
                $("#" + i).css("box-shadow", "inset -8px 8px 10px #252525");
                $("#" + i).css("opacity", "1");
                $("#" + i).css("background-position", "200px 50%")
            } else {
                $("#" + i).css("background-image", "url(" + videoPrevBackground + ")");
                $("#" + i).css("box-shadow", "inset -8px 8px 10px #252525");
                $("#" + i).css("opacity", "1");
                $("#" + i).css("background-position", "center center")
            }
        }
    }
    //addxobad();
    window.setTimeout("snowSystem()", 200)
});

function checkDateAndAction(el) {
    /*if (today > el && tMonth == 12 ) {   
        if (dayImgs[el - 1].match('http://')) {
            $.colorbox({
                href: dayImgs[el - 1]
            })
        } else {
            $.colorbox({
                iframe: true,
                width: videoW + "px",
                height: videoH + "px",
                href: "http://www.youtube.com/embed/" + dayImgs[el - 1]
            })
        }
    }*/
    if (true) {
        if (dayImgs[el - 1].match('http://')) {
            $.colorbox({
                href: dayImgs[el - 1]
            })
        } else {
            $.colorbox({
                iframe: true,
                width: videoW + "px",
                height: videoH + "px",
                href: "http://www.youtube.com/embed/" + dayImgs[el - 1]
            })
        }
    }
    //if (today < el && tMonth == 12) {
        //alert("Heute ist noch nicht der " + el + ". 12.")
    //}
    //if (tMonth != 12) {
        //alert("Wir haben noch nicht Dezember!")
    //}
}
