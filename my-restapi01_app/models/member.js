//ไฟล์ที่ทำงานกับข้อมูลใน Collection/Table ในฐานข้อมูล

const mongoose = require("mongoose");

//สร้าง schema ของ Collection ที่จะทำงานด้วย
const memberSchema = mongoose.Schema(
  {
    firstname: {
      require: true,
      type: String,
    },
    lastname: {
      require: true,
      type: String,
    },
    age: {
      require: true,
      type: Number,
    },
    isActive: {
      require: true,
      type: Boolean,
    },
  },
  {
    collection: "member",
    timestamps: true,
    versionKeys: false,
  }
);

module.exports = mongoose.model("member", memberSchema);
