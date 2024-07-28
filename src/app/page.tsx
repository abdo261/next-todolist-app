import Alert from "@/components/Alert";
import Btn from "@/components/Btn";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";

import Create from "@/components/Create";
import { getTodos } from "@/utils/frontend/apiCalls";
import Todo from "@/components/Todo";
interface TodoProps {
 
    text: string;
    isDone: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
 
}
export default async function Home() {
  const handleClick = () => toast.success("Hello");
const {todos,error} = await getTodos()
console.log( {todos,error} )
  return (
    <div className="flex flex-col  gap-3">
      <div className="flex justify-between items-center bg-white rounded-lg p-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-center underline">
          Todo list App
        </h1>
        <Btn
          text="Add New Todo"
          color="primary"
          className="font-bold"
          startContent={<FaPlus />}
          mosalContent={<Create/>}
          title="Create New Todo"
        />
      </div>
      <div className="rounded-lg bg-white p-4">
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      { todos &&  <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200  text-sm border-1 border-gray-200 rounded-md">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
              
                <th className="whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-900">
                  Task
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-xl text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
            {
              todos.map((t:TodoProps)=>(
                <Todo todo={t} key={t._id}/>
              ))
            }
              {/* <tr className="odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  2
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <Tooltip size='lg' showArrow={true} color="foreground"  content="I am a tooltip"> 
                  <div className=" text-ellipsis overflow-hidden whitespace-nowrap w-[350px] text-xl cursor-pointer hover:underline">
                  
                    John Doe g g gfgfgfg gfgfg dsqdqsdqsdqsdqsdqsd
                  </div>
                  </Tooltip>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <Chip
                    color="danger"
                    startContent={<MdRemoveDone size={18} />}
                    className="cursor-pointer"
                  >
                    UnDone
                  </Chip>
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
                    />
                    <Btn
                      text={<FaRegTrashCan size={20} />}
                      variant="light"
                      isIconOnly={true}
                      color="danger"
                      size="sm"
                      radius="full"
                    />
                  </div>
                </td>
              </tr> */}
             
            </tbody>
          </table>
        </div>}
      </div>
    </div>
  );
}
