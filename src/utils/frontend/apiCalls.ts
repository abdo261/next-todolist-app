import axios from "axios";

export const getTodos = async () => {
  let error = null;
  let todos = null;

  try {
    const response = await axios.get("http://localhost:3000/api/todos");
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

  try {
    const response = await axios.put(`http://localhost:3000/api/todos/${id}`,data);
    result = response.data;
    
  } catch (err) {
    console.log(err);
    error = err;
   
  }
  return {error,result}
};
