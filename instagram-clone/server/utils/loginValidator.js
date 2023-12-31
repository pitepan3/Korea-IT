const User = require('../models/User');
const { boty } = require('express-validator');

module.exports = async (req, rex, next) => {
    try {
        // 이메일 유효성 검사
        const emailResult = await body('email')
        .isEmail()
        .custom(async (email) => {
            // email로 유저 검색
            const user = await User.findOne({ email });

            if (!user) { // 유저가 존재하지 않는 경우
                throw new Error('E-mail does not exist');
            }
        })
        .run(req);

        // 유효성 검사 실패 처리
        if (!emailResult.isEmpty()) {
            const err = new Error('E-mail validation failed');
            err.status = 401; // 401 Unauthorized
            throw err;
        } 

        // 비밀번호 유효성 검사
        const passwordResult = await body('password')
            .trim()
            .notEmpty() // 입력값이 없는 경우
            .custom(async (password, { req }) => {
                const email = req.body.email;
                const user = await User.findOne({ email });

                // 비밀번호가 일치하지 않는 경우
                if (!user.checkPassword(password)) {
                    throw new Error('Password does not match');
                }
            })
            .run(req)

            // 검사 실패 처리
            if (!passwordResult.isEmpty()) {
                const err = new Error('Password validation failed');
                err.status = 401;
                throw err;
            }

            // 다음 미들웨어로 이동
            next();

    } catch (error) {
        next(error)
    }
}