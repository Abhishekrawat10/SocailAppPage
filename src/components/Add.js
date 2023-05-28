import { Box, Button, Fab, Modal, Tooltip, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Add = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={(e)=>setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% -25px)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>Hello</Box>
      </Modal>
    </>
  );
};

export default Add;
