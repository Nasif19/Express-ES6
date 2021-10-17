import db from "../db.js";
import Helper from "../helpers/helper.js";
import { insert, getAll, getById } from "../models/admin.js";

const helper = new Helper();
export default class AdminController {

    insert = (req, next) => {
        console.log(Object.values(req.query));
        db.query(insert(Object.values(req.query)), (error, data) => {
            helper.defaultHandle(error, data, next);
            // if (error) {
            //     next(null, {
            //         status: 'error',
            //         message: error
            //     });
            // }
            // next({
            //     status: 'success',
            //     message: 'Data retrieved successfully',
            //     data: []
            // }, null);
        });
    }

    index = (next) => {
        db.query(getAll(), (error, data) => {
            helper.defaultHandle(error, data, next);
            // if (error) {
            //     console.log('error', error);
            //     next(null, {
            //         status: 'error',
            //         message: error
            //     });
            // }
            // next({
            //     status: 'success',
            //     message: 'Data retrieved successfully',
            //     data: helper.emptyOrRows(data)
            // }, null);
            
        });
    } 

    getUserById = (req, next) => {
        // const qr = `select * from users where id = ${req.params.id};`;
        db.query(getById(req.params.id), (error, data) => {
            if (error) {
                console.log('error');
                next(null, {
                    status: 'feild',
                    message: error
                })
            }
            next({
                status: 'success',
                message: 'successfully retrieved.!',
                data: helper.emptyOrRows(data)
            })
        })
    }
}