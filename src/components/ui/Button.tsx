import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  customStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ text, customStyle = "", ...props }) => {
  return (
    <button
      className={["sm:text-base text-sm bg-primary w-full rounded-xl cursor-pointer hover:opacity-70 hover:scale-103", customStyle].join(" ")}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
