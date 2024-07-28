"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";

interface ButtonProps {
  text: string | React.ReactNode;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  spinner?: React.ReactNode;
  spinnerPlacement?: "start" | "end";
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
  className?: string;
  mosalContent?:React.ReactNode;
  title?:string
}

const Btn = ({
  text,
  variant,
  color,
  size,
  radius,
  startContent,
  endContent,
  spinner,
  spinnerPlacement,
  fullWidth,
  isIconOnly,
  isDisabled,
  isLoading,
  disableRipple,
  disableAnimation,
  className,
  mosalContent,
  title

}: ButtonProps) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        startContent={startContent}
        endContent={endContent}
        spinner={spinner}
        spinnerPlacement={spinnerPlacement}
        fullWidth={fullWidth}
        isIconOnly={isIconOnly}
        isDisabled={isDisabled}
        isLoading={isLoading}
        disableRipple={disableRipple}
        disableAnimation={disableAnimation}
        onClick={onOpenChange}
        className={className}
      >
        {text}
      </Button>
      <Modal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} title={title}>{mosalContent}</Modal>
    </>
  );
};

export default Btn;
