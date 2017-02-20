import preact from 'preact';
const { h, render, Component } = preact;

export default class extends Component {
    render() {
        if (!this.state.cooldown) {
            this.state.visible = true;
        }
        this.state.cooldown = false;

        if (this.state.visible) {
            setTimeout(() => { this.setState({ visible: false, cooldown: true }); }, 2000);
            return <div style="background-color: bisque;">{this.props.message}</div>;
        }

        return <div></div>;
    }
};
