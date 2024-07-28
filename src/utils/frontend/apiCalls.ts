import axios from "axios";

export const getTodos = async () => {
  let error:any = null;
  let todos:any = null;

  try {
    const response = await axios.get("https://next-todolist-app.vercel.app/api/todos");
    todos = response.data;
  } catch (err) {
    console.log(err);
    error = err;
   
  }
  return {error,todos}
};
export const updateTodo = async (data:{text?:string,isDone?:boolean},id:string) => {
  let error = null;
  let result = null;
console.log("clicked")
  try {
    const response = await axios.put(`https://next-todolist-app.vercel.app/api/todos/${id}`,data);
    result = response.data;
    
  } catch (err) {
    console.log(err);
    error = err;
   
  }
  return {error,result}
};
