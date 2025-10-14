import { Box , TextField} from "@mui/material"

interface CustomInputProps {
  placeholder: string;
  type?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ placeholder, type, onChange, name }: CustomInputProps) {
  return (
    <Box>
        <TextField variant="standard" fullWidth placeholder={placeholder} type={type} name={name}
        onChange={onChange}
        sx={{
          "& .MuiInputBase-input": {
            color: "White",
          },
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "secondary.main",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "secondary.main",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },
        }}
        />
    </Box>
  )
}

export default CustomInput