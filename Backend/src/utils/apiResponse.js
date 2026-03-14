/**
 * @arguments (statusCode, data, message)
 * @description For Sending Structured Response To The Client
 */
class apiResponse {
    constructor(statusCode, data, message = "success"){
        this.statusCode = statusCode,
        this.data = data,
        this.message = message,
        this.success = statusCode < 400
    }
}

export{
    apiResponse
};