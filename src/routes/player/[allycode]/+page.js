/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params}) {

     const playerResponse = await fetch('http://localhost:8080/player/' + params.allycode, {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const player = await playerResponse.json();

    return {player: player, dataPoints: Object.keys(player.playerInformation)};
}