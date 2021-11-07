// Upgrade Level
growUpgradeLevel = 1;
photosynthesisUpgradeLevel = 1;

growUpgradeCost = 5;
photosynthesisUpgradeCost = 2;

setInterval(updateUpgradeButtons, 100);

function growUpgradeBuy() {
    growUpgradeLevel++;
    water -= growUpgradeCost;
    growUpgradeCost = (growUpgradeCost * 1.75).toFixed(0);
    document.getElementById("grow_upgrade_cost").innerHTML = "Cost: "+growUpgradeCost+" Water <i class='fas fa-tint'></i>";
    document.getElementById("grow_upgrade_level").innerHTML = "Level " + growUpgradeLevel;

    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
    
      sound.rate(0.5);
      sound.play();
}

function photosynthesisUpgradeBuy() {
    photosynthesisUpgradeLevel++;
    energy -= photosynthesisUpgradeCost;
    photosynthesisUpgradeCost = (photosynthesisUpgradeCost * 1.75).toFixed(0);
    energyPerSec *= 1.75;
    document.getElementById("photosynthesis_upgrade_cost").innerHTML = "Cost: "+photosynthesisUpgradeCost+" Energy <i class='fas fa-sun'></i>";
    document.getElementById("photosynthesis_upgrade_level").innerHTML = "Level " + photosynthesisUpgradeLevel;

    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
    
      sound.rate(0.5);
      sound.play();
}

function updateUpgradeButtons() {
    if(water >= growUpgradeCost) {
        document.getElementById("grow_upgrade_button").disabled = false;
    } else {
        document.getElementById("grow_upgrade_button").disabled = true;
    }

    if(energy >= photosynthesisUpgradeCost) {
        document.getElementById("photosynthesis_upgrade_button").disabled = false;
    } else {
        document.getElementById("photosynthesis_upgrade_button").disabled = true;
    }
}