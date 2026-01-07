interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`${className} ${width} transition-all text-white font-bold p-1.5 rounded-md cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
