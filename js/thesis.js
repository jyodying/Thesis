var hamburger = document.getElementsByClassName("hamburger");
console.log(hamburger);

var toggleMenu = function () {
    //alert("click");
    var li = document.getElementsByClassName("menuItem");
    if (li[0].style.display == "block") {
        for (var i = 0; i < li.length; i++) {
            li[i].style.display = "none";
        }
    } else {
        for (var j = 0; j < li.length; j++) {
            li[j].style.display = "block";
            li[j].style.top = (50 * j) + (51 + j) + "px";
        }
    }
};

for (var i = 0; i < hamburger.length; i++) {
    hamburger[i].addEventListener('click', toggleMenu, false);
}

window.addEventListener('resize', function (event) {
    var li = document.getElementsByClassName("menuItem");
    if (this.window.innerWidth > 768) {
        for (var i = 0; i < li.length; i++) {
            li[i].style.display = "block";
        }
    } else {
        for (var j = 0; j < li.length; j++) {
            li[j].style.display = "none";
        }
    }
});

var eye = document.getElementById("eye");

var toggleEye = function () {
    //alert("click");
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
        eye.style.backgroundImage = "url('images/show-password.png')";
    } else {
        password.type = "password";
        eye.style.backgroundImage = "url('images/hide-password.png')";
    }
};

eye.addEventListener('click', toggleEye, false);
