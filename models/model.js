import BasicQueries from "../queries/basic_queries.js";

export default class Model {
    table_name = '';
    constructor(tbl_name) {
        this.table_name = tbl_name;
    }

    create = values => new BasicQueries(this.table_name).insertQuery(values);
    all = () => new BasicQueries(this.table_name).getAllQuery();
    find = id => new BasicQueries(this.table_name).getByIdQuery(id);
    update = (values, id) => new BasicQueries(this.table_name).updateQuery(values, id);
    delete = id => new BasicQueries(this.table_name).deleteQuery(id);
}