const Responses = {
    OK : (data) => {
        return {
            statusCode : 200,
            message : 'OK',
            data : data
        }
    },

    NOK : (data) => {
        return {
            statusCode : 2,
            message : 'Some error occured',
            data : data
        }
    },

    BAD_REQUEST : (data) => {
        return {
            statusCode : 400,
            message : 'Bad request.',
            data : data
        }
    }
}

module.exports = Responses;