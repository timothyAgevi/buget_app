import mongoose from "mongoose";

const connector = async()=>{ 
 await mongoose.connect('mongodb://localhost:27017/test')
 .then(() => {
    console.log("Record saved succesfully ")
  })
  .catch ((error) => {
    console.log("Error saving record ", error)
  })
}

connector()