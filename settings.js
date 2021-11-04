var centerContent = true;

function musicVolumeChange() {
    var musicVolume = document.getElementById("volume_range").value;
    sound.volume(musicVolume);
    console.log("bruh");
}

function centerContentChange() {
    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
    
      sound.rate(1.5);
      sound.play();

    if(centerContent == true) {
        centerContent = false;
        document.getElementsByTagName("body")[0].className = "";
    } else {
        centerContent = true;
        document.getElementsByTagName("body")[0].className = "container mt-3";
    }
}