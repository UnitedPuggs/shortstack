import { SvelteKitAuth } from "@auth/sveltekit";
import Google from '@auth/core/providers/google';
import Discord from '@auth/core/providers/discord';
import { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID, AUTH_SECRET } from '$env/static/private'

export const handle = SvelteKitAuth(async (event) => {
    const authOptions = {
        providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })],
        secret: AUTH_SECRET,
        trustHost: true
    }
    return authOptions;
})