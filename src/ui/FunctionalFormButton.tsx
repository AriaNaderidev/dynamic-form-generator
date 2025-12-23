import { Button } from "@mui/material";

type FunctionalFormButtonProps = {
  resetText: string;
  submitText: string;
};

const FunctionalFormButton = ({
  resetText,
  submitText,
}: FunctionalFormButtonProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "var(--primary-btn-color)",
          "&:hover": {
            backgroundColor: "#3f4e8ad2",
          },
        }}
        className="w-full cursor-pointer justify-end rounded-md p-2 text-center font-medium text-white"
      >
        {submitText}
      </Button>
      <Button
        variant="contained"
        type="reset"
        sx={{
          backgroundColor: "var(--primary-btn-color)",
          "&:hover": {
            backgroundColor: "#3f4e8ad2",
          },
        }}
        className="w-full cursor-pointer justify-end rounded-md p-2 text-center font-medium text-white"
      >
        {resetText}
      </Button>
    </div>
  );
};

export default FunctionalFormButton;
