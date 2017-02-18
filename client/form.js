export default element => {
    element.innerHTML = `<input id="new-todo" />
        <button onclick="(function () {
            var input = document.getElementById('new-todo');
            actions.add(input.value);
            input.value=null;
            input.focus();
        }())">Add To-Do</button>`;
};