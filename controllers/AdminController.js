import Helper from "../helpers/helper.js";
import AdminModel from "../models/admin.js";

const helper = new Helper();
const admin = new AdminModel();
export default class AdminController {
    
    store = (req, next) => {
        admin.create(req.query, (error, data) => helper.defaultHandler(error, data, next));
    }

    index = (next) => {
        admin.all((error, data) => helper.defaultHandler(error, data, next));
    }

    edit = (req, next) => {
        admin.find(req.params.id, (error, data) => helper.defaultHandler(error, data, next));
    }

    updates = (req, next) => {
        admin.update(req.query, req.params.id, (error, data) => helper.defaultHandler(error, data, next));
    }

    destroy = (req, next) => {
        admin.delete(req.params.id, (error, data) => helper.defaultHandler(error, data, next));
    }

    test = (req, next) => {
        const callback = (data) => {
            let str = ``;
            for (const key of data) {
                str += `<option value="${key.id}">${key.name}</option>`;
            }
            console.log(str);
            next({
                status: 'success',
                message: 'Data retrieved successfully',
                data: data
            }, str);
        }
        let data = admin.test(callback);
        // let data = [
        //     {
        //         "id": 1,
        //         "name": "Nasif",
        //         "age": 26
        //     },
        //     {
        //         "id": 2,
        //         "name": "Nadia",
        //         "age": 22
        //     }
        // ];
        // console.log('data', data);
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       