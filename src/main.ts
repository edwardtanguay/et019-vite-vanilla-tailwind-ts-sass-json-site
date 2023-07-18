import { FeatureHeader } from './components/FeatureHeader'
import { Separator } from './components/Separator'
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
${FeatureHeader('Interactive Buttons')}
<div x-data="{message: ''}" class="flex items-start">
	<button class="btn-primary" @click="message = 'item copied'">Copy</button>
	<button class="btn-primary" @click="message = 'item sent'">Send</button>
	<button class="btn-primary" @click="message = 'item saved'">Save</button>
	<button class="btn-danger" @click="message = 'item deleted'">Delete</button>
	<div class="text-gray-400 text-4xl grid items-center" x-text="message"></div>
</div>
${Separator()}

${FeatureHeader('Employee Cards')}
${Separator()}

${FeatureHeader('Feature 3')}
${Separator()}

${FeatureHeader('Feature 4')}
${Separator()}
`