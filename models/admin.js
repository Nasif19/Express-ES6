import BasicQueries from "../queries/basic_queries.js";

export default class Admin {
    table_name = `users`;
    
    insertData = (values) => {
        const query = new BasicQueries(this.table_name);
        return query.insertQuery(values);
    }
    getAllData = () => {
        const query = new BasicQueries(this.table_name);
        return query.getAllQuery();
    }
    getByIdData = id => {
        const query = new BasicQueries(this.table_name);
        return query.getByIdQuery(id);
    }

}