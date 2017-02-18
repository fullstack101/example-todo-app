import createItem from './item';

export default element => items =>
     element.innerHTML = `<table class="todo-list">
        ${items.map(item => createItem(item)).join('')}
    </table>`;