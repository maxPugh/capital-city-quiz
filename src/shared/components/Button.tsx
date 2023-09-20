type ButtonProps = {
  text: string;
  handleClick: () => void;
  disabled?: boolean;
};

const Button = ({ text, handleClick, disabled = false }: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 w-48 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-pointer-none"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
