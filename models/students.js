'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {...this.get(), id:undefined}
    }
  };
  Students.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4

    },
    student_name: { 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
            notNull:{
              msg:"Name cannot be empty"
            }
      }
    
    },
    student_email: {
      type:DataTypes.STRING,
      unique:{
        msg:"email already exists"
      },
      allowNull:false,
      validate:{
        isEmail:{
          msg:"invalid email address provided"
        },
        notNull:{
          msg:"please email cannot be empty "
        }
      }
      
    },
    student_password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"password cannot be empty"
        }
      }
    }
  }, {
    sequelize,
    tableName:"students",
    modelName: 'Students',
  });
  return Students;
};