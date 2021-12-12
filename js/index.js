var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("dialog")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "20px solid white";
        variableBorder = 1;
    }
}

var dialogs = {
    value0: function() {
        texts = "Ha sido un 2021 muy raro verdad?";
        timer = 400;
    },
    value1: function() {
        texts = "A veces pienso que hubiera pasado si no nos hubieramos dado ese like";
        timer = 150;
    },
    value2: function() {
        texts = "Pero el hubiera no existe, pero sabes que si existe?";
        timer = 150;
    },
    value3: function() {
        texts = "Nosotros (: ";
        timer = 150;
    },
    value4: function() {
        texts = "Gracias por todo estos meses que hemos pasado";
        timer = 150;
    },
    value5: function() {
        texts = "Pasaste los últimos meses de tus 20 años conmigo y aún queda mucho más";
        timer = 200;
    },
    value6: function() {
        texts = "Estas lista?";
        timer = 400;
    },
    value7: function() {
        texts = "Vamos (:";
        timer = 400;
    },
    value7: function() {
        texts = "Pd:Feliz cumpleaños! (:";
        timer = 400;
    }
};

var namber = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;

    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            namber++;
            if (namber == Object.keys(dialogs).length) {
                clearInterval(writes);
                return up();
            }
            setTimeout(type, 1000);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}

var a = 1;
var b = 1;

function up() {
    sus = setInterval(startus, 10);

    function startus() {
        a += 0.00001;
        b += 0.00001;
        dialog.style.transform = "scale(" + a++ + "," + b++ + ")";
    }
}