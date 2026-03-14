/**
 * @argument(statusCode, Message)
 * @return Custom Error Message
 * @throws Error Message 
 * @example throw new apiError(404, "Bad Request")
 */
class apiError extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong",
        error = [],
        stack = ""
    ) {
        super (message)

        this.statusCode = statusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.error = this.error

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {
    apiError
}