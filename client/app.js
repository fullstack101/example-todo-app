import todoService from './service';
import createList from './list';
import createFlash from './flash';
import renderForm from './form';

const backOffRetry = callback => {
    let backOff = 100;
    return error => {
        backOff = backOff * 2;
        setTimeout(callback, backOff);
    };
};

const renderList = createList(document.querySelector('#todo-list'));

const flash = createFlash(document.querySelector('#flash'));

const list = () => todoService.list().then(renderList);

const add = text => todoService.add({ text })
                            .then(flash('added successfully!'));

const remove = removeUrl => todoService.remove(removeUrl)
                            .then(flash('removed successfully!'));

const mainLoop = () => todoService.pollChanges()
                            .then(renderList)
                            .then(mainLoop)
                            .catch(backOffRetry(mainLoop));

window.actions = { add, remove };

list();
renderForm(document.querySelector('#todo-form'));
mainLoop();
