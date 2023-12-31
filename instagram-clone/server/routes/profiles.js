const express = require('express');
const router = express.Router();
const {
    fine,
    fineOne,
    follow,
    unfollow
} = require("../controllers/profileController");

router.get('/', find);
router.get('/:username', findOne)
router.get('/:username/follow', follow)
router.get('/:username/unfollow', unfollow)

module.exports = router;