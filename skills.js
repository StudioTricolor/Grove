/// Player Skills
resistance = 1;
absorption = 1;
growth = 1;
perception = 1;
luck = 1;

function buyResistance() {
    if(plantSkillPoints > 0) {
        plantSkillPoints--;
        resistance++;
        document.getElementById("resistance_display").innerHTML = resistance;

        var sound = new Howl({
            src: ['sound/snd_mutation_buy.wav'],
          });
        
          sound.rate(3);
          sound.play();
    }
}

function buyAbsorption() {
    if(plantSkillPoints > 0) {
        plantSkillPoints--;
        absorption++;
        document.getElementById("absorption_display").innerHTML = absorption;

        var sound = new Howl({
            src: ['sound/snd_mutation_buy.wav'],
          });
        
          sound.rate(3);
          sound.play();
    }
}

function buyGrowth() {
    if(plantSkillPoints > 0) {
        plantSkillPoints--;
        growth++;
        document.getElementById("growth_display").innerHTML = growth;

        var sound = new Howl({
            src: ['sound/snd_mutation_buy.wav'],
          });
        
          sound.rate(3);
          sound.play();
    }
}

function buyPerception() {
    if(plantSkillPoints > 0) {
        plantSkillPoints--;
        perception++;
        document.getElementById("perception_display").innerHTML = perception;

        var sound = new Howl({
            src: ['sound/snd_mutation_buy.wav'],
          });
        
          sound.rate(3);
          sound.play();
    }
}

function buyLuck() {
    if(plantSkillPoints > 0) {
        plantSkillPoints--;
        luck++;
        document.getElementById("luck_display").innerHTML = luck;

        var sound = new Howl({
            src: ['sound/snd_mutation_buy.wav'],
          });
        
          sound.rate(3);
          sound.play();
    }
}