import './style.scss'

const inputBox = document.querySelector('.card__inputs-input')
const addBtn = document.querySelector('.card__inputs-btn')
const listContainer = document.getElementById('listContainer')

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
	}
}

listContainer.addEventListener(
	'click',
	function (e) {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('card__list-item--checked')
		} else if (e.target.tagName === 'SPAN') {
			e.target.parentElement.remove()
		}
	},
	false
)
