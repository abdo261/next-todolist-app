import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/connect";
import Todo from "../../../../models/model";
import { validateCreateTodo } from "@/utils/backend/validation";
import { formattedError } from "@/utils/backend/tools";
interface Request {
  json: () => Promise<{ text: string; isDone: boolean }>;
}
export const GET = async () => {
  try {
    connectToDB();
    const todos = await Todo.find();
    return NextResponse.json(todos, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectToDB();
    const { text, isDone } = await request.json();
    const { error } = validateCreateTodo({ text, isDone });
    if (error) {
      return NextResponse.json({ message: formattedError(error) },{status:400});
    }
    const todo = new Todo({ text, isDone });
    await todo.save();
    return NextResponse.json({ message: "todo created successefely", todo });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message },{status:500});
  }
};
