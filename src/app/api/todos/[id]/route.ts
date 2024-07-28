import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "../../../../../lib/connect";
import Todo from "../../../../../models/model";
import { validateUpdateTodo } from "@/utils/backend/validation";
import { formattedError } from "@/utils/backend/tools";

// interface Request {
//     json : ()=>Promise<{text?:string ; isDone?:boolean}>
// }
interface RequestBody {
  text?: string;
  isDone?: boolean;
}
export const PUT = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const { id } = context.params;
    const { text, isDone }: RequestBody = await request.json();
    const { error } = validateUpdateTodo({ text, isDone });
    if(error){
        return NextResponse.json({message:formattedError(error)},{status:400})
    }
    const todo = await Todo.findByIdAndUpdate(
      id,
      { text, isDone },
      { new: true }
    );
    if (!todo) {
      return NextResponse.json(
        { message: "todo note found !" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "todo updates succesefely ", todo },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const { id } = context.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return NextResponse.json({ message: "todo not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "todo deleted succesezfely ", todo },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
};
