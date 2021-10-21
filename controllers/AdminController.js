import db from "../db.js";
import Helper from "../helpers/helper.js";
import AdminModel from "../models/admin.js";

const helper = new Helper();
export default class AdminController extends AdminModel {

    insert = (req, next) => {
        db.query(this.insertData(req.query), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    }

    index = (next) => {
        db.query(this.getAllData(), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    } 

    getUserById = (req, next) => {
        db.query(this.getByIdData(req.params.id), (error, data) => {
            helper.defaultHandler(error, data, next);
        });
    }
}