plantName = "";
plantType = "";
plantLvl = 0;
plantXp = 0;
plantMaxXp = 25;

sprouted = false;

// Player Resources
water = 0;
waterMax = 100;

// Player Achievements
achv_aNewBeginning = false;

function moonflowerSelect() {
    plantType = "moon_flower";
    document.getElementById("plant_selection").hidden = true;
    document.getElementById("main_game").hidden = false;
    updatePlantType();
}

function bleedingHeartSelect() {
    plantType = "bleeding_heart";
    document.getElementById("plant_selection").hidden = true;
    document.getElementById("main_game").hidden = false;
    updatePlantType();
}

function morningGlorySelect() {
    plantType = "morning_glory";
    document.getElementById("plant_selection").hidden = true;
    document.getElementById("main_game").hidden = false;
    updatePlantType();
}