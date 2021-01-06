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
    var lines = text.split('\n');
    var html = "";
    for(var i = 0; i < lines.length; i++){
        html += lines[i];
    }
    return html;
}

function generateParagraphHTML(file, className){
    var text = readTextFile(file);
    text = parseText(text);
    var elements = document.getElementsByClassName(className);
    elements[0].insertAdjacentHTML('afterbegin', "<p>" + text + "</p>");
    elements[1].insertAdjacentHTML('afterbegin', "<p>" + text + "</p>");
}


document.addEventListener('DOMContentLoaded', function () {
});

$(document).ready(function() {
    $(".first-meeting-2021").load("./html/announcements/first-meeting-2021.html"); 
});