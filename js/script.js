$(document).ready(function () {
    $(".more-content").slice(0, 12).show();
    $(".loadmore").on("click", function (e) {
        e.preventDefault();
        $(".more-content:hidden").slice(0, 4).slideDown();
        if ($(".more-content:hidden").length == 0) {
            $(".loadmore").text("وجود ندارد").addClass("noContent");
        }
    });

})