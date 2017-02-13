import escape from 'escape-html';
import xtag from 'x-tag';

export default (removeItem) => {
    xtag.register('to-do', {
        lifecycle: {
            created() {
                const text = this.getAttribute('text');
                const deleteUrl = this.getAttribute('deleteUrl');

                const dom = this.createShadowRoot();

                const div = document.createElement('div');
                const textNode = document.createElement('text');
                const button = document.createElement('button');
                button.textContent = 'Delete';
                textNode.textContent = escape(text);
                button.onclick = () => { removeItem(deleteUrl); };

                div.appendChild(textNode);
                div.appendChild(button);
                dom.appendChild(div);
            }
        }
    });

};
