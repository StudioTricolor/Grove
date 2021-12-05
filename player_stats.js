setTimeout(addSecond, 1000);

plantName = "";
plantType = "";
plantLvl = 0;
plantXp = 0;
plantMaxXp = 25;
plantHeight = 0;
plantMaxHeight = 3;
plantSkillPoints = 0;
skillPointRequirement = 5;

mutationPoints = 0;
mutationPointRequirement = 10;

sprouted = false;

hoursPlayed = 0;
minutesPlayed = 0;
secondsPlayed = 0;

growClicks = 0;

buildingsBought = 0;

// Player Resources
water = 0;
energy = 0;
energyMax = 25;
waterMax = 100;
nitrogen = 50;
phosphorus = 50;
potassium = 50;

// Religion
followers = 0;

// Research
smartRoots = false;
internalClock = false;
plantCommunication = false;
externalSenses = false;
plantHealth = false;
plantTemperament = false;

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
achv_gettingSomewhere = false;

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

function addSecond() {
    secondsPlayed++;
    if (secondsPlayed == 60) {
        minutesPlayed++;
        secondsPlayed = 0;
    }
    if (minutesPlayed == 60) {
        hoursPlayed++;
        minutesPlayed = 0;
    }
    setTimeout(addSecond, 1000);
    document.getElementById("time_played_counter").innerHTML =" Time Played: " +  hoursPlayed + ":" + minutesPlayed + ":" + secondsPlayed;
}