type AnswerButtonProps = {
  text: string;
  handleClick: () => void;
  disabled: boolean;
};

const AnswerButton = ({
  text,
  handleClick,
  disabled = false,
}: AnswerButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-md bg-orange-300 w-48 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-pointer-none"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default AnswerButton;
