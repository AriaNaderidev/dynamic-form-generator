interface SubmitButtonProps {
  children: string;
}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <input
      type="submit"
      className="w-full cursor-pointer justify-end rounded-md bg-black p-2 text-center font-medium text-white"
      value={children}
    />
  );
};

export default SubmitButton;
