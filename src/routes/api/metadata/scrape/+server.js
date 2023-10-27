import got from 'got';
import createMetascraper from 'metascraper';
import metascraperDescription from 'metascraper-description';
import metascraperImage from 'metascraper-image';

const metascraper = createMetascraper([metascraperDescription(), metascraperImage()]);

export async function POST({ request }) {
    const { scraped_url } = await request.json();
    const { body: html, url } = await got(scraped_url)
    const metadata = await metascraper({ html, url })

    return new Response(JSON.stringify(metadata))
}