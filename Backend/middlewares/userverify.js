const jwt = require('jsonwebtoken');
const fetchuser =(req, res, next) => {
    const authtoken= req.header('authtoken')
    if (!authtoken) {
        res.status(400).send("Please provide a valid auth token")
    }
    try {
        const data = jwt.verify(authtoken, "jwtverify7263")
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "please authenticte using a valid token" })
    }

}

module.exports = fetchuser