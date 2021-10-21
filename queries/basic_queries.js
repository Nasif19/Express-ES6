export default class BasicQueries {
    constructor (table_name, table_id=null) {
        this.table_name = table_name;
    }

    formatInsertData = values => {
        let row_vals = ``;
        for (const key in values) {
            if (Object.hasOwnProperty.call(values, key)) {
                row_vals += `'${values[key]}',`;
            }
        }
        return row_vals.slice(0, -1);
    }
    //Queries
    insertQuery = (insert_values) => `INSERT INTO ${this.table_name} (${Object.keys(insert_values)}) VALUES (${this.formatInsertData(insert_values)});`;
    getAllQuery = () => `select * from ${this.table_name};`;
    getByIdQuery = table_id => `select * from ${this.table_name} where id = ${table_id};`;
}