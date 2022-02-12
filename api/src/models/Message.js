const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Message",
  {
    messageid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    note:{
      type: DataTypes.STRING,
    }
  },
  { timestamps: false }
)};