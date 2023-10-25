<script>
    import { signIn } from '@auth/sveltekit/client';
</script>

<div class="flex justify-center items-center mt-10">
    <button on:click={() => signIn("google")} 
        class="p-2 border-2 border-black rounded-lg bg-white text-black text-2xl font-bold transition ease-linear duration-300 hover:box-shadow hover:-translate-x-1"
        >
    log in with Google
    </button>
</div>