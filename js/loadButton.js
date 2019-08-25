$(document).ready(function () {
    $(".aboutmeContainer").slice(0, 9).show();
    if ($(".aboutmeContainer:hidden").length != 0) {
        $("#loadMore").show();
    }		
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".aboutmeContainer:hidden").slice(0, 6).slideDown();

    });
    $("#loadLess").on('click', function (e) {
        e.preventDefault();
        $(".aboutmeContainer:visible").slice(-6).slideUp();
    });

});