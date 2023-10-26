<script>
    export let data;

    $: links = data.links[0];

    let split_name = "";
    if(data.links[0].stack_name)
        split_name = data.links[0].stack_name.split("")

    async function test() {
        const url = "https://shortstack.link"
        const res = await fetch(url)
        const desc = await res.text();

        console.log(desc)
    }
</script>

<svelte:head>
    <title>short(stacked) link 🥞</title>
</svelte:head>

<div class="flex justify-center items-center">
<button on:click={test}>test</button>
{#if split_name}
    {#each split_name as char}
        {#if char != " "}
            <span class="text-3xl font-bold text-center mt-8 transition-all inline-block ease-out delay-0 duration-[300ms] hover:-translate-y-3 after:translate-y-0">{char}</span>
        {:else}
            <span>&nbsp;</span>
        {/if}
    {/each}
{/if}
</div>
<div class="flex flex-col gap-2 justify-center items-center mt-4 border-2 bg-amber-300 border-amber-500 w-fit mx-auto p-2 rounded-lg">
    {#each links.links as link}
        <a href={link} target="_blank" class="rounded-lg bg-white text-black font-bold w-56 md:w-96 px-1 py-0.5 break-all border border-black hover:opacity-75 max-h-32 overflow-hidden">
            {link}
        </a>
    {/each}
</div>