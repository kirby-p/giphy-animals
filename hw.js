$(document).ready(function(){

    $('#addAnimal').on('click', function() {
        var newAnimal = $('#gifSearch').val().trim();
        var animalButton = $('<button>').text(newAnimal).attr('id', newAnimal).addClass('animalButton');
        $('#buttons').append(animalButton);
        return false;
        });

    $('#buttons').on('click', '.animalButton', function() {
        $('#gifs').empty();
        var newAnimal = $(this).attr('id');
        // console.log(newAnimal);

        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + newAnimal + '&api_key=dc6zaTOxFJmzC&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response){
                // console.log(response);
                var results = response.data;

                for(i = 0; i < results.length; i++){
                    var animalDiv = $('<div>');
                    var animalImage = $('<img>');
                    var p = $('<p>').text(("Rating: ") + results[i].rating);
                    // console.log(results[i].rating);
                    console.log(i);

                    animalImage.attr('src', results[i].images.fixed_height.url);
                    $(animalDiv).append(p, animalImage).addClass('imageContainer');
                    $('#gifs').append(animalDiv);

                }
            });
            return false;
        });
})
