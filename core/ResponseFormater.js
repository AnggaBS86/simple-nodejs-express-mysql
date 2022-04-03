const ResponseFormater = {
    build : (object, message, statusCode, statusType)  => {
        return {
            data: object,
            statusCode: statusCode,
            message: message,
            statusType: statusType
        }
    },
    error : (object, message, statusCode, statusType) => {
        return {
            error: object,
            statusCode: statusCode,
            message: message,
            statusType: statusType
        }
    }
}

module.exports = ResponseFormater