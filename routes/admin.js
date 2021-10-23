import express from "express";
import AdminController from "../controllers/AdminController.js";

const route = express.Router();
const adminController = new AdminController();

route.use((req, res, next) => {
    next();
});

route.get('/index', (req, res)=> {
    adminController.index((data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});
route.post('/', (req, res) => {
    adminController.store(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});
route.get('/:id/edit', (req, res) => {
    adminController.edit(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});
route.put('/:id', (req, res)=> {
    adminController.updates(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});
route.delete('/:id', (req, res) => {
    adminController.destroy(req, (data, error) => error ? res.send({error: error, status: 'Error'}) : res.send(data));
});

export default route;