import escape from 'escape-html';
import * as skate from 'skatejs';

customElements.define('to-do', class extends skate.Component {
    static get props() {
        return {
            text: {
                attribute: true
            },
            removeUrl: {
                attribute: true
            }
        };
    }

    renderCallback() {
        return skate.h('div',
            skate.h('span', escape(this.text)),
            skate.h('button', {
                click: () => window.actions.remove(this.removeUrl)
            }, 'delete'));
    }
});
