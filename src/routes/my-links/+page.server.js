import { supabase } from '$lib/supabase'

export async function load({ locals }) {
    const session = await locals.getSession();

    let { data: links, error } = await supabase
    .from('links')
    .select('id, stack_name, created_by')
    .eq('created_by', session?.user.email);

    if(error)
        return { load: error }
    else
        return { links: links }
}