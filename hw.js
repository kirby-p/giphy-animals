$(document).ready(function(){

    var instrumentButtons = [
        'guitar', 'bass', 'drums', 'trumpet', 'flute', 'clarinet', 'trombone', 'tuba', 'bassoon', 'violin', 'cello'
    ];

    for(i = 0; i < instrumentButtons.length; i++){
        var instrumentButton = $('<button>').text(instrumentButtons[i]).attr('id', instrumentButtons[i]).addClass('instrumentButton');
        $('#buttons').append(instrumentButton);

    };

    $('#addInstrument').on('click', function() {
        var newInstrument = $('#gifSearch').val().trim();
        var instrumentButton = $('<button>').text(newInstrument).attr('id', newInstrument).addClass('instrumentButton');
        $('#buttons').append(instrumentButton);
        return false;
        });

    $('#buttons').on('click', '.instrumentButton', function() {
        $('#gifs').empty();
        var newInstrument = $(this).attr('id');
        // console.log(newInstrument);

        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + newInstrument + '&api_key=dc6zaTOxFJmzC&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response){
                // console.log(response);
                var results = response.data;

                for(i = 0; i < results.length; i++){
                    var instrumentDiv = $('<div>');
                    var instrumentImage = $('<img>');
                    var p = $('<p>').text(("Rating: ") + results[i].rating);
                    // console.log(results[i].rating);

                    // console.log(i);

                    instrumentImage.attr({
                        'src': results[i].images.fixed_height.url,
                        'data-state': 'still'
                    });
                    $(instrumentDiv).append(p, instrumentImage).addClass('imageContainer');
                    $('#gifs').append(instrumentDiv);

                }
            });
            return false;
        });
})
