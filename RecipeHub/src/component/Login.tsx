import React, { useRef, FormEvent } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { Box, Button, TextField, Container, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #444",
  boxShadow: 24,
  p: 4,
};

const Login = ({ open, setOpen, onSuccess }: { open: boolean; setOpen: (value: boolean) => void; onSuccess: () => void }) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const context = useContext(UserContext);

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const link = "http://localhost:3000/api/user/login";
      const userData = {
        name: firstNameRef.current?.value,
        password: passwordRef.current?.value,
      };
      const res = await axios.post(link, userData);
      if (res.status === 201 || res.status === 200) {
        context?.userDispatch({
          type: "CREATE",
          data: {
            id: res.data.user.id,
            name: firstNameRef.current?.value || "",
            password: passwordRef.current?.value || "",
          },
        });
        onSuccess(); 
        alert("Logged in successfully");
      }
    } catch (e: any) {
      console.error("❌ Full error:", e);
      if (e.response?.status === 401) {
        alert("User not found");
      } else {
        alert("Unexpected error occurred");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Modal
        open={open}
        onClose={() => setOpen(false)} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField label="First Name" inputRef={firstNameRef} fullWidth />
          <TextField label="Password" type="password" inputRef={passwordRef} fullWidth sx={{ mt: 2 }} />
          <Button
            onClick={handleSubmitLogin}
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              background:"pink",
              color: "white",
              borderRadius: "10px",
              border: "2px solid white",
              mt: 2,
            }}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Login;
