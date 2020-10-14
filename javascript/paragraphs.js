function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var allText;
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function parseText(text){
    /*
    var char = '\n';
    var i = j = 0;

    while ((j = text.indexOf(char, i)) !== -1) {
        console.log(text.substring(i, j));
        i = j + 1;
    }
    */

    var lines = text.split('\n');
    var html = "";
    for(var i = 0; i < lines.length; i++){
        html += lines[i] + "<br> <br>";
    }
    return html;
}


document.addEventListener('DOMContentLoaded', function () {

    var text = readTextFile("./announcements/christmas-camp-2019.txt");
    text = parseText(text);
    var elements = document.getElementsByClassName("christmas-camp-2019");
    elements[0].insertAdjacentHTML('afterbegin', "<p>" + text + "</p>");
    elements[1].insertAdjacentHTML('afterbegin', "<p>" + text + "</p>");

    text = readTextFile("./announcements/camp-reminder.txt");
    text = parseText(text);
    elements = document.getElementsByClassName('camp-reminder');
    elements[0].insertAdjacentHTML('afterbegin', "<p>" + text + "</p>");
    elements[1].insertAdjacentHTML('afterbegin', "<p>" + text + "</p>");
});

function menuOpen(){
    document.getElementById("menu-sidebar").style.width = "320px";
}

function menuClose(){
    document.getElementById("menu-sidebar").style.width = "0";
}