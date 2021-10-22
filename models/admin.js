import Model from "../models/model.js";

const  table_name = `users`;
export default class Admin extends Model {
    constructor () {
        super(table_name);
    }
}