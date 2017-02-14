import * as skate from 'skatejs';

customElements.define('todo-list', class extends skate.Component {
    static get props() {
        return {
            items: {
                attribute: true,
                default: []
            }
        };
    }

    renderCallback() {
        return skate.h('div', ...(this.items ? JSON.parse(this.items) : [])
            .map(item =>
                skate.h('to-do', item)));
    }
});
