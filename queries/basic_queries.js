export default class BasicQueries {
    constructor (table_name, table_id=null) {
        this.table_name = table_name;
        this.table_id = table_id;
    }

    //Queries
    insert = (add_query_str, insert_values) => `INSERT INTO ${this.table_name} (${add_query_str}) VALUES (${insert_values});`;
    getAll = () => `select * from ${this.table_name};`;
    getById = req => `select * from ${this.table_name} where id = ${this.table_id};`;
}