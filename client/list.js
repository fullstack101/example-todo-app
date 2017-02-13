import xtag from 'x-tag';

export default () => {
    const render = (el, items) => {
        el.innerHTML = items.map(({
                text,
                removeUrl
            }) =>
            `<to-do text=${escape(text)} deleteUrl=${removeUrl}></to-do>`).join('');
    };

    xtag.register('todo-list', {
        lifecycle: {
            created() {
                const items = this.getAttribute('items') || [];
                this.dom = this.createShadowRoot();
                render(this.dom, items);
            },
            attributeChanged(attr, oldValue, newValue) {
                if (attr = 'items') {
                    render(this.dom, JSON.parse(newValue));
                }
            }
        }
    });
};
