const crypto = require('crypto');
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { User } = require('../models');
const { userService } = require('../service');

module.exports = {
    signup: async (req, res) => {
        const {
            email,
            password,
            userName
        } = req.body; // 1. req.body에서 데이터 가져오기
        //2. request data 확인하기, email, password, userName data가 없다면 NullValue 반환
        if(!email || !password || !userName){
            console.log('필요한 값이 없습니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }
        try {
            //3. 존재하는 이메일인지 확인하기. 이미 존재하는 이메일면 ALREADY ID 반환
            const alreadyEmail = await userService.readOneEmail(email);

            if(alreadyEmail) {
                console.log('이미 존재하는 이메일 입니다.');
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ID));
            }
            const user = await userService.signup(email, userName, password);
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS, { id: user.id, email, userName }));
    
        } catch(error){
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_UP_FAIL));
        }
    },

    signin: async (req, res) => {
        const {
            email,
            password
        } = req.body; // 1. req.body에서 데이터 가져오기
        //2. request data 확인하기, email, password, userName data가 없다면 NullValue 반환
        if(!email || !password){
            console.log('필요한 값이 없습니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }
        try{
            //3. 존재하는 아이디인지 확인하기. 존재하지 않는 아이디면 NO USER 반환
            const alreadyEmail = await User.findOne({
                where:{
                    email: email
                }
            });
            console.log(alreadyEmail);
    
            if(!alreadyEmail){
                console.log('없는 이메일 입니다.');
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
            }
            //4. 비밀번호 확인하기 - 로그인할 email의 salt를 DB에서 가져와서 사용자가 request로 보낸 password와 암호화를 한후 디비에 저장되어있는 password와 일치하면 true
            // 일치하지 않으면 Miss Match password 반환
            const { id, userName, salt, password: hashedPassword } = alreadyEmail;
            const inputPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');
    
            if (inputPassword !== hashedPassword) {
                console.log('비밀번호가 일치하지 않습니다.');
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.OK, responseMessage.MISS_MATCH_PW));
            }
            //5. status: 200 ,message: SIGN_IN_SUCCESS, data: id, email, userName 반환
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS, {id, email, userName}));
    
        } catch(error){
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_IN_FAIL));
        }
    },

    readAll: async (req, res) => {
        //1. 모든 사용자 정보 (id, email, userName) 리스폰스!
        // status: 200, message: READ_USER_ALL_SUCCESS, data: id, email, userName 반환
        try {
            const allUser = await User.findAll({
                attributes: ['id', 'email', 'userName']
            });
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_USER_ALL_SUCCESS, allUser))
        } catch(error){
            console.log("read all error");
        }
    },

    readOne: async (req, res) => {
        //1. parameter로 id값을 받아온다! (id값은 인덱스값)
        const { id } = req.params;
        try {
            //2. id값이 유효한지 체크! 존재하지 않는 아이디면 NO_USER 반환
            const user = await User.findOne({
                attributes: ['id', 'email', 'userName'],
                where: {
                    id: id,
                }
            });
            //3. status:200 message: READ_USER_SUCCESS, id, email, userName 반환
            if (!user){
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
            } else {
                return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_USER_SUCCESS, user));
            }
        } catch(error){
            console.error('/:id API ERROR');
        }
    },

    deleteOne: async (req, res) => {
        const { id } = req.params;
        // id 값 로우 전체 삭제
        try{
            const user = await User.destroy({
                where: {
                    id: id
                }
            });
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_DELETE_SUCCESS, user));
        } catch(error){
            console.error('user delete error');
        }
    },

    updateOne: async (req, res) => {
        const { id } = req.params;
        const { email, userName } = req.body;
        try{
            const user = await User.update({email: email, userName: userName}, {
                where: {
                    id: id
                }
            });
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_UPDATE_SUCCESS, user));
        } catch(error){
            console.error('user put error');
        }
    }
}