function rule(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'GET PATCH POST PUT DELETE');
        return res.status(200).json({});
    }

    next();
}

export default rule;
