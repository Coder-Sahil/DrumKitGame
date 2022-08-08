

document.querySelectorAll(".drum")
    .forEach(button => button.addEventListener("click", handleClick));

document.addEventListener("keypress", handleKeyPress);


function handleClick()
{
    var buttonInnerHTML = this.innerHTML;    
    makeSoundAndAnimation(buttonInnerHTML);   
}

function handleKeyPress (event)
{
    var keyPress = event.key;
    makeSoundAndAnimation(keyPress);
}

function makeSoundAndAnimation(soundKey)
{
    switch (soundKey) {
        case 'w':
            var audio = new Audio("static/sounds/tom-1.mp3");
            audio.play();
            animate("w");
            break;
        case 'a':
            var audio = new Audio("static/sounds/tom-2.mp3");
            audio.play();     
            animate("a");   
            break;
        case 's':
            var audio = new Audio("static/sounds/tom-3.mp3");
            audio.play();     
            animate("s");   
            break;
        case 'd':
            var audio = new Audio("static/sounds/tom-4.mp3");
            audio.play();     
            animate("d");   
            break;
        case 'j':
            var audio = new Audio("static/sounds/snare.mp3");
            audio.play();     
            animate("j");   
            break;
        case 'k':
            var audio = new Audio("static/sounds/crash.mp3");
            audio.play();     
            animate("k");   
            break;
        case 'l':
            var audio = new Audio("static/sounds/kick-bass.mp3");
            audio.play();     
            animate("l");   
            break;
    
        default:
            break;
    }

}

function animate (keypress)
{
    var keyElement = document.querySelector("."+keypress);
    keyElement.classList.add("pressed");
    setTimeout( function() {
        keyElement.classList.remove("pressed");
    }, 100);
}