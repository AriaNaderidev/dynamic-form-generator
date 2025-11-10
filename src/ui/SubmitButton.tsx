const SubmitButton = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
  };

  return (
    <input
      onClick={handleSubmit}
      type="submit"
      className="w-20 cursor-pointer justify-end rounded-md bg-black p-2 text-center font-medium text-white"
    />
  );
};

export default SubmitButton;
