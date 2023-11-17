import { supabase } from '$lib/supabase';
import { generate } from 'random-words';

export async function POST({ request }) {
    const { links, stack_name, created_by } = await request.json();

    let words = generate({ exactly: 3 })
    
    let id;
    if(!stack_name) {
        id = words.join("-")
    } else {
        id = stack_name.replace(/\s+/g, '').trim();
    }

    const { data, error } = await supabase
    .from('links')
    .insert([{ id: id, links: links, stack_name: stack_name, created_by: created_by }])
    .select()

    const { feed_err } = await supabase
    .from('feed')
    .insert([{
        stack_id: id,
        stack_name: stack_name
    }])

    if(feed_err)
        return new Response(feed_err)

    if(error)
        return new Response(error)
    else
        return new Response(JSON.stringify({data}))
}