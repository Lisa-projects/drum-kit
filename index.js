
function playSound( key ) {
    switch ( key ) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();     
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();     
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();     
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();     
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();     
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();     
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();     
            break;
        default:
            console.log( this.innerHTML );
            break;
    } 
}

function animateBtn( key ) {
    var btn = document.querySelector( "." + key );
    btn.classList.add( "pressed" );

    // setTimeout( function() {
    //     deAnimateBtn( key ) 
    // }, 1000 );
}

function deAnimateBtn( key ) {
    var btn = document.querySelector( "." + key );
    btn.classList.remove( "pressed" );
}

document.addEventListener( "keydown", function( e ) {
    playSound( e.key );
    animateBtn( e.key );
} );

document.addEventListener( "keyup", function( e ) {
    deAnimateBtn( e.key );
} );


var btnList = document.getElementsByClassName( "drum" );

for ( var i=0; i<btnList.length;  i++ ) {
    btnList[i].addEventListener("mousedown", function() {
        playSound( this.innerHTML );
        animateBtn( this.innerHTML );
    });

    btnList[i].addEventListener("mouseup", function() {
        deAnimateBtn( this.innerHTML );
    });
}