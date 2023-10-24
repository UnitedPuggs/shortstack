import { supabase } from '$lib/supabase'

export async function load({ params }) {
    let { data: links, error } = await supabase
    .from('links')
    .select('*')
    .eq('id', params.link)

    if(error)
        return { load: error }
    else
        return { links: links }
}