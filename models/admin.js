import BasicQueries from "../queries/basic_queries.js";

export default class Admin {
    table_name = `users`;
    query = new BasicQueries(this.table_name);
    
    insertData = values => this.query.insertQuery(values);
    getAllData = () => this.query.getAllQuery();
    getByIdData = id => this.query.getByIdQuery(id);
    updateData = (values, id) => this.query.updateQuery(values, id);
    deleteData = id => this.query.deleteQuery(id);
}