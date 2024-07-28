"use client"
import React from 'react'
import {Modal as ModalUi, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
interface props {
    isOpen?:boolean;
    onOpen?:()=>void;
    onOpenChange?:(isOpen:boolean)=>void ;
    children?:React.ReactNode,
    title?:string
}
const Modal = ({isOpen, onOpen, onOpenChange,children ,title}:props) => {
 
  return (
    <>
    <ModalUi isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
            {children}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalUi>
  </>
  )
}

export default Modal