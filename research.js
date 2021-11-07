setTimeout(updateResearch, 100);

function updateResearch() {
    if(water < 15) {
        document.getElementById("smart_roots_card").opacity = 0.50;
    } else if(water >= 15) {
        document.getElementById("smart_roots_card").opacity = 1;
    }

    if(energy < 10) {
        document.getElementById("internal_clock_card").opacity = 0.50;
    } else if(energy >= 10) {
        document.getElementById("internal_clock_card").opacity = 1;
    }

    if(energy < 25) {
        document.getElementById("plant_communication_card").opacity = 0.50;
    } else if(energy >= 25) {
        document.getElementById("plant_communication_card").opacity = 1;
    }

    if(water < 35) {
        document.getElementById("external_senses_card").opacity = 0.50;
    } else if(water >= 35) {
        document.getElementById("external_senses_card").opacity = 1;
    }

    if(energy < 50) {
        document.getElementById("plant_health_card").opacity = 0.50;
    } 
    
    if(energy >= 50) {
        document.getElementById("plant_health_card").opacity = 1;
    }

    if(water < 50) {
        document.getElementById("plant_temperament_card").opacity = 0.50;
    } else if(water >= 50) {
        document.getElementById("plant_temperament_card").opacity = 1;
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

function buyPlantCommunication() {
    if(energy >= 25) {
        var sound = new Howl({
            src: ['sound/click_research.ogg'],
          });
        
          sound.play();

          energy -= 25;
          document.getElementById("plant_communication_card").hidden = true;
          document.getElementById("social_button").hidden = false;
          plantCommunication = true;
    }
}

function buyExternalSenses() {
    if(water >= 35) {
        var sound = new Howl({
            src: ['sound/click_research.ogg'],
          });
        
          sound.play();

          water -= 35;
          document.getElementById("external_senses_card").hidden = true;
          externalSenses = true;
    }
}

function buyPlantHealth() {
    if(energy >= 50) {
        var sound = new Howl({
            src: ['sound/click_research.ogg'],
          });
        
          sound.play();

          energy -= 50;
          document.getElementById("plant_health_card").hidden = true;
          plantHealth = true;
    }
}

function buyPlantTemperament() {
    if(water >= 50) {
        var sound = new Howl({
            src: ['sound/click_research.ogg'],
          });
        
          sound.play();

          water -= 50;
          document.getElementById("plant_temperament_card").hidden = true;
          plantTemperament = true;
    }
}