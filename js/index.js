// this website scripts
jQuery(document).ready(function () {

    let faq_fold_btn = document.querySelectorAll(".accordion-header span")
    Array.from(faq_fold_btn).forEach(function (elm) {
        elm.addEventListener("click", function () {
            if (elm.parentElement.nextElementSibling.style.display === "block") {
                $(".accordion-body").slideUp(200)
                $(".accordion-header span").text("+")
                elm.innerText = "+"
                $(elm).parent().next().slideUp(200)
            }
            else {
                $(".accordion-body").slideUp(200)
                $(".accordion-header span").text("+")
                elm.innerText = "-"
                $(elm).parent().next().slideDown(400)
            }
        })
    })
    $('.fa-bars').click(function () {
        $(this).toggleClass("fa-times")
        $('.navbar').toggleClass("nav-toggle")
    })
    $(window).on("scroll resize load", function () {
        $('.navbar').removeClass("nav-toggle")
        $('.fa-bars').removeClass("fa-times")
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $('header').css({ "box-shadow": "0 .3rem .5rem var(--default-shadow-color)", "background": "var(--default-color)" })

        } else {
            $('header').css({ "background": "var(--default-background-color)", "box-shadow": "unset" })
        }

    })
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
    })
    function doDarkMode() {
        $("#body").css({ "background": "black", "color": "white" })
        $("#about").css({ "background": "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(51,51,51,1) 53%, rgba(0,0,0,1) 100%)" })
        $("#team").css({ "background": "black", "color": "white" })
        $("span, input, textarea, .card, #sendChat").css({ "background": "lightgray" })
        $("#dark-mode").css({ "display": "none" })
        $("#light-mode").css({ "display": "block" })
        $(".default-bg-do").css({ "background-color": "var(--default-bg-color)", "color": "white" })
        $(".darkable").css({ "background-color": "black", "color": "white" })
        $(".chat-body").css({ "background-color": "black", "color": "white" })
        $(".accordion-body").css({ "background-color": "var(--default-bg-color)", "color": "white!important" })
        $(".accordion-body-answer, .darkable-text").css({ "color": "white" })
        localStorage.setItem("mode", "dark")
    }
    function doLightMode() {
        $("#body").css({ "background": "white", "color": "black" })
        $("#about").css({ "background": "white" })
        $(".accordion-body").css({ "background-color": "white", "color": "black!important" })
        $("#team").css({ "background": "var(--default-font-color-light-overlay)", "color": "black" })
        $("span, input, textarea, .card").css({ "background": "white" })
        $("#light-mode").css({ "display": "none" })
        $("#dark-mode").css({ "display": "block" })
        $(".default-bg-do").css({ "background-color": "white", "color": "black" })
        $(".darkable").css({ "background-color": "white", "color": "black" })
        $(".chat-body").css({ "background-color": "white", "color": "black" })
        $(".accordion-body-answer, .darkable-text").css({ "color": "black" })
        $("#sendChat").css({ "background": "white" })
        localStorage.setItem("mode", "light")
    }
    $(window).on("load", function () {
        if (localStorage.getItem("mode") == "dark") {
            doDarkMode()
        }
        else {
            doLightMode()
        }
    })
    $("#dark-mode").click(function () {
        doDarkMode()
    })
    $("#light-mode").click(function () {
        doLightMode()
    })


})




// related to chat box ---- >>>>>>>> chat box >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


