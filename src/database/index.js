import mongoose from "mongoose";
import "./connect"

const Records= mongoose.model( {
    'amount':{ name:String},
    'category': { name: String},
    'type': { name: String}

},
{
timestamps:true
}

)

export  {Records } 

