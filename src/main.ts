import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<button type="button" class="btn-primary">Copy</button>
<button type="button" class="btn-primary">Send</button>
<button type="button" class="btn-primary">Save</button>
<button type="button" class="btn-danger">Delete</button>
`