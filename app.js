/*const array = [1, 2, 3, 5, 20, 42, 111]
const arrayString = ['a', 'b', 'c']


console.log(array[array.length - 1]) // array[6 - 1]
array[0] = 'Privet'
console.log(array)
array[array.length] = 'becon'*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// const notes = ['записать блок про массивы' , 'рассказать теорию объектов']

// function render() {
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }

//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value === '') {
//         return
//     } 
//     // listElement.innerHTML = 
//     listElement.insertAdjacentHTML('beforeend' ,getNoteTemplate(inputElement.value))
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>
//         `
// }
/** Object Theory
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    hasGirlFriend: false,
    languages: ['ru', 'en', 'de'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    },
}

console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlFriend'

console.log(person[key])

person.hasGirlFriend = true

console.log(person[key])
person.getFullName()
 */

const notes = [
    {
        title: 'записать блок про массивы',
        completed: false
    },
    {
        title: 'рассказать теорию объектов',
        completed: true
    }
]

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет Элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }

    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}

render()

createBtn.onclick = function () {
    if (inputElement.value === '') {
        return
    } 
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    notes.push (newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
            </span>
        </li>
        `
}