import { A } from "solid-start";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-neutral-900 p-4">
        <h1 class="max-6-xs text-6xl text-red-700 font-thin uppercase my-16">
            &#9888; not found &#9888;
        </h1>
        <div>return to <A href="/">homepage</A></div>
    </main>
  );
}
