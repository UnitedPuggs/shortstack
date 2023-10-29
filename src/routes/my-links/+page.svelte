<script>
    import { page } from '$app/stores'
    import { invalidateAll } from '$app/navigation'
    export let data;

    $: my_links = data.links;

    const header = "your links";
    let split_header = header.split("");

    async function delete_stack(id) {
        await fetch('/api/stack/delete_stack', {
            method: "DELETE",
            body: JSON.stringify({ id: id })
        })
        invalidateAll();
    }
</script>

<svelte:head>
    <title>{$page.data.session?.user.email}'s links</title>
</svelte:head>

{#if $page.data.session?.user.email == data.links[0].created_by}
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
            <div class="border-2 border-black p-2 rounded-lg bg-white w-64 lg:w-[24rem] flex flex-col text-center">
                <a href="/{link.id}" 
                class="text-xl font-semibold transition-all ease-in duration-75 hover:opacity-75 break-all"
                >
                {#if my_links[i].stack_name}
                    <h1 class="font-bold">{my_links[i].stack_name}</h1>
                {/if}
                    shortstack.link/{link.id}
                </a>
                <button class="text-lg transition ease-in-out hover:scale-105" on:click={() => delete_stack(link.id)}>🚫</button>
            </div>
        {/each}
    {:else}
        <h1 class="text-xl border-2 border-black bg-white font-semibold p-2 rounded-lg opacity-50">no stacks here...</h1>
    {/if}
</div>
{:else}
    <h1 class="text-3xl font-bold text-center">please log in to view this page!</h1>
{/if}