import xtag from 'x-tag';

const render = (el, message) => {
    el.textContent = message;
    el.style.display = "block";
    setTimeout(() => {
        el.style.display = "none";
    }, 2000);
}

export default () => {
    xtag.register('flash-message', {
        lifecycle: {
            created() {
                const message = this.getAttribute('message') || "";
                const dom = this.createShadowRoot();
                dom.innerHTML = `<div style="background-color: bisque"></div>`;
                this.flashDiv = dom.querySelector('div');
                render(this.flashDiv, message);
            }
        },
        methods: {
            flash(message) {
                render(this.flashDiv, message);
            }
        }
    });
};
