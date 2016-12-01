$(document).ready(function() {
    $("#search").on('click', function() {
        var word = $("#word").val();
        var url = "https://pl.wikipedia.org/w/api.php?action=opensearch&search=" + word + "&format=json&callback=?";
        //API Wikipedia
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: 'json',
            success: function(result) {
                //header console.log(result[1][0]);
                //description console.log(result[2][0])
                //link console.log(result[3][0])
                $("#result").html('');
                for (var i = 0; i < result[1].length; i++) { //wyświetlanie wynikow
                    $("#result").append("<li class='list-group-item'><a href=" + result[3][i] + " target = '_blank'>" + result[1][i] + "</a><p>" + result[2][i] + "</p></li><br>");
                }
                $("#word").val('');
                $(".list-group-item").mouseenter(function() {
                  $(this).fadeTo('fast', 1);
                });
                $(".list-group-item").mouseleave(function() {
                  $(this).fadeTo('fast', 0.85);
                });
            },
            error: function(error) {
                alert("error");
            }
        });
    });

    $("#word").keypress(function(e) { //wyszukiwanie po kliknięciu enter
        if (e.which == 13) {
            $("#search").click();
        }
    });
    $("#random").on('click', function() {
      window.open("https://pl.wikipedia.org/wiki/Special:Random");
    });
});
