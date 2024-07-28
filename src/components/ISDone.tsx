"use client";

import { updateTodo } from '@/utils/frontend/apiCalls';
import { Chip } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdRemoveDone } from 'react-icons/md';

const ISDone = ({ isDone, id }: { isDone: boolean; id: string }) => {
    const [Done,setDone]=useState(isDone)
  const handelClick = async () => {
    console.log('frent end clicked ')
    const { error } = await updateTodo({ isDone: !Done }, id);
    if (!error) {
        setDone(!Done);
    }
  };

  return (
    <Chip
      color={Done ? "success" : "danger"}
      startContent={Done ? <IoCheckmarkDoneSharp size={18} /> : <MdRemoveDone size={18} />}
      className="cursor-pointer"
      onClick={handelClick}
      
    >
      {Done ? "Done" : "UnDone"}
    </Chip>
  );
};

export default ISDone;
