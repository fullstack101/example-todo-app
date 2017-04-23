import escape from 'escape-html';

import preact from 'preact';
const { h, Component } = preact;

export default class extends Component {
    render() {
        return <tr class="todo-item">
            <td>{escape(this.props.text)}</td>
            <td><button onClick={this.props.delete}>delete</button></td>
        </tr>;
    }
}
