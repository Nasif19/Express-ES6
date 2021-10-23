export default class Helper {
    getOffset = (currentPage = 1, listPerPage) => {
        return (currentPage - 1) * [listPerPage];
    }

    emptyOrRows = rows => {
        if (rows.length > 0) {
            return rows;
        }
        return [];
    }

    defaultHandler = (error, data, next) => {
        if (error) {
            console.log('error', error);
            next(null, {
                status: 'error',
                message: error
            });
        }
        next({
            status: 'success',
            message: 'Data retrieved successfully',
            data: this.emptyOrRows(data)
        }, null);
    }
}