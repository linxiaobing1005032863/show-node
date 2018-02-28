window.onload = function () {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "../font/icons/svg-symbols.svg", true);
    ajax.onload = function (e) {
        document.body.insertAdjacentHTML("afterBegin", '<div style="display:none;">' + ajax.responseText + '</div>');
    };
    ajax.send();
    $('.goTo').click(function () {
        window.location.href = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ? "/downLoadAPP.html" : "https://login.issp.bjike.com/login?url=https://show.issp.bjike.com/system.html";
    })

    $('.navbar-fixed-top .navbar-nav li').click(function () {
        $('.navbar-fixed-top .navbar-nav li').removeClass('active');
        $(this).addClass('active');
        $('.collapse').removeClass('in');
    })


    function sideGo() {
        var i = 0;
        setInterval(function () {
            $('.ass').eq(i).addClass('img' + i);
            $('.ass').eq(i).html('<img src=/images/homePage/' + (i + 1) + '.png>');
            i++;
        }, 500);
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 4960) {
            sideGo();
        }
    });
}