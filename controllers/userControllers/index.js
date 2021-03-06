const {Students} = require("../../models");

const bcrypt = require('bcrypt');
const saltRounds = 10;

//registet
const Save = async (req, res)=>{
    const {student_password, student_name, student_email} = req.body


    try{
        const generateSalt = await bcrypt.genSalt(saltRounds)
        console.log(generateSalt);
        const hashedPassword =  await bcrypt.hash(student_password, generateSalt)
        console.log(hashedPassword)
        const newStudentObject = {
            student_password:hashedPassword,
            student_name,
            student_email
        }
       // console.log(newStudentObject)
       const create = await Students.create(newStudentObject)
       //sendback registered user
       
       res.status(200).send({email:student_email,sucess:true, name:student_name})

    }
    catch(err){
        res.status(201).json({msg:err.errors[0].message})
    }

}


//console.log("created successfully")
const login = async (req,res)=>{
    const {student_email , student_password} = req.body
    const findStudent = await Students.findOne({where:{student_email}})
    if(findStudent){
        try{

         //const {student_password} = findStudent;
         const comparedPasswords = await bcrypt.compare(student_password,findStudent.student_password)
    
          if(comparedPasswords){
              const {student_email, student_name} = findStudent
              res.status(200).send({student_email, student_name})

          }
          else{
              res.status(201).send({msg:"wrong credentials provided"})
          }

        }
        catch(err){
            res.status(201).json({msg:"things are wrong"})
        }
    }
    else{
        res.status(201).send({msg:"wrong credentials provided"})
    }

}
module.exports = {
    save:Save,
    login
}