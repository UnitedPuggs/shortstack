import { supabase } from '$lib/supabase'

export async function DELETE({ request }) {
    const { id } = await request.json();

    const { error } = await supabase
    .from('links')
    .delete()
    .eq('id', id);

    if(error)
        return new Response(error)
    else
        return new Response({ status: 200, message: "stack deleted"})
}