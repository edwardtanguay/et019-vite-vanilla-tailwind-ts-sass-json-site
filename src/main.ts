import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main class="grid place-items-center">
        <h1 class="text-green-800 text-7xl">This is a test of Tailwind</h1>
        <p class="text-3xl mt-7 italic w-1/2 leading-10">Lorem ipsum, dolor sit <span class="highlight">amet</span> consectetur adipisicing elit. Ab consequatur, et natus quis at repellendus rerum quas! Atque fuga repudiandae laborum <span class="highlight">eveniet</span> facilis, harum quas dignissimos <span class="highlight">okisdje</span>? Deleniti, ipsam?</p>
    </main>
`