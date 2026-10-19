let gamePlayers = {};

let playerSprites = {};


function startPlayers() {

    database.ref("matchmakeroom/players").on("value", function(data) {

        gamePlayers = data.val() || {};

        console.log("Players:", gamePlayers);

    });

}


function drawPlayers() {

    for (let id in gamePlayers) {

        let player = gamePlayers[id];


        if (!playerSprites[id]) {

            let sprite = createSprite(
                player.x,
                player.y,
                40,
                60
            );


            if (player.number === 1) {

                sprite.shapeColor = "blue";

            }

            else {

                sprite.shapeColor = "red";

            }


            playerSprites[id] = sprite;

        }


        playerSprites[id].position.x = player.x;

        playerSprites[id].position.y = player.y;

    }


    drawSprites();

}