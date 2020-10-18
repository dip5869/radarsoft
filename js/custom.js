/* @Copyright Radar_soft_tech */
/* @tarique */
// password-eye
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    var x = document.getElementById("myInput1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
// password-eye
// pop-up-slider-up-down
$(document).ready(function(){
        $('.register-btn').click(function () {
        $('.login-box').slideUp();
        $('.register-box').slideDown();
    })

        $('.login-btn').click(function () {
        $('.login-box').slideDown();
        $('.register-box').slideUp();
    })
});
// pop-up-slider-up-down
$(document).ready(function () {
    $('#show').click(function () {
        $('.menu').toggle("slide");
    });
    $('#show-contact').click(function () {
        $('.add-contact').toggle("slide");
    });
    $('#first-draft').click(function () {
        $('.checkbox1').toggle("slide");
    });
    $('#final-draft').click(function () {
        $('.checkbox2').toggle("slide");
    });
});