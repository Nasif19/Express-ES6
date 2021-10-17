import express from "express";
import helper from "../helpers/helper.js";
import AdminController from "../controllers/AdminController.js";

const route = express.Router();
const admin = new AdminController();

route.use((req, res, next) => {
    next();
});

route.post('/', (req, res) => {
    admin.insert(req, (data, error) => {
        if (error) {
            res.send({
                error: error,
                status: 'Error',
            });
        } else {
            res.send(data);
        }
    });
})

route.get('/index', (req, res)=> { 
    admin.index((data, error) => {
        if (error) {
            res.send({
                error: error,
                status: 'Error',
            });
        } else {
            res.send(data);
        }
    });
});

route.get('/:id/edit', (req, res) => {
    admin.getUserById(req, (data, error) => {
        if (error) {
            res.send({
                error: error,
                status: 'error'
            });
        } else {
            res.send(data);
        }
    });
})

export default route;