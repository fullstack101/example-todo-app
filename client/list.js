import ToDo from './item';

import preact from 'preact';
const { h, Component } = preact;

export default class extends Component {
    render() {
        return <table class="todo-list">
        {this.props.items.map(
            ({ text, removeUrl }) => <ToDo text={text} delete={this.props.delete(removeUrl)} />)}
    </table>;
    }
}
