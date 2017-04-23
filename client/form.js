import preact from 'preact';
const { h, Component } = preact;

export default class extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
    }

    submit() {
        this.props.add(this.state.text);
        this.setState({ text: "" });
        this.inputField.focus();
    }

    change(e) {
        this.setState({ text: e.target.value });
    }

    render() {
        return <div class="todo-form">
            <input ref={input => {this.inputField = input;}} value={this.state.text} onInput={this.change} />
            <button onClick={this.submit}>Add To-Do</button></div>;
    }
};
