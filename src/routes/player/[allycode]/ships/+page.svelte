<script>
    /** @type {import('./$types').PageData} */
    export let data;

    function calcPowerDiff(unit, dataPointIndex) {

        if (data.player.units[data.dataPoints[dataPointIndex]] !== undefined) {
            const compareUnit = data.player.units[data.dataPoints[dataPointIndex]].filter(u => u.baseId === unit.baseId)[0];
            const powerDiff = unit.power - compareUnit.power;

            if (powerDiff > 0) {
                return "+" + powerDiff;
            }

            if (powerDiff < 0) {
                return powerDiff;
            }
        }

        return '';
    }

    function powerDiffColor(unit, dataPointIndex) {

        if (data.player.units[data.dataPoints[dataPointIndex]] !== undefined) {
            const compareUnit = data.player.units[data.dataPoints[dataPointIndex]].filter(u => u.baseId === unit.baseId)[0];
            const powerDiff = unit.power - compareUnit.power;

            if (powerDiff > 0) {
                return "green";
            }

            if (powerDiff < 0) {
                return "red";
            }
        }

        return '';
    }
</script>

<header>
    <h1>Guilds Analyzer</h1>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/guild/{data.player.guildId}">{data.player.guildName}</a></li>
        <li><a href="/player/{data.player.allycode}">{data.player.name} Overview</a></li>
    </ul>
</header>

<h2>{data.player.name}</h2>

<main>
    <h3>Ships</h3>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Character</th>
                <th>Power</th>
                <th>Power diff<br>1 week</th>
                <th>Power diff<br>1 month</th>
                <th>Rarity</th>
                <th>Level</th>
            </tr>
        </thead>
        <tbody>
            {#each data.player.units[data.dataPoints[0]] as unit, i}
            <tr>
                <td>{i+1}</td>
                <td class="name">{unit.name}</td>
                <td class="power">{unit.power.toLocaleString()}</td>
                <td class="power"><span style="color: {powerDiffColor(unit, 1)}">{calcPowerDiff(unit, 1)}</span></td>
                <td class="power"><span style="color: {powerDiffColor(unit, 3)}">{calcPowerDiff(unit, 3)}</span></td>
                <td class="numbers">{unit.rarity} / 7</td>
                <td class="numbers">{unit.level}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</main>