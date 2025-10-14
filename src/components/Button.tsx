import { Stack, Button } from "@mui/material";

interface ButtonExampleProps {
  label: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

function ButtonExample({ label, onClick, type }: ButtonExampleProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" fullWidth sx={{ "&:hover": { bgcolor: "text.primary", color: "background.default" }}} onClick={onClick} type={type}>{label}</Button>
    </Stack>
  );
}

export default ButtonExample;