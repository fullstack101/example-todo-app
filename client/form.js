import * as skate from 'skatejs';

customElements.define('todo-form', class extends skate.Component {
    renderCallback() {
        return skate.h('div',
          skate.h('input'),
          skate.h('button', { onclick: (e) => {
            const input = this.shadowRoot.querySelector('input');
            window.actions.add(input.value);
            input.value=null;
            input.focus();
         } }, 'Add To-Do')
        );
    }
});
