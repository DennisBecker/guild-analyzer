/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params}) {
    const guildsResponse = await fetch('http://localhost:8080/guilds', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const playersResponse = await fetch('http://localhost:8080/guild/' + params.guildId + '/member', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const guilds = await guildsResponse.json();
    const players = await playersResponse.json();

    const guild = guilds.filter(guild => guild.guildId === params.guildId)[0];

    const playerList = Object.values(players).map(player => {
        
        const playerInfo = Object.values(player.playerInformation)[0];

        const units = Object.values(player.units)[0];
        
        return {
            allycode: player.allycode,
            name: player.name,
            galacticPower: playerInfo.galacticPower,
            characterGalacticPower: playerInfo.characterGalacticPower,
            shipGalacticPower: playerInfo.shipGalacticPower,
            units: units
        };
    });

    playerList.sort((a, b) => a.galacticPower > b.galacticPower ? -1 : a.galacticPower === b.galacticPower ? 0 : 1);
    
    return {guild, playerList};
}