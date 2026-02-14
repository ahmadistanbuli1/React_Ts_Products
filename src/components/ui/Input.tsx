type IProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: IProps) => {
  return (
    <input
      className="transition-all block focus:outline-fuchsia-700 w-full border border-gray-200 p-2.5 rounded-md my-1.5"
      {...props}
    />
  );
};

export default Input;
