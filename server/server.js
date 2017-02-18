'use strict';

const fs = require('fs');
const uuid = require('uuid-v4');

const express = require('express');
const bodyparser = require('body-parser');

const todos = require('./todos');

const polling = require('./polling');

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});

app.use(express.static('client'));

app.get('/list', (req, res) => {
    res.json(todos.listWithActions());
});

app.get('/poll', (req, res) => {
    const id = req.params.id || uuid();
    const unsubscribe = polling.subscribe(id, message => res.json(message));
    req.on('abort', unsubscribe);
    req.on('aborted', unsubscribe);
});

app.post('/add', (req, res) => {
    const item = { text: req.body.text };
    const message = { message: "added successfully" };
    todos.add(item);
    res.json(message);
    polling.publish(todos.listWithActions());
});

app.post('/remove/:id', (req, res) => {
    const id = req.params.id;
    const message = { message: "removed successfully" };
    todos.remove(id);
    res.json(message);
    polling.publish(todos.listWithActions());
});

app.listen(6701);
