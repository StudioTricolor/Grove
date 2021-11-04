setTimeout(update, 1000);

function update() {
    if(water < 15) {
        document.getElementById("smart_roots_card").opacity = 0.50;
    } else {
        document.getElementById("smart_roots_card").opacity = 1;
    }

    if(energy < 10) {
        document.getElementById("internal_clock_card").opacity = 0.50;
    } else {
        document.getElementById("internal_clock_card").opacity = 1;
    }
}

function buySmartRoots() {
    if(water >= 15) {
        var sound = new Howl({
            src: ['sound/click_research.ogg'],
          });
        
          sound.play();

        water -= 15;
        document.getElementById("roots_container").hidden = false;
        document.getElementById("smart_roots_card").hidden = true;
        roots++;
        document.getElementById("roots_count").innerHTML = '<i class="fab fa-envira fa-1x"></i> Roots: '+roots+'</h4>'
        waterPerSec += 0.2;
        smartRoots = true;
        plantXPSec += 5;
        metersPerSec += 0.0001;
    }
}

function buyInternalClock() {
    if(energy >= 10) {
        var sound = new Howl({
            src: ['sound/click_research.ogg'],
          });
        
          sound.play();

        energy -= 10;
        document.getElementById("time_display").hidden = false;
        document.getElementById("internal_clock_card").hidden = true;
        internalClock = true;
    }
}