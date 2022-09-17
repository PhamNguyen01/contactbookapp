class ApiError extends Error {
    constructor(statusCode, messsage) {
        super();
        this.statusCode = statusCode;
        this.message = messsage;
    }
}

module.exports = ApiError;