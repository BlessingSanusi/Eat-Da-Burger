// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burgerName = {
            burger_name: $("#ca").val().trim()

        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerName
        }).then(
            function () {
                console.log("about to devour a burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devourBtn").on("click", function (event) {
        console.log(event.target);
        // var id = $(this).data("id");
        // var burgerDev = $(this).data('dev');

        // var newDev = {
        //     devoured: burgerDev
        // }


        // Send the PUT request.
        $.ajax("/api/burgers/" + event.target.value, {
            type: "PUT",
            data: {
                devoured: 1
            }
        }).then(
            function () {
                $('.burger_devoured').remove();
                location.reload();
            }
        );
    });
});