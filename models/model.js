import db from "../db.js";
import BasicQueries from "../queries/basic_queries.js";

export default class Model {
    table_name = '';
    constructor(tbl_name) {
        this.table_name = tbl_name;
    }

    create = (values, callback, next) => {
        db.query(new BasicQueries(this.table_name).insertQuery(values), (error, data) => {
            callback(error, data, next);
        });
    }
    all = (callback, next) => {
        db.query(new BasicQueries(this.table_name).getAllQuery(), (error, data) => {
            callback(error, data, next);
        });
    }
    find = (id, callback, next) => {
        db.query(new BasicQueries(this.table_name).getByIdQuery(id), (error, data) => {
            callback(error, data, next);
        });
    }
    update = (values, id, callback, next) => {
        db.query(new BasicQueries(this.table_name).updateQuery(values, id), (error, data) => {
            callback(error, data, next);
        });
    }
    delete = (id, callback, next) => {
        db.query(new BasicQueries(this.table_name).deleteQuery(id), (error, data) => {
            callback(error, data, next);
        });
    }
}