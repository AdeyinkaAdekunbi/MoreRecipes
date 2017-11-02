import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = req.body.token;

    jwt.verify(token, 'adekunbi', (error, data) => {
        if (error) {
            return res.json('Unauthenticated');
        } 
        console.log(data);
        req.AuthUser = data.user;
        next();
    });
}