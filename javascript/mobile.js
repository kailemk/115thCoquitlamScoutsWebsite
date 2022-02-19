window.onload = function () {
    var coll = document.getElementsByClassName("collapsible-button");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            }else {
                content.style.display = "block";
            }
        });
    }
}

function menuOpen(){
    document.getElementById("menu-sidebar").style.width = "320px";
}

function menuClose(){
    document.getElementById("menu-sidebar").style.width = "0";
}