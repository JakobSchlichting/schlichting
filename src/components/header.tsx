import { A } from 'solid-start';

export default function SiteHeader() {

    return (
        <header class="bg-slate-700 text-slate-50 p-5">
            <A href="/"><span class="py-3 px-8 rounded-md hover:bg-slate-800 hover:cursor-pointer">schlichting.dev</span></A>
        </header>
    );
}
