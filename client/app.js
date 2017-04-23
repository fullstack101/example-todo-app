import todoService from './service';
import List from './list';
import Flash from './flash';
import Form from './form';

import preact from 'preact';
const { h, render, Component } = preact;

const backOffRetry = callback => {
    let backOff = 100;
    return () => {
        backOff = backOff * 2;
        setTimeout(callback, backOff);
    };
};

class ToDoApp extends Component {
    constructor() {
        super();
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.mainLoop = this.mainLoop.bind(this);
    }

    mainLoop() {
        todoService.pollChanges()
        .then(items => this.setState({ items }))
        .then(this.mainLoop)
        .catch(backOffRetry(this.mainLoop));
    }

    add(text) {
         todoService.add({ text })
            .then(() => this.flash("added"));
    }

    remove(removeUrl) {
        return () => todoService.remove(removeUrl)
            .then(() => this.flash("removed"));
    }

    componentWillMount() {
        this.mainLoop();
        todoService.list()
            .then(items => this.setState({ items }));
    }

    render() {
        return <div>
            <Flash ref={({ flash }) => { this.flash = flash; }} />
            <Form add={this.add} />
            <List items={this.state.items || []} delete={this.remove} />
        </div>;
    }
}

render(<ToDoApp />, document.querySelector('#todo-app'));
