import { A } from 'solid-start';

export default function SiteHeader() {

    return (
        <header class="bg-neutral-800 text-neutral-50 p-5 flex">
            <A href="/" class="px-5 cursor-default font-bold">schlichting.dev</A>
            <nav class="ml-10">
                <ul class="">
                    <A class="px-5" href="/articles">articles</A>
                    <A class="px-5" href="/projects">projects</A>
                    <A class="px-5" href="/about">about</A>
                </ul>
            </nav>
        </header>
    );
}
