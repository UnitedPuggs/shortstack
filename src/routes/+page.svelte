<script>
    import { goto } from '$app/navigation'

    let links = [];
    let link;
    let link_slug;

    async function add_link() {
        if(link) {        
            links.unshift(link);
            link = "";
            links = links;
        }
    }

    async function create_stack() {
        if(links.length > 0) {
            await fetch('/api/stack/create_stack', {
                method: "POST",
                body: JSON.stringify({links: links}),
            })
            .then(res => res.json())
            .then(res => {
                link_slug = res.data[0].id
                link_slug = link_slug
            })
            goto(`/${link_slug}`)
        }
    }
</script>

<div class="flex flex-col justify-center items-center mt-24">
    <input type="text" placeholder="put your link here!" class="rounded-lg px-1 py-0.5 w-56 md:w-96 border border-gray-300" bind:value={link}>
    <div class="flex flex-col md:flex-row gap-2 mb-2 mt-2">
        <button class="border-2 bg-black text-white p-2 rounded-full font-bold transition ease-in-out hover:scale-110" on:click={add_link}>add link</button>
        <button class="border-2 bg-black text-white py-2 px-3 rounded-full font-bold transition ease-in-out hover:scale-110" on:click={create_stack}>stack!</button>
    </div>
    {#if links.length > 0}
    <div class="flex flex-col gap-2 ml-2 border-2 bg-gradient-to-r from-cyan-500 to-blue-500 border-gray-400 p-3 rounded-lg max-h-[calc(100vh-300px)] overflow-y-auto">
        {#each links as link}
            <div class="rounded-lg bg-white text-black font-bold w-56 md:w-96 px-1 py-0.5 break-all border border-black drop-shadow-lg">
                {link}
            </div>
        {/each}
    </div>
    {/if}
</div>