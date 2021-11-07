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
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       