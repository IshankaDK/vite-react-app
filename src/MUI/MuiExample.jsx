import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const MuiExample = () => {
  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="outlined" endIcon={<SendIcon />}>
        Outlined
      </Button>
      <Button variant="contained" onClick={() => alert("clicked")} disabled={false} color={"warning"}>
        Contained
      </Button>
    </>
  );
};

export default MuiExample;
