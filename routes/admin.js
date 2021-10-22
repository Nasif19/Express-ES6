import express from "express";
import AdminController from "../controllers/AdminController.js";

const route = express.Router();
const admin = new AdminController();

route.use((req, res, next) => {
    next();
});

route.post('/', (req, res) => {
    admin.insert(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.get('/index', (req, res)=> {
    admin.index((data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.get('/:id/edit', (req, res) => {
    admin.getUserById(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.put('/:id', (req, res)=> {
    admin.update(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

route.delete('/:id', (req, res) => {
    admin.delete(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

export default route;