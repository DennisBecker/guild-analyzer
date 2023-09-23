<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<style>

</style>

<header>
    <h1>Guild List</h1>
</header>

<main>
    <table>
        <thead>
            <tr>
                <th>Guild</th>
                <th>Members</th>
                <th>Galactic Power</th>
                <th>Average Galactic Power</th>
            </tr>
        </thead>
        <tbody>
            {#each data.guilds as guild}
                <tr>
                    <td class="name"><a href="/guild/{guild.guildId}">{guild.name}</a></td>
                    <td class="numbers">{guild.members.length} / 50</td>
                    <td class="power">{guild.galacticPower.toLocaleString()}</td>
                    <td class="power">{guild.avgGalacticPower.toLocaleString()}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>
