import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  type: string
  placeholder: string
  childrenLeft?: React.ReactNode
  childrenRight?: React.ReactNode
}

const InputText: React.FC<InputProps> = ({ id, label, type, placeholder, childrenLeft, childrenRight, ...props }) => {
  return (
  <>
    <p className="sm:text-base text-sm">{label}</p>
    <label htmlFor={id} className=" p-4 rounded-xl w-full bg-secondary flex items-center" >
      {childrenLeft}
      <input className="outline-none w-full ps-3 sm:text-base text-[12px]" id={id} type={type} placeholder={placeholder} {...props}  />
      {childrenRight}
    </label>
  </>
  );
};

export default InputText;
