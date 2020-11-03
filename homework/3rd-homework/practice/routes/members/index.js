const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
let membersDB = require('../../modules/members');

/** 멤버를 생성 */
// CREATE
router.post('/createMember', (req, res) => {
    // Requset body에서 받아올 값들을 선언!
    const {name, part, age} = req.body; 
    // 만약 값들이 없다면 bad-request를 날린다.
    if (!name || !part || !age){ 
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    // idx(기본키) 값은 서버에서 값을 쟁해주자! 마지막 idx값에서 +1 해준다.
    const idx = membersDB[membersDB.length - 1].idx + 1; 
    // membersDB는 array로 된 DB니까 Array Method push()를 이용해서 DB에 값을 추가!
    membersDB.push({ 
        idx,
        name,
        part,
        age
    });
    // 상위 로직을 통과하면 OK를 보낸다.
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_CREATE_SUCCESS, membersDB));
});

/** 모든 멤버 조회 */
// READ
router.get('/', (req, res) => {
    const members = membersDB;
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_ALL_SUCCESS, members));
})
/** idx 값으로 특정 멤버 조회 */
router.get('/:idx', (req, res) => {
    const {idx} = req.params;
    if(!idx){
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    // find() 함수를 사용해서 특정 idx를 찾아서 객체를 리턴해준다.
    const member = membersDB.find(member => member.idx == idx); 
    if(member === undefined){
        console.log('idx가 유효하지 않습니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_SUCCESS, member));
})

/** idx값으로 특정 멤버 정보 수정 */
// UPDATE
router.put('/:idx', (req, res) => {
    const {name, part, age} = req.body;
    const {idx} = req.params;

    if(!idx){
        console.log('idx 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    if (!name || !part || !age){ 
        console.log('name or part or age 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const memberIdx = membersDB.findIndex(member => member.idx == idx);
    if(memberIdx === -1) {
        console.log('idx가 유효하지 않습니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    membersDB[memberIdx] = {
        idx: Number.parseInt(idx),
        name, 
        part,
        age
    }

    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_UPDATE_SUCCESS, membersDB));
});

/** idx값으로 특정 멤버 삭제 */
// DELETE
router.delete('/:idx', (req, res) => {
    const { idx } = req.params;
    if( !idx ) {
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const member = membersDB.filter(member => member.idx == idx);
    if (member.length === 0) {
        console.log('idx가 유효하지 않습니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    membersDB = membersDB.filter(member => member.idx != idx);
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_DELETE_SUCCESS, membersDB));
});

module.exports = router;