<style>
    :global(html, body) {
        position: relative;
        width: 100%;
        height: 100%;
    }
    :global(body) {
        background: #202428;
        color: #EEE;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: "Helvetica Neue", sans-serif;
    }
    :global(a) {
        color: #00aaff;
        text-decoration: none;
    }
    :global(a:hover) {
        text-decoration: underline;
    }
    :global(main) {
        padding: 20px;
    }
    :global(table) {
        border: 1px solid #181b1f;
        border-collapse: collapse;
    }
    :global(thead) {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }
    :global(th) {
        border: 1px solid #181b1f;
        padding: 0.25em 0.5em;
    }
    :global(tr:nth-child(odd)) {
        background: #383b3f;
    }
    :global(tr:nth-child(even)) {
        background: #282b2f;
    }
    :global(td) {
        text-align: right;
        border: 1px solid #181b1f;
        line-height: 1;
        padding: 0.1em 0.5em;
        white-space: nowrap;
        height: 2em;
    }
    :global(td.name) {
        text-align: left;
    }
    :global(.missing .success-0) {
        background: rgba(255, 0, 0, 0.2);
    }
    :global(td.numbers) {
        position: relative;
        padding: 0;
        text-align: center;
        width: 5.5rem;
    }
    :global(td.power) {
        position: relative;
        padding: 0;
        text-align: center;
    }
</style>

<svelte:head>
	<title>Guild Analyzer</title>
</svelte:head>

<slot></slot>