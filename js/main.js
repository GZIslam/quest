var input = $('#input');
var firstScreen = $('#true');
var secondScreen = $('#false');

function answer(){
    var answ = input.val();
    if(answ == '30'){
        firstScreen.removeClass('off');
        firstScreen.addClass('on');
    }
    else{
        secondScreen.removeClass('off');
        secondScreen.addClass('on');
    }
}

