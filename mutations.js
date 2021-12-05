/// Function Variables
var hasUnusualHeight = false;
setTimeout(updateMutations, 100);

function getMutationPoint() {
    document.getElementById("mutation_button").disabled = false;
    mutationPoints++;
    document.getElementById("mutation_point_display").innerHTML = "You have "+mutationPoints+" Mutation Points";
    let div = document.createElement('div');
    div.innerHTML = "<p class='slide-in-left'><i style='color: #f04f78;' class='fas fa-level-up-alt'></i> You gained a mutation point!</p>";
    document.getElementById("messages_log_window").appendChild(div);
}

function updateMutations() {
    if(mutationPoints > 0) {
        document.getElementById("unusual_height_button").disabled = false;
    } else {
        document.getElementById("unusual_height_button").disabled = true;
    }
}

function getUnusualHeight() {
    if(mutationPoints > 0) {
        $('#firstMutationAlert').modal('show');
          
        var sound = new Howl({
              src: ['sound/event_warning.ogg']
            });
          
        sound.play();
    }
}

function buyUnusualHeight() {
    mutationPoints--;
        document.getElementById("mutation_point_display").innerHTML = "You have "+mutationPoints+" Mutation Points";

        hasUnusualHeight = true;
        document.getElementById("unusual_height_container").hidden = true;

    mutationBuy.play();
    $('#firstMutationAlert').modal('hide');
}

function unusualHeightClose() {
    $('#firstMutationAlert').modal('hide');
}

function bruh() {
    $(function(){

        $('.element').bezier();
    
    });
}

var mutationBuy = new Howl({
    src: ['sound/snd_mutation_buy.wav'],
});