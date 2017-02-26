import preact from 'preact';
const { h, render, Component } = preact;

export default class extends Component {
    constructor(){
        super();
        this.flash = this.flash.bind(this);
    }


    flash(message) {
        this.setState({ message });
    }

    render() {
        if (this.state.message) {
            setTimeout(() => { this.setState({ message: "" }); }, 2000);
            return <div style="background-color: bisque;">{this.state.message}</div>;
        } else {
            return <div></div>;
        }
    }
};
