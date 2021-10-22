import db from "../db.js";
import Helper from "../helpers/helper.js";
import AdminModel from "../models/admin.js";

const helper = new Helper();
const admin = new AdminModel();
export default class AdminController {
    
    store = (req, next) => {
        db.query(admin.create(req.query), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    }

    index = next => {
        db.query(admin.all(), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    }

    edit = (req, next) => {
        db.query(admin.find(req.params.id), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    }

    updates = (req, next) => {
        db.query(admin.update(req.query, req.params.id), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    }

    delete = (req, next) => {
        db.query(admin.deleteData(req.params.id), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       