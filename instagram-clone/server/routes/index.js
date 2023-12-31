const express = require('express')
const router = express.Router();
const usersRouter = require("./users");
const profilesRouter = require("./profiles");
const auth = require("../auth/auth");

/* INDEX */
router.get('/', (req, res) => {
  res.json({ message: "hello client" });
})

// 유저 라우터
router.use('/users', usersRouter)
// 프로필 라우터
router.use('/profiles', auth, profilesRouter)

module.exports = router;