import { SvelteKitAuth } from "@auth/sveltekit";
import Google from '@auth/core/providers/google';
import Discord from '@auth/core/providers/discord';
import { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID, AUTH_SECRET, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from '$env/static/private'

export const handle = SvelteKitAuth(async (event) => {
    const authOptions = {
        providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }), Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_CLIENT_SECRET})],
        session: {
            maxAge: 7 * 24 * 60 * 60,
            updateAge: 1 * 24 * 60 * 60
        },
        trustHost: true,
        secret: AUTH_SECRET,
    }
    return authOptions;
})