import { Schema, model,models } from "mongoose";

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlngth: 3,
  },
  isDone : {
    type:Boolean ,
    default :false
  }
},{
    timestamps:true ,
    versionKey:false
});

const Todo = models.todo || model('todo',TodoSchema)
 export default Todo