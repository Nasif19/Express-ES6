export default class BasicQueries {
    constructor (table_name) {
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
    formatUpdateData = values => {
        let row_vals = ``;
        for (const field in values) {
            if (Object.hasOwnProperty.call(values, field)) {
                row_vals += `${field} = '${values[field]}',`;
            }
        }
        return row_vals.slice(0, -1);
    }
    //Queries
    insertQuery = insert_values => `INSERT INTO ${this.table_name} (${Object.keys(insert_values)}) VALUES (${this.formatInsertData(insert_values)});`;
    getAllQuery = () => `SELECT * FROM ${this.table_name};`;
    getByIdQuery = table_id => `SELECT * FROM ${this.table_name} WHERE id = ${table_id};`;
    updateQuery = (update_values, id) => `UPDATE ${this.table_name} SET ${this.formatUpdateData(update_values)} WHERE id = ${id};`;
    deleteQuery = id => `DELETE FROM ${this.table_name}  WHERE id = ${id}`;
}