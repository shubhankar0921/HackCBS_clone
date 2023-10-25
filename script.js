const myNav = document.getElementById('mynav');
window.onscroll = function() {
    if (document.body.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

let see_ans = document.getElementById("see_answer")
let remove_ans = document.getElementById("remove_answer")
let answer = document.getElementById("answer")

function Faq_show() {
    remove_ans.style.display = "flex"
    see_ans.style.display = "none"
    answer.style.visibility = "visible"
    answer.style.opacity = "1"

}

function Faq_remove() {
    remove_ans.style.display = "none"
    see_ans.style.display = "flex"
    answer.style.visibility = "hidden"
    answer.style.opacity = "0"
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}