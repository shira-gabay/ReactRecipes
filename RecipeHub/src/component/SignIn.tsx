import React, { useRef, FormEvent, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./userContext"; 
import { Box, Button, TextField, Modal, Typography, Alert } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface SignInProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const SignIn: React.FC<SignInProps> = ({ open, onClose, onSuccess }) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const context = useContext(UserContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      const userData = {
        name: firstNameRef.current?.value,
        password: passwordRef.current?.value,
      };
      const res = await axios.post("http://localhost:3000/api/user/register", userData);

      if (res.status === 201 || res.status === 200) {
        context?.userDispatch({
          type: "CREATE",
          data: {
            id: res.data.userId,
            name: firstNameRef.current?.value || "",
            password: passwordRef.current?.value || "",
          },
        });
        onSuccess(); 
        onClose(); 
      }
    } catch (e: any) {
      if (e.response?.status === 400) {
        setErrorMessage("User already exists");
      } else {
        setErrorMessage("Unexpected error occurred");
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="sign-in-title">
      <Box sx={style}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <TextField label="Username" inputRef={firstNameRef} fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" type="password" inputRef={passwordRef} fullWidth sx={{ mb: 2 }} />
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          fullWidth 
          sx={{ background: "pink", color: "white", borderRadius: "10px" }}
        >
          Register
        </Button>
      </Box>
    </Modal>
  );
};

export default SignIn;
