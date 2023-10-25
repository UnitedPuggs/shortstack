<script>
    import { signIn } from '@auth/sveltekit/client';
</script>

<svelte:head>
    <title>shortstack login</title>
</svelte:head>

<div class="flex flex-col gap-4 justify-center items-center mt-10">
    <button on:click={() => signIn("google")} 
        class="p-2 border-2 border-black rounded-lg bg-white text-black text-2xl font-bold transition ease-linear duration-300 hover:box-shadow hover:-translate-x-1"
        >
    log in with Google
    </button>
    <button on:click={() => signIn("discord")} 
        class="p-2 border-2 border-black rounded-lg bg-white text-black text-2xl font-bold transition ease-linear duration-300 hover:box-shadow hover:-translate-x-1"
        >
    log in with Discord
    </button>
</div>