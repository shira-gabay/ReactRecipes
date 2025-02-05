import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

const NavBar = () => {
  const context = useContext(UserContext);

  return (
<nav style={{
    position: "fixed",
    top: "5px",
    right: "50px",
    display: "flex",
    gap: "30px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "600",
    fontSize: "1rem",
    zIndex: "1000"
}}>
    <Link 
        to="/" 
        style={{
            color: "#fff",
            textDecoration: "none",
            padding: "8px 20px",
            borderRadius: "20px",
            backgroundColor: "#007bff",
            transition: "background-color 0.3s ease",
        }}>
        Home
    </Link>

    <Link 
        to="/allRecipes" 
        style={{
            color: "#fff",
            textDecoration: "none",
            padding: "8px 20px",
            borderRadius: "20px",
            backgroundColor: "#28a745",
            transition: "background-color 0.3s ease",
        }}>
        Show Recipes
    </Link>

    {context?.user && context.user.id && (
        <Link 
            to="/addRecipe" 
            style={{
                color: "#fff",
                textDecoration: "none",
                padding: "8px 20px",
                borderRadius: "20px",
                backgroundColor: "#ffc107",
                transition: "background-color 0.3s ease",
            }}>
            Add Recipe
        </Link>
    )}
</nav>

  );
};

export default NavBar;
