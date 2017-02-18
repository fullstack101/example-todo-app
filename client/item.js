import escape from 'escape-html';

export default ({ text, removeUrl }) =>
    `<tr class="todo-item">
        <td>${escape(text)}</td>
        <td><button onclick="actions.remove('${removeUrl}')">delete</button></td>
    </tr>`;
