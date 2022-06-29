/* log requests and response */
function errHandler(error: any, req: any, res: any, next: any) {
    switch (error.name) {
        case 'UnauthorizedError':
            res.status(401).json({
                message: error.message
            });
            break;
        case 'BadRequestError':
            res.status(400).json({
                message: error.message
            });
        default:
            res.status(500).json({
                message: error.message
            });
            break;
    }
}

export default errHandler;
