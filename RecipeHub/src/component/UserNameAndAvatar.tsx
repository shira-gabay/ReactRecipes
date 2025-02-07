import { Box, Avatar, Typography, Button, Modal } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useContext, useState } from "react";
import { UserContext } from "./userContext";
import Update from "./UpdateUserDetails";

const style = {
  position: "absolute",
  top:"10px",
  left: "5%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 2,
  padding: 2,
  width: 250,
  borderRadius: 2,
}
const Username_avatar = () => {
  const context = useContext(UserContext);
  const [open, setOpen] = useState(false)
  console.log( context);
  
  if (!context)
    return null;
  return (<>
  <Button color="primary" variant="contained"
        sx={{
          top:"10px",
          left:"20px",
          background: 'pink',
          color: 'white',
          borderRadius: '10px',
          border: '2px solid white', mt: 2
        }} onClick={() => setOpen(true)}>update your details</Button>
    <Box sx={style}>
      <Typography sx={{ fontWeight: "bold", color: "#222" }}
      >Hello {context.user.name}</Typography>
      <Avatar sx={{ bgcolor: pink[600], width: 56, height: 56, fontSize: 24, fontWeight: "bold", }}
      >{context.user.name[0]}</Avatar>
 </Box>
    <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="update-form-modal">
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}
      >
        <Update setUpdate={() => setOpen(false)} />
      </Box>
    </Modal>
  </>)

}
export default Username_avatar;