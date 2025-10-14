import { Stack, Button } from "@mui/material";

interface ButtonExampleProps {
  label: string;
}

function ButtonExample({ label }: ButtonExampleProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" fullWidth sx={{ "&:hover": { bgcolor: "text.primary", color: "background.default" }}}>{label}</Button>
    </Stack>
  );
}

export default ButtonExample;