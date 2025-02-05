import { useState } from "react";
import { Box, Button } from "@mui/material";
import Login from "./Login";
import { UserContext } from "./userContext";
import Username_avatar from "./UserNameAndAvatar";
import SignIn from "./SignIn";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false); // הוספת משתנה חדש

  const handleLoginSuccess = () => {
    setIsLogin(true);
    setIsLoginOpen(false);
  };

  const handleSignUpSuccess = () => {
    setIsLogin(true); // אם אתה רוצה שהמשתמש ייכנס אוטומטית אחרי הרשמה
    setSignUpOpen(false);
  };

  return (
    <>
      {!isLogin && (
     <Box sx={{ 
      position: "absolute", 
      top: 10, 
      left: 10, 
      display: "flex", 
      gap: 2 
  }}>
      <Button 
          variant="contained" 
          sx={{ 
              backgroundColor: '#4CAF50', 
              color: '#fff',
              fontSize: '1rem', 
              fontWeight: '500', 
              padding: '10px 15px',
              borderRadius: '8px', 
              '&:hover': { 
                  backgroundColor: '#388E3C', 
              },
          }} 
          onClick={() => setSignUpOpen(true)}>
          Sign
      </Button>
  
      <Button 
          variant="contained" 
          sx={{ 
              backgroundColor: '#2196F3', 
              color: '#fff', 
              fontSize: '1rem',
              fontWeight: '500', 
              padding: '10px 15px', 
              borderRadius: '8px', 
              '&:hover': { 
                  backgroundColor: '#1976D2', 
              },
          }} 
          onClick={() => setIsLoginOpen(true)}>
          Login
      </Button>
  </Box>
  
      )}

      <Login open={isLoginOpen} setOpen={setIsLoginOpen} onSuccess={handleLoginSuccess} />
      <SignIn open={isSignUpOpen} onClose={() => setSignUpOpen(false)} onSuccess={handleSignUpSuccess} />

      {isLogin && <Username_avatar />}
    </>
  );
};

export default HomePage;
