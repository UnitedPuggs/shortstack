import { supabase } from '$lib/supabase';
import { generate } from 'random-words';

export async function POST({ request }) {
    const { links } = await request.json();

    let words = generate({ exactly: 3 })
    const id = words.join("-")

    const { data, error } = await supabase
    .from('links')
    .insert([{ id: id, links: links }])
    .select()

    if(error)
        return new Response(error)
    else
        return new Response(JSON.stringify({data}))
}