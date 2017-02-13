import "webcomponentsjs";
import todoService from './service';
import registerForm from './form';
import registerItem from './item';
import registerList from './list';
import registerFlash from './flash';

const backOffRetry = callback => {
    let backOff = 100;
    return error => {
        backOff = backOff * 2;
        setTimeout(callback, backOff);
    };
};

registerList();
registerFlash();

const list = document.querySelector('todo-list');

const form = document.querySelector('todo-form');

const flash = document.querySelector('flash-message');

const renderList = items => list.setAttribute('items', JSON.stringify(items));

const addItem = text => todoService.add({ text })
                          .then(() => flash.flash('added sucessfully'));

const removeItem = removeUrl => todoService.remove(removeUrl)
                          .then(() => flash.flash('removed successfully'));

const pollLoop = () => todoService.pollChanges()
                            .then(renderList)
                            .then(pollLoop)
                            .catch(backOffRetry(pollLoop));

registerForm(addItem);
registerItem(removeItem);

todoService.list().then(renderList);
pollLoop();