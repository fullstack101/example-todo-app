import * as skate from 'skatejs';

customElements.define('flash-message', class extends skate.Component {
    static get props() {
      return { message: { attribute: true } }
    }

    flash(message) {
      this.message = message;
    }

    renderCallback() {
        const el = skate.h('div', {style: {backgroundColor: "bisque"}}, this.message);
        setTimeout(() => { el.style.display = "none"; }, 2000);

        return el;
    }
});
