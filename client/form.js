import xtag from 'x-tag';

export default (submit) => {
    xtag.register('todo-form', {
        lifecycle: {
            created() {
                const dom = this.createShadowRoot();
                const input = document.createElement('input');
                const button = document.createElement('button');
                button.textContent = 'Add To-Do';
                button.onclick = function() {
                    submit(input.value);
                    input.value = null;
                    input.focus();
                }
                dom.appendChild(input);
                dom.appendChild(button);
            }
        },
        events: {
            'click:delegate(button)': function() {
                console.log('submit', arguments);
            }
        }
    });

};