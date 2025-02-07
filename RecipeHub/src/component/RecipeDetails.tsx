import RecipesStore from "./recipeStore";
import { RecipeType } from "./recipeStore";
import { Box, Button, Grid, Grid2, IconButton, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Outlet, useNavigate } from "react-router-dom";

const RecipeDetails = observer(() => {
    const navigate = useNavigate();

    const handleNavigate = (recipe: RecipeType) => {
        navigate(`${recipe.id}`); 
    }

    return (
        <Grid2 container spacing={2}>
             <Grid2 size={{ xs: 12, md: 5 }}>
                <Box   sx={{ 
        mt: 2, 
       
        backgroundColor: 'rgba(14, 24, 218, 0.5)', 
        color: '#fff',
        fontSize: '1.2rem', 
        fontWeight: 'bold',
        padding: '10px 20px', 
        borderRadius: '12px',
        
        '&:hover': { 
            backgroundColor: 'rgba(144, 238, 156, 0.5)', 
        },
    }}>
                 <h2 style={{ color: "rgba(18, 3, 54, 0.5)", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
                  My Recipes
                </h2>
                    {RecipesStore.list.map((recipe) => (
                        <Button style={{ color: "rgba(13, 11, 12, 0.5)",fontWeight:"lighter"}} key={recipe.id} onClick={() => handleNavigate(recipe)} fullWidth>
                            {recipe.title}
                        </Button>
                    ))}
                </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 7 }}>
                <Box sx={{
                    padding: 2,
                    border: '3px solidrgb(221, 86, 86)',
                    height: '100%',
                    boxShadow: '0px 6px 10px rgba(238, 144, 197, 0.5)',
                }}>
                    <Outlet /> 
                </Box>
            </Grid2>
        </Grid2>
    );
});

export default RecipeDetails;
