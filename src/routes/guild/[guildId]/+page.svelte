<script>
    import { page } from '$app/stores';
	import { construct_svelte_component } from 'svelte/internal';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<header>
    <h1>Guilds Analyzer</h1>
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
</header>

<h2>{data.guild.name}</h2>

<main>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Player</th>
                <th># Units</th>
                <th>Galactic Power</th>
                <th>Character Galactic Power</th>
                <th>Ship Galactic Power</th>
            </tr>
        </thead>
        <tbody>
            {#each data.playerList as player, i}
                <tr>
                    <td class="number">{i+1}</td>
                    <td class="name"><a href="/player/{player.allycode}">{player.name}</a></td>
                    <td class="number">{player.units.length}</td>
                    <td class="power">{player.galacticPower.toLocaleString()}</td>
                    <td class="power">{player.characterGalacticPower.toLocaleString()}</td>
                    <td class="power">{player.shipGalacticPower.toLocaleString()}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>