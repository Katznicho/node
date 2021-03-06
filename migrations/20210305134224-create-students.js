'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      uuid:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_name: {
        type: Sequelize.STRING,
        allowNull:false,
        
      },
      student_email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      student_password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};