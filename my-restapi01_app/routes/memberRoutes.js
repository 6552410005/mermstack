//ใช้งาน API กับ Collection: member
const express = require('express')
const memberController = require('./../controllers/memberController');

const router = express.Router()

router.post('/member',memberController.insertMemberCtrl)

router.get('/member',memberController.getAllMemberCtrl)

router.put('/member',memberController.updateMemberCtrl)

router.delete('/member',memberController.deleteMemberCtrl)

module.exports = router