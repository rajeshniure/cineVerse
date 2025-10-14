import { Box , TextField} from "@mui/material"

function CustomInput({placeholder}:{placeholder:string}) {
  return (
    <Box>
        <TextField id="standard-basic" variant="standard" fullWidth placeholder={placeholder}
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