import { supabase } from '$lib/supabase'
  

export async function load({ fetch, params }) {
    let { data: links, error } = await supabase
    .from('links')
    .select('*')
    .eq('id', params.link)

    links[0].metadata = []

    //this is some of the stupidest shit I've done, but it works
    //issue with fetch being dumb
    async function get_metadata() {
        const metadata = await Promise.all(links[0].links.map(async metadata => {
            const res = await fetch("/api/metadata/scrape", {
                method: "POST",
                body: JSON.stringify({ scraped_url: metadata })
            })
            return res.json()
        }))
        return metadata;
    }


    if(error)
        return { load: error }
    else
        return { links, streamed: { metadata: get_metadata()} }
}