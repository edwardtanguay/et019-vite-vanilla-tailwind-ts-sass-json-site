import { FeatureHeader } from './components/FeatureHeader'
import { Separator } from './components/Separator'
import './style.scss'
import employees from './data/employees.json';

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

${employees.map(employee => {
	return `
	
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://edwardtanguay.vercel.app/share/images/employees/employee_${employee.employeeID}.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-yellow-500">${employee.firstName} ${employee.lastName}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">${employee.notes}</p>
    </div>
</a>

	`
})}
${Separator()}

${FeatureHeader('Feature 3')}
${Separator()}

${FeatureHeader('Feature 4')}
${Separator()}
`