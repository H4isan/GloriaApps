$(document).ready(function () {
    $(document).delegate('.openn', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function (event) {
        $('.openn').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function (event) {
        $('.openn').removeClass('oppenned');
        event.stopPropagation();
    });

});

$(document).ready(function () {
    $('.datepicker').pickadate({
        format: 'mm/dd/yyyy',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    if($( window ).width()){
        console.log("Cambie");
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 600) {

        $(document).ready(function () {
            $("#test1").attr("id", "test-swipe-1");
            $("#test2").attr("id", "test-swipe-2");
            $('ul.tabs').tabs();
            
        });
      

    } else {

    }
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function () { } // Callback for Modal close

    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    $('.product').each(function () {
        var imgURL = $(this).find(".card-image").find('img').attr('src');
        $(this).find(".card-image").css('background-image', 'url(' + imgURL + ')');
    });

});