class ExpressError extends Error {
    constructor(stautsCode, message) {
        super();
        this.statusCode = stautsCode;
        this.message = message;
    }
}

module.exports = ExpressError;