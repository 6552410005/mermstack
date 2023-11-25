const Customer = require('../models/Customer');

//เพิ่ม(insert/create) collection Customer
const insertCustomerCtrl = async (req, res) => {
  //นำข้อมูลที่ส่งมาเก็บใส่ OBJ เพื่อนำไปบันทึกลง Collection ใน mongoDB
  const customer = new Customer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    tel: req.body.tel,
    email: req.body.email,
    sex: req.body.sex,
    isActive: req.body.isActive,
  });
  //บันทึกข้อมูลลงใน collection
  try {
    const result = await Customer.create(customer);
    res.json(result);
  } catch {
    res.json({
      messgae:
        'Error: ไม่สามารถบันทึกข้อมูล "Customer" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
    });
  }
};

//แก้ไข collection Customer
const updateCustomerCtrl = async (req, res) => {
  const customer = new Customer({
    _id: req.body._id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    tel: req.body.tel,
    email: req.body.email,
    sex: req.body.sex,
    isActive: req.body.isActive,
  });
  try {
    const result = await Customer.updateOne(
      { _id: customer._id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          tel: req.body.tel,
          email: req.body.email,
          sex: req.body.sex,
          isActive: req.body.isActive,
        },
      }
    );
    res.json(result);
  } catch {
    res.json({
      messgae:
        'Error: ไม่สามารถอัพเดตข้อมูล "Customer" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
    });
  }
};

//ลบ collection Customer
const deleteCustomerCtrl = async (req, res) => {
    const customer = new Customer({
        _id: req.body._id
      });
      try {
        const result = await Customer.deleteOne(
          { _id: customer._id }
        );
        res.json(result);
      } catch {
        res.json({
          messgae:
            'Error: ไม่สามารถลบข้อมูล "Customer" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
        });
      }
};

//ดึงข้อมูลทั้งหมด collection Customer
const getAllCustomerCtrl = async (req, res) => {
  //ดึงข้อมูลทั้งหมดจาก collection
  try {
    const result = await Customer.find(); //หรือ find({}) ก็ได้
    res.json(result);
  } catch {
    res.json({
      messgae:
        'Error: ไม่สามารถดึงข้อมูล "Customer" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
    });
  }
};

module.exports = {
  insertCustomerCtrl,
  updateCustomerCtrl,
  deleteCustomerCtrl,
  getAllCustomerCtrl,
};