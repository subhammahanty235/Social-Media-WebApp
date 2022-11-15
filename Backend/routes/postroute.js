const router = require('express').Router();
const postcontroller = require('../controller/post.controller')
const fetchuser = require('../middlewares/userverify')
router.post('/addpost' ,fetchuser,postcontroller.uploadpost );
router.put('/likepost/:id' ,fetchuser,postcontroller.likepost );
router.delete('/deletepost/:id' ,fetchuser,postcontroller.removeapost );
router.put('/comment/:id' , fetchuser , postcontroller.commentonpost);
module.exports = router;