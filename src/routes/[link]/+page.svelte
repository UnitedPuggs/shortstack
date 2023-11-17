<script>
    export let data;

    $: links = data.links[0];

    let split_name = "";
    if(data.links[0].stack_name)
        split_name = data.links[0].stack_name.split("")

</script>

<svelte:head>
    <title>short(stacked) link 🥞</title>
</svelte:head>

<div class="flex justify-center items-center">
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
    {#each links.links as link, i}
        <a href={link} target="_blank" class="break-all hover:opacity-75">
            <div class="has-tooltip w-56 lg:w-96 max-h-32 rounded-lg bg-white text-black font-bold border border-black px-1 py-0.5 overflow-hidden">
                <section class="tooltip border-2 border-black rounded-lg p-2 bg-white max-w-lg whitespace-pre-wrap ml-96">
                    <span>{links.metadata[i].description}</span>
                    <img src={links.metadata[i].image} alt="meow" class="rounded-lg border-2 border-black drop-shadow-lg">
                </section>
                {link}
            </div>
        </a>
    {/each}
</div>