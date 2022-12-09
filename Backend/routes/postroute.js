const router = require('express').Router();
const postcontroller = require('../controller/post.controller')
const fetchuser = require('../middlewares/userverify')
router.get('/allposts' , postcontroller.showallposts)
router.post('/addpost' ,fetchuser,postcontroller.uploadpost );
router.put('/likepost/:id' ,fetchuser,postcontroller.likepost );
router.delete('/deletepost/:id' ,fetchuser,postcontroller.removeapost );
router.put('/comment/:id' , fetchuser , postcontroller.commentonpost);
router.put('/editpost/:id' , fetchuser , postcontroller.editapost);
module.exports = router;