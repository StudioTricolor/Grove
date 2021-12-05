leavesWaterCost = 10;
leavesEnergyCost = 5;

rootsWaterCost = 25;
rootsEnergyCost = 15;

// Building Tick
setInterval(update, 10);

function update() {
    document.getElementById("leaves_count").innerHTML = '<i class="fab fa-envira fa-1x"></i> Leaves: ' + leaves;
    document.getElementById("roots_count").innerHTML = '<i class="fas fa-seedling fa-1x"></i> Roots: ' + roots;
    if (water >= leavesWaterCost && energy >= leavesEnergyCost) {
        document.getElementById("leaves_buy").disabled = false;
    } else {
        document.getElementById("leaves_buy").disabled = true;
    }

    if (leaves > 0) {
        document.getElementById("leaves_sell").disabled = false;
    } else {
        document.getElementById("leaves_sell").disabled = true;
    }

    if (water >= rootsWaterCost && energy >= rootsEnergyCost) {
        document.getElementById("roots_buy").disabled = false;
    } else {
        document.getElementById("roots_buy").disabled = true;
    }

    if (leaves > 0) {
        document.getElementById("roots_sell").disabled = false;
    } else {
        document.getElementById("roots_sell").disabled = true;
    }
}

function buyLeaves() {
    buildingsBought++;
    document.getElementById("buildings_bought_counter").innerHTML = " Buildings Bought: "+buildingsBought;
    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
    
      sound.rate(1.5);
      sound.play();

    plantXPSec++;
    leaves++;
    energyPerSec += 0.1;
    waterPerSec += 0.1;
    metersPerSec += 0.00025;
    water -= leavesWaterCost;
    leavesWaterCost += Math.floor(leavesWaterCost * 0.35);
    energy -= leavesEnergyCost;
    leavesEnergyCost += Math.floor(leavesEnergyCost * 0.35);
    document.getElementById("water_count").innerHTML = water + "/" + waterMax;
    document.getElementById("energy_count").innerHTML = energy + "/" + energyMax;
    document.getElementById("leaves_cost").innerHTML = 'Costs: <br>'+leavesWaterCost+' Water <i class="fas fa-tint"></i> <br>'+leavesEnergyCost+' Energy <i class="far fa-sun"></i>';
}

function sellLeaves() {
    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
    
      sound.rate(0.75);
      sound.play();

    plantXPSec--;
    leaves--;
    energyPerSec -= 0.005;
    metersPerSec -= 0.00025;
    water += floor(leavesWaterCost* 0.75);
    energy += floor(leavesEnergyCost* 0.75);
    leavesWaterCost -= Math.floor(leavesWaterCost * 0.35);
    leavesEnergyCost -= Math.floor(leavesEnergyCost * 0.35);
    document.getElementById("energy_count").innerHTML = energy + "/" + energyMax;
}

function buyRoots() {
    buildingsBought++;
    document.getElementById("buildings_bought_counter").innerHTML = " Buildings Bought: "+buildingsBought;
    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
    
      sound.rate(1.5);
      sound.play();

    plantXPSec += 5;
    metersPerSec += 0.0005;
    waterPerSec += 0.5
    roots++;
    water -= rootsWaterCost;
    rootsWaterCost += Math.floor(rootsWaterCost * 0.45);
    energy -= rootsEnergyCost;
    rootsEnergyCost += Math.floor(rootsEnergyCost * 0.45);
    document.getElementById("water_count").innerHTML = water + "/" + waterMax;
    document.getElementById("energy_count").innerHTML = energy + "/" + energyMax;
    document.getElementById("roots_cost").innerHTML = 'Costs: <br>'+rootsWaterCost+' Water <i class="fas fa-tint"></i> <br>'+rootsEnergyCost+' Energy <i class="far fa-sun"></i>';

}

function sellRoots() {
    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
    
      sound.rate(0.75);
      sound.play();

    plantXPSec -= 5;
    metersPerSec -= 0.0005;
    roots--;
    water += floor(rootsWaterCost* 0.75);
    energy += floor(rootsEnergyCost* 0.75);
    rootsWaterCost -= Math.floor(rootsWaterCost * 0.35);
    rootsEnergyCost -= Math.floor(rootsEnergyCost * 0.35);
    document.getElementById("energy_count").innerHTML = energy + "/" + energyMax;
    document.getElementById("water_count").innerHTML = water + "/" + waterMax;
}