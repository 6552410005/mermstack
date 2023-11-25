//ไฟล์ที่ทำงานกับข้อมูลใน Collection/Table ในฐานข้อมูล

const mongoose = require("mongoose");

//สร้าง schema ของ Collection ที่จะทำงานด้วย
const customerSchema = mongoose.Schema(
  {
    firstname: {
      require: true,
      type: String,
    },
    lastname: {
      require: true,
      type: String,
    },
    tel: {
      require: true,
      type: String,
    },
    email: {
      require: true,
      type: String,
    },
    sex: {
      require: true,
      type: String,
    },
    isActive: {
      require: true,
      type: Boolean,
    },
  },
  {
    collection: "customer",
    timestamps: true,
    versionKeys: false,
  }
);

module.exports = mongoose.model("customer", customerSchema);