import './style.scss'

const inputBox = document.querySelector('.card__inputs-input')
const addBtn = document.querySelector('.card__inputs-btn')
const listContainer = document.getElementById('listContainer')
getTasks()
addBtn.addEventListener('click', addTask)

function addTask() {
	if (inputBox.value === '') {
		alert('Sheesh.')
	} else {
		let li = document.createElement('li')
		li.innerHTML = inputBox.value
		listContainer.appendChild(li)
		li.classList.add('card__list-item')
		inputBox.value = ''
		let removeBtn = document.createElement('span')
		removeBtn.classList.add('remove-btn')
		li.appendChild(removeBtn)
		saveTasks()
	}
}

listContainer.addEventListener(
	'click',
	function (e) {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('card__list-item--checked')
			saveTasks()
		} else if (e.target.tagName === 'SPAN') {
			e.target.parentElement.remove()
			saveTasks()
		}
	},
	false
)

function saveTasks() {
	localStorage.setItem('tasks', listContainer.innerHTML)
}
function getTasks() {
	listContainer.innerHTML = localStorage.getItem('tasks')
}
