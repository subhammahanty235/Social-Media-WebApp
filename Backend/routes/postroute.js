const router = require('express').Router();
const postcontroller = require('../controller/post.controller')
const fetchuser = require('../middlewares/userverify')
router.post('/addpost' ,fetchuser,postcontroller.uploadpost )
router.put('/likepost/:id' ,fetchuser,postcontroller.likepost )
module.exports = router;