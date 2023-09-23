/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params}) {
    const response = await fetch('http://localhost:8080/guilds', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const guilds = await response.json();
    
    return {guilds: guilds};
}