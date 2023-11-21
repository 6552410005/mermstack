const Member = require("../models/member");

//เพิ่ม(insert/create) collection member
const insertMemberCtrl = async (req, res) => {
  //นำข้อมูลที่ส่งมาเก็บใส่ OBJ เพื่อนำไปบันทึกลง Collection ใน mongoDB
  const member = new Member({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    isActive: req.body.isActive,
  });
  //บันทึกข้อมูลลงใน collection
  try {
    const result = await Member.create(member);
    res.json(result);
  } catch {
    res.json({
      messgae:
        "Error: ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....",
    });
  }
};

//แก้ไข collection member
const updateMemberCtrl = async (req, res) => {
  const member = new Member({
    _id: req.body._id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    isActive: req.body.isActive,
  });
  try {
    const result = await Member.updateOne(
      { _id: member._id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          age: req.body.age,
          isActive: req.body.isActive,
        },
      }
    );
    res.json(result);
  } catch {
    res.json({
      messgae:
        "Error: ไม่สามารถอัพเดตข้อมูลได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....",
    });
  }
};

//ลบ collection member
const deleteMemberCtrl = async (req, res) => {
    const member = new Member({
        _id: req.body._id
      });
      try {
        const result = await Member.deleteOne(
          { _id: member._id }
        );
        res.json(result);
      } catch {
        res.json({
          messgae:
            "Error: ไม่สามารถลบข้อมูลได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....",
        });
      }
};

//ดึงข้อมูลทั้งหมด collection member
const getAllMemberCtrl = async (req, res) => {
  //ดึงข้อมูลทั้งหมดจาก collection
  try {
    const result = await Member.find(); //หรือ find({}) ก็ได้
    res.json(result);
  } catch {
    res.json({
      messgae:
        "Error: ไม่สามารถดึงข้อมูลได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....",
    });
  }
};

module.exports = {
  insertMemberCtrl,
  updateMemberCtrl,
  deleteMemberCtrl,
  getAllMemberCtrl,
};
