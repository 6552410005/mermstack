const Product = require("../models/Product");

//เพิ่ม(insert/create) collection Product
const insertProductCtrl = async (req, res) => {
  //นำข้อมูลที่ส่งมาเก็บใส่ OBJ เพื่อนำไปบันทึกลง Collection ใน mongoDB
  const product = new Product({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productQuantity: req.body.productQuantity,
    productStatus: req.body.productStatus,
  });
  //บันทึกข้อมูลลงใน collection
  try {
    const result = await Product.create(product);
    res.json(result);
  } catch {
    res.json({
      messgae:
        'Error: ไม่สามารถบันทึกข้อมูล "Product" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
    });
  }
};

//แก้ไข collection Product
const updateProductCtrl = async (req, res) => {
  const product = new Product({
    _id: req.body._id,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productQuantity: req.body.productQuantity,
    productStatus: req.body.productStatus,
  });
  try {
    const result = await Product.updateOne(
      { _id: product._id },
      {
        $set: {
          productName: req.body.productName,
          productPrice: req.body.productPrice,
          productQuantity: req.body.productQuantity,
          productStatus: req.body.productStatus,
        },
      }
    );
    res.json(result);
  } catch {
    res.json({
      messgae:
        'Error: ไม่สามารถอัพเดตข้อมูล "Product" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
    });
  }
};

//ลบ collection Product
const deleteProductCtrl = async (req, res) => {
    const product = new Product({
        _id: req.body._id
      });
      try {
        const result = await Product.deleteOne(
          { _id: product._id }
        );
        res.json(result);
      } catch {
        res.json({
          messgae:
            'Error: ไม่สามารถลบข้อมูล "Product" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
        });
      }
};

//ดึงข้อมูลทั้งหมด collection Product
const getAllProductCtrl = async (req, res) => {
  //ดึงข้อมูลทั้งหมดจาก collection
  try {
    const result = await Product.find(); //หรือ find({}) ก็ได้
    res.json(result);
  } catch {
    res.json({
      messgae:
        'Error: ไม่สามารถดึงข้อมูล "Product" ได้ กรุณาตรวจสอบและลองใหม่อีกครั้ง....',
    });
  }
};

module.exports = {
  insertProductCtrl,
  updateProductCtrl,
  deleteProductCtrl,
  getAllProductCtrl,
};