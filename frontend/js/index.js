function updateLeaderboard(data){
    let places = data.length;
    let leaderboardDiv = document.getElementById("leaderboardDiv");
    let items = leaderboardDiv.getElementsByTagName("div");
    let numItems = items.length;
    
    let i;
    for(i = 0; i < numItems; i++){
        items[0].remove();
    }

    let mainDiv;
    let subDiv1;
    let subDiv2;
    let subP;
    let subP2;
    for(i = 0; i < numItems; i++){

    }

}

let counter = document.getElementById("counter");

function playNumberCounterAnim(num){
    let x = 0;
    let increment = Math.floor(num / 150);
    //calculate increment so it finishes in 1.5 seconds

    counter.innerHTML = x.toLocaleString('en', {useGrouping:true});

    //animation 60fps
    function loop(){
        x += increment;
        if( x > (num - increment) ){
            x = num;
            counter.innerHTML = x.toLocaleString('en', {useGrouping:true});
            return;
        }
        counter.innerHTML = x.toLocaleString('en', {useGrouping:true});
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    return 1;
}

playNumberCounterAnim(10000000);