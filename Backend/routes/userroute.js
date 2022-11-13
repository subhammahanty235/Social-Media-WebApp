const router = require('express').Router()
const auth = require('../controller/auth.controller')
const fetchuser = require('../middlewares/userverify')
const user = require('../controller/user.controller')
router.post('/signup',auth.signup);
router.post('/login',auth.login)
router.post('/del',fetchuser,user.deleteprofile)
router.put('/updateprofile',fetchuser,user.editprofile)
router.get('/getdata/:id' , user.getuserdetails)
router.put('/follow/:id' ,fetchuser, user.followuser);
router.put('/unfollow/:id' ,fetchuser, user.unfollowuser);
module.exports = router;