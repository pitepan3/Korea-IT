const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// 유저스키마
const userSchema = new Schema({
    email: { type: String, minLength: 5 },
    password: { type: String, minLength: 5 },
    salt: { type: String },
    username: { type: String, minLength: 3, required: true },
    name: { type: String },
    avatar: { type: String, default: 'default.png' },
    bio: { type: String }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

// 가상필드 추가 (Virtuals field)
// 기존의 데이터를 가공하여 새로운 필드를 생성할 수 있다

// 1 아바타 URL
// 클라이언트가 아바타를 쉽게 찾을 수 있게한다  
userSchema.virtual('avatarUrl').get(function () {
    return process.env.FILE_URL + '/avatar/' + this.avatar
})

// 2 유저의 게시물 갯수 파악
userSchema.virtual('postCount', { // 컬렉션 조인(join)
    ref: 'Post', // Post 모델과 조인한다
    localField: '_id', // 기본키 - 조인의 기준
    foreignField: 'user', // 외래키 - 조인의 기준
    count: true
})

// 3 유저의 팔로워 숫자 파악
userSchema.virtual('followerCount', {
    ref: 'Following', // Following 모델과 조인
    localField: '_id',
    foreignField: 'following',
    count: true
})

// 4 유저의 팔로잉 숫자 파악
userSchema.virtual('followingCount', {
    ref: 'Following', // Following 모델과 조인
    localField: '_id',
    foreignField: 'user',
    count: true
})

// 5 해당 유저의 팔로잉 여부 파악
userSchema.virtual('isFollowing', {
    ref: 'Following', // Following 모델과 조인
    localField: '_id',
    foreignField: 'following',
    justOne: true
})


// 오퍼레이션(Operations) - 모델의 데이터 처리 기능

// 1 비밀번호 암호화
userSchema.methods.setPassword = function (password) {
    this.salt = crypto // 암호화에 사용되는 키
        .randomBytes(16).toString("hex");

    this.password = crypto
        .pbkdf2Sync(password, this.salt, 310000, 32, "sha256")
        .toString("hex")
}

// 2 비밀번호 검사
userSchema.methods.checkPassword = function (password) {
    // 로그인 시에 호출되는 오퍼레이션

    // 로그인 시에 입력한 비밀번호를 유저의 salt로 다시 암호화한다
    const hashedPassword = crypto
        .pbkdf2Sync(password, this.salt, 310000, 32, "sha256")
        .toString("hex")

    return this.password === hashedPassword;
}

// 3 로그인 토큰 생성
userSchema.methods.generateJWT = function () {
    const payload = { // 유저의 데이터
        sub: this._id,
        username: this.username
    }
    const secret = process.env.SECRET; // 토큰 생성에 사용되는 키

    return jwt.sign(payload, secret);
}

module.exports = mongoose.model('User', userSchema);