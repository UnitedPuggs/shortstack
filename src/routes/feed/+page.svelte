<script>
    export let data;
</script>

<svelte:head>
    <title>shortstack feed 🥞</title>
</svelte:head>

<div class="flex flex-col justify-center items-center mt-4">
    <h1 class="text-3xl font-bold">Newly created stacks!</h1>
    <div class="grid mt-4 gap-4 grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] w-full justify-items-center">
        {#each data.feed as feed}
            <a href="/{feed.stack_id}">
                <div 
                class="flex flex-col justify-center items-center border-2 border-black bg-white rounded-lg p-2 hover:opacity-80 w-32 lg:w-72 h-32 overflow-clip break-all">
                    <span class="font-bold text-lg">{feed.stack_name}</span>
                    <span class="text-sm lg:text-base">https://shortstack.link/{feed.stack_id}</span>
                </div>
            </a>
        {/each}
    </div>
</div>