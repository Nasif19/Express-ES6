import Model from "../models/model.js";
import db from "../db.js";

const  table_name = `users`;
export default class Admin extends Model {
    constructor () {
        super(table_name);
    }

    test = callback => {
        console.log(callback);
        db.query(this.all(), (error, data) => {
            if (error) {
                console.log('error', error);
                return error;
                // next(null, {
                //     status: 'error',
                //     message: error
                // });
            }
            else
                callback(data);
            // next({
            //     status: 'success',
            //     message: 'Data retrieved successfully',
            //     data: this.emptyOrRows(data)
            // }, null);
        })
    }
}