import React from "react";
import { Chip, Tooltip } from "@nextui-org/react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import Edite from "@/components/Edite";
import Delete from "@/components/Delete";
import Btn from "./Btn";
import { MdRemoveDone } from "react-icons/md";
import ISDone from "./ISDone";
interface TodoProps {
  todo: {
    text: string;
    isDone: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
}
const Todo = ({ todo }: TodoProps) => {
  return (
    <tr className="odd:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <Tooltip
          size="lg"
          showArrow={true}
          color="foreground"
          content={todo.text}
        >
          <div className=" text-ellipsis overflow-hidden whitespace-nowrap w-[350px] text-xl cursor-pointer hover:underline">
            {todo.text}
          </div>
        </Tooltip>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
       <ISDone  isDone={todo.isDone} id={todo._id}/>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <div className="flex items-center justify-end ">
          <Btn
            text={<FiEdit size={20} />}
            variant="light"
            isIconOnly={true}
            color="warning"
            size="sm"
            radius="full"
            mosalContent={<Edite  />}
            title="Edite Todo "
          />
          <Btn
            text={<FaRegTrashCan size={20} />}
            variant="light"
            isIconOnly={true}
            color="danger"
            size="sm"
            radius="full"
            mosalContent={<Delete />}
            title="Delete Todo "
          />
        </div>
      </td>
    </tr>
  );
};

export default Todo;
