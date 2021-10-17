import BasicQueries from "../queries/basic_queries.js";

const table_name = `users`;
const fillable = `name, age`;

export const insert = (values) => {
    const query = new BasicQueries(table_name, null);
    return query.insert(fillable, values);
}
export const getAll = () => {
    const query = new BasicQueries(table_name);
    return query.getAll();
};
export const getById = id => { 
    const query = new BasicQueries(table_name, id);
    return query.getById();
};