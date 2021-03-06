const express = require("express")
//require cor
const cors = require("cors")
//object mapper db
const { Sequelize } = require('./models');
//init
const app = express();
//middleware
app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cors())
//Sequelize.authenticate
//create
//http://localhost:3000/user/register
const port = 5000;

//route
const studentRoutes = require("./routes/userRoutes")
app.use("/student", studentRoutes)

app.listen(port, ()=>{
    // try {
    //     await Sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    //   }
    
   console.log("connected well")
} )