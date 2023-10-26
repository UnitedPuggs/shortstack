<script>
    import "../app.css";
    import { signIn } from "@auth/sveltekit/client";
    import Navbar from "$lib/Navbar.svelte";
</script>

<button on:click={() => signIn("discord")}>log in</button>
<body class="bg-amber-200 p-2">
    <slot />
</body>