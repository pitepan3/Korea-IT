const User = require('../models/User');
const { body } = require('express-validator');

module.exports = async (req, res, next) => {
    try {
        // 이메일 유효성 검사
        const emailResult = await body('email')
            .isEmail() // 올바른 이메일인지 검사
            .custom(async (email) => { // 중복검사
                // 이메일로 유저를 검사한다
                const user = await User.findOne({email});
                // Model.findOne(조건): 조건에 일치하는 도큐먼트 한개를 찾는다
                
                if (user) { // 이메일이 사용중인 경우
                    throw new Error('E-mail is already in use');
                }
            })
            .run(req)

            // 이메일 유효성 검사에 실패한 경우
            if (!emailResult.isEmpty()) {
                const err = new Error('E-mail validation failed');
                // status: 서버의 응답코드(상태코드)
                err.status = 400; // 400 BadRequest
                throw err; // catch블록에 에러를 던진다
            }

            // 유저네임 검사
            const usernameResult = await body('username')
            .trim()
            .isLength({ min: 5 }) // 최소 5글자 이상
            .isAlphanumeric() //알파벳이나 숫자만 가능
            .custom(async (username) => { // 중복검사
                const user = await User.findOne({ username });

                if (user) {
                    throw new Error('Username is already in use');
                }
            })
            .run(req)

            // 유저네임 유효성 검사 실패
            if (!usernameResult.isEmpty()) {
                const err = new Error('Username validation failed');
                err.status = 400;
                throw err;
            }

            // 비밀번호 유효성 검사
            const passwordError = await boty('password')
            .trim()
            .isLength({ min: 5 })
            .run(req)

            if (!passwordError.isEmpty()) {
                const err = new Error('Password validation failed');
                err.status = 400;
                throw err;
            }

            // 다음 미들웨어로 이동한다
            next();

    } catch (error) {
        next(error) // 에러 핸들러에게 에러를 전달한다
    }
}