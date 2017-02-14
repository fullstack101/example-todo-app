import 'skatejs-web-components';

import todoService from './service';

import './item';
import './list';
import './form';
import './list';
import './flash';


const list = document.querySelector('todo-list');

const flash = document.querySelector('flash-message');

const updateItems = items => { list.items = items; };

const add = text => todoService.add({ text })
                            .then(() => flash.flash('added successfully!'));

const remove = removeUrl => todoService.remove(removeUrl)
                            .then(() => flash.flash('removed successfully!'));

const mainLoop = () => todoService.pollChanges()
                            .then(updateItems)
                            .then(mainLoop);

window.actions = { add, remove };

todoService.list().then(updateItems);
mainLoop();
