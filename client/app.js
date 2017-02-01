import todoService from './service';
import createList from './list';
import createFlash from './flash';
import renderForm from './form';

const renderList = createList(document.querySelector('#todo-list'));

const flash = createFlash(document.querySelector('#flash'));

const list = () => todoService.list().then(renderList);

const submitForm = renderForm(document.querySelector('#todo-form'));

const add = inputId => todoService.add({ text: submitForm(inputId) })
                            .then(flash);

const remove = removeUrl => todoService.remove(removeUrl)
                            .then(flash);

const mainLoop = () => todoService.pollChanges()
                            .then(renderList)
                            .then(mainLoop);

window.actions = { remove, add };

list();
mainLoop();
