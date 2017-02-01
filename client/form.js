const renderForm = (form, id = 'new-todo') => {
    form.innerHTML = `<input id="${id}" />
    <button onclick="actions.add("${id}")">Add To-Do</button>`;

    const submit = () => {
        const input = document.getElementById(id);
        const value = input.value;
        input.value = null;
        return value;
    };

    return submit;
};

module.exports = renderForm;
