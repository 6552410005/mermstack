//ไฟล์ที่ทำงานกับข้อมูลใน Collection/Table ในฐานข้อมูล

const mongoose = require("mongoose");

//สร้าง schema ของ Collection ที่จะทำงานด้วย
const productSchema = mongoose.Schema(
  {
    productName: {
      require: true,
      type: String,
    },
    productPrice: {
      require: true,
      type: Number,
    },
    productQuantity: {
      require: true,
      type: Number,
    },
    productStatus: {
      require: true,
      type: Boolean,
    },
  },
  {
    collection: "product",
    timestamps: true,
    versionKeys: false,
  }
);

module.exports = mongoose.model("product", productSchema);