plantName = "";
plantType = "";
plantLvl = 0;
plantXp = 0;
plantMaxXp = 25;
plantHeight = 0;

mutationPoints = 0;

sprouted = false;

// Player Resources
water = 0;
energy = 0;
energyMax = 25;
waterMax = 100;
nitrogen = 50;
phosphorus = 50;
potassium = 50;

// Research
smartRoots = false;
internalClock = false;

// Gains a Sec
plantXPSec = 0;
metersPerSec = 0;
energyPerSec = 0.1;
waterPerSec = 0;

// Buildings
leaves = 0;
roots = 0;

// Player Achievements
achv_aNewBeginning = false;

function sunflowerSelect() {
    plantType = "sun_flower";
    document.getElementById("plant_selection").hidden = true;
    document.getElementById("main_game").hidden = false;
    updatePlantType();
    let div = document.createElement('div');
        div.innerHTML = "<p class='slide-in-left'><i class='fas fa-seedling'></i> You're a Sunflower! </p>";
        document.getElementById("messages_log_window").appendChild(div);
    document.getElementById("plant_display").hidden = false;

    var click = new Howl({
        src: ['sound/click.ogg'],
      });
    
      click.play();
}

function bleedingHeartSelect() {
    plantType = "bleeding_heart";
    document.getElementById("plant_selection").hidden = true;
    document.getElementById("main_game").hidden = false;
    updatePlantType();
    let div = document.createElement('div');
        div.innerHTML = "<p class='slide-in-left'><i class='fas fa-seedling'></i> You're a Bleeding Heart! </p>";
        document.getElementById("messages_log_window").appendChild(div);
    document.getElementById("plant_display").hidden = false;

    var click = new Howl({
        src: ['sound/click.ogg'],
      });
    
      click.play();
}


function morningGlorySelect() {
    plantType = "morning_glory";
    document.getElementById("plant_selection").hidden = true;
    document.getElementById("main_game").hidden = false;
    updatePlantType();
    let div = document.createElement('div');
        div.innerHTML = "<p class='slide-in-left'><i class='fas fa-seedling'></i> You're a Morning Glory! </p>";
        document.getElementById("messages_log_window").appendChild(div);
    document.getElementById("plant_display").hidden = false;

    var click = new Howl({
        src: ['sound/click.ogg'],
      });
    
      click.play();
}