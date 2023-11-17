import { supabase } from '$lib/supabase'

export async function load() {
    let { data: feed, error } = await supabase
    .from('feed')
    .select('stack_id, stack_name')
    .order('created_at', { ascending: false })

    if(error)
        return;
    else
        return { feed }
}