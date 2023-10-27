<script>
    import { page } from '$app/stores'
    export let data;

    $: my_links = data.links;

    const header = "your links";
    let split_header = header.split("");
</script>

<svelte:head>
    <title>{$page.data.session?.user.email}'s links</title>
</svelte:head>

{#if $page.data.session?.user}
<div class="flex flex-col gap-2 justify-center items-center mt-8">
    <div class="flex mb-4">
    {#each split_header as char}
        {#if char != " "}
            <span class="text-3xl font-bold text-center mt-8 transition-all inline-block ease-out delay-0 duration-300 hover:-translate-y-3 after:translate-y-0">{char}</span>
        {:else}
            <span>&nbsp;</span>
        {/if}
    {/each}
    </div>
    {#if my_links.length > 0}
        {#each my_links as link, i}
            <a href="/{link.id}" 
            class="text-xl font-semibold border-2 border-black p-2 rounded-lg bg-white transition-all ease-in duration-75 hover:opacity-75 break-all w-64 md:w-96 text-center"
            >
            {#if my_links[i].stack_name}
                <h1 class="font-bold">{my_links[i].stack_name}</h1>
            {/if}
                shortstack.link/{link.id}
            </a>
        {/each}
    {:else}
        <h1 class="text-xl border-2 border-black bg-white font-semibold p-2 rounded-lg opacity-50">no stacks here...</h1>
    {/if}
</div>
{:else}
    <h1 class="text-3xl font-bold text-center">please log in to view this page!</h1>
{/if}