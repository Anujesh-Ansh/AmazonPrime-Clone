var userName = JSON.parse(localStorage.getItem("userName")) || "Anujesh";

document.querySelector("#userName").innerHTML = userName;

document.querySelector("#signOut").addEventListener("click", function () {
    window.location.href = "/index.html";
});

$(document).ready(function () {

    $(".regular").slick(slickOptions);
});

    var throwbackController = document.querySelectorAll(".throwbackController");
    var throwbackPics = document.querySelectorAll(".T");

    var t = 0;

    throwbackController[1].addEventListener("click", function () {
        t++;
        for (var i of throwbackPics) {
            if (t == 0) {
                i.style.left = "0px";
            }
            if (t == 1) {
                i.style.left = "-1400px";
            }
            if (t > 1) {
                t = 1;
            }
        }
    });

    throwbackController[0].addEventListener("click", function () {
        t--;
        for (var i of throwbackPics) {
            if (t == 0) {
                i.style.left = "0px";
            }
            if (t == 1) {
                i.style.left = "-10px";
            }
            if (t < 0) {
                t = 0;
            }
        }
    });

