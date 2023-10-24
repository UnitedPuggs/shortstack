<script>
    export let data;

    $: links = data.links[0];
</script>

<div class="flex flex-col gap-2 justify-center items-center mt-10 border-2 border-gray-400 w-fit mx-auto p-2 rounded-lg">
    {#each links.links as link}
        <a href={link} target="_blank" class="rounded-lg bg-white text-black font-bold w-96 px-1 py-0.5 break-all border border-black hover:opacity-75">
            {link}
        </a>
    {/each}
</div>