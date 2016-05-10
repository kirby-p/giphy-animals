$('#addAnimal').on('click', function() {
    $('#gifs').empty();
    var newAnimal = $('#gifSearch').val().trim();
    console.log(newAnimal);

    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + newAnimal + '&api_key=dc6zaTOxFJmzC&limit=10';

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .done(function(response){
            console.log(response);
            var results = response.data;

            for(i = 0; i < results.length; i++){
                var animalImage = $('<img>');

                animalImage.attr('src', results[i].images.fixed_height.url);
                $('#gifs').append(animalImage);

            }
        });
        return false;
});
