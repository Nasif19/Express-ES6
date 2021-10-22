import express from "express";
import AdminController from "../controllers/AdminController.js";

const route = express.Router();
const admin = new AdminController();

route.use((req, res, next) => {
    next();
});

route.get('/index', (req, res)=> {
    admin.index((data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.post('/', (req, res) => {
    admin.store(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.get('/:id/edit', (req, res) => {
    admin.edit(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.put('/:id', (req, res)=> {
    admin.updates(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.delete('/:id', (req, res) => {
    admin.delete(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

export default route;