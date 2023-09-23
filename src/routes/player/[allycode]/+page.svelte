<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.dataPoints);

    function calcPowerDiff(unit) {

        const compareUnit = data.player.units[data.dataPoints[1]].filter(u => u.baseId === unit.baseId)[0];
        const powerDiff = unit.power - compareUnit.power;

        if (powerDiff > 0) {
            return "+" + powerDiff;
        }

        if (powerDiff < 0) {
            return "-" + powerDiff;
        }

        return '';
    }

    function powerDiffColor(unit) {

        const compareUnit = data.player.units[data.dataPoints[1]].filter(u => u.baseId === unit.baseId)[0];
        const powerDiff = unit.power - compareUnit.power;

        if (powerDiff > 0) {
            return "green";
        }

        if (powerDiff < 0) {
            return "red";
        }

        return '';
    }
</script>

<header>
    <h1>Guilds Analyzer</h1>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/guild/{data.player.guildId}">{data.player.guildName}</a></li>
    </ul>
</header>

<h2>{data.player.name}</h2>

<nav>
    <ul>
        <li><a href="/player/{data.player.allycode}/characters">Characters</a></li>
        <li><a href="/player/{data.player.allycode}/ships">Ships</a></li>
    </ul>
</nav>

<main>
    <h3>Galactic Legends</h3>
    <table>
        <thead>
            <tr>
                <th>Character</th>
                <th>Power</th>
                <th>Rarity</th>
                <th>Level</th>
                <th>Gear</th>
                <th>Relic</th>
            </tr>
        </thead>
        <tbody>
            {#each data.player.units[data.dataPoints[0]] as unit}
            {#if unit.isGalacticLegend === true}
            <tr>
                <td class="name">{unit.name}</td>
                <td class="power">{unit.power.toLocaleString()}</td>
                <td class="numbers">{unit.rarity} / 7</td>
                <td class="numbers">{unit.level}</td>
                <td class="numbers">{unit.gearLevel} / 13</td>
                {#if unit.relicTier-2 > 0 }
                <td class="numbers">{unit.relicTier-2} / 9</td>
                {:else}
                <td></td>
                {/if}
                
            </tr>
            {/if}
        {/each}
        </tbody>
    </table>
</main>