"use client";

import { updateTodo } from '@/utils/frontend/apiCalls';
import { Chip } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdRemoveDone } from 'react-icons/md';
import { toast } from 'react-toastify';

const ISDone = ({ isDone, id }: { isDone: boolean; id: string }) => {
  const [Done, setDone] = useState(isDone);

  const handelClick = async () => {
    console.log('front end clicked');
    const { error } = await updateTodo({ isDone: !Done }, id);
    if (!error) {
      setDone(!Done);
      toast.success(`now you make todo ${!Done ? "checked" : "unchecked"}`);
    } else {
      toast.error(`error check the todo ${error?.message || error?.response?.data?.message}`);
    }
  };

  return (
    <div onClick={handelClick}>
      <Chip
        color={Done ? "success" : "danger"}
        startContent={Done ? <IoCheckmarkDoneSharp size={18} /> : <MdRemoveDone size={18} />}
        className="cursor-pointer"
      >
        {Done ? "Done" : "UnDone"}
      </Chip>
    </div>
  );
};

export default ISDone;
