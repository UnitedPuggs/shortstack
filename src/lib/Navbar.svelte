<script>
    import { page } from '$app/stores'
    import { signOut } from '@auth/sveltekit/client'
</script>

<nav class="flex flex-col justify-center items-center lg:flex-row flex-wrap bg-white p-4 rounded-lg drop-shadow-lg sticky top-0 z-50">
    <section class="flex items-center gap-2">
        <a class="text-3xl font-bold transition ease-linear duration-100 hover:opacity-50 flex flex-row" href="/">
            shortstack
            <img src="/assets/pancake.png" alt="smiling pancake" class="w-10 h-10 drop-shadow transition ease-linear hover:-translate-y-1">
        </a>
    </section>
    <section class="flex lg:ml-auto lg:mr-0 gap-2">
        <a href="/feed" class="text-2xl font-bold hover:opacity-75">feed</a>
        {#if !$page.data.session?.user}
            <a class="text-2xl font-bold hover:opacity-75" href="/login">login</a>
        {:else}
            <a href="my-links" class="text-2xl font-bold hover:opacity-75">my links</a>
            <a on:click={() => signOut()} class="text-2xl font-bold hover:opacity-75" href="/">log out</a>
        {/if}
    </section>
</nav>