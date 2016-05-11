$(document).ready(function(){

    var instrumentButtons = [
        'guitar', 'bass', 'drums', 'trumpet', 'flute', 'clarinet', 
        'trombone', 'tuba', 'bassoon', 'violin', 'cello'
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
                var results = response.data;
                console.log(results);

                for(i = 0; i < results.length; i++){
                    var instrumentDiv = $('<div>');
                    var instrumentImage = $('<img>');
                    var p = $('<p>').text(("Rating: ") + results[i].rating);


                    instrumentImage.attr({
                        'src': results[i].images.fixed_height_still.url,
                        'data-state': 'still',
                        'data-still': results[i].images.fixed_height_still.url,
                        'data-animate': results[i].images.fixed_height.url,
                        'class': 'instrumentImage'
                    });
                    // console.log(instrumentImage.attr('src'));

                    $('#gifs').append(p, instrumentImage);
                    // $('#gifs').append(instrumentDiv);
                }
               
                $('.instrumentImage').on('click', function(){
                    var state = $(this).attr('data-state');
                    console.log(state);

                    if(state == 'still'){
                        $(this).attr('src', $(this).data('animate'));
                        $(this).attr('data-state', 'animate');
                    }
                    else{
                        $(this).attr('src', $(this).data('still'));
                        $(this).attr('data-state', 'still');
                    }
                });
            });
            return false;
        });


})
