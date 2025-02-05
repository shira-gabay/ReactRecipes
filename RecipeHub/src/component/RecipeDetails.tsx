import RecipesStore from "./recipeSlice";
import { RecipeType } from "./recipeSlice";
import { Box, Button, Grid, Grid2, IconButton, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Outlet, useNavigate } from "react-router-dom"; //  שימוש ב-Outlet ו-useNavigate

const AllRecipes = observer(() => {
    const navigate = useNavigate();

    const handleNavigate = (recipe: RecipeType) => {
        navigate(`${recipe.id}`); 
    }

    return (
        <Grid2 container spacing={2}>
             <Grid2 size={{ xs: 12, md: 5 }}>
                <Box   sx={{ 
        mt: 2, 
        backgroundColor: '#FF6347', 
        color: '#fff',
        fontSize: '1.2rem', 
        fontWeight: 'bold',
        padding: '10px 20px', 
        borderRadius: '12px',
        '&:hover': { 
            backgroundColor: '#FF4500', 
        },
    }}>
                    <h2>My Recipes </h2>
                    {RecipesStore.list.map((recipe) => (
                        <Button key={recipe.id} onClick={() => handleNavigate(recipe)} fullWidth>
                            {recipe.title}
                        </Button>
                    ))}
                </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 7 }}>
                <Box sx={{
                    padding: 2,
                    border: '1px solid #ccb3b3',
                    height: '100%',
                    boxShadow: '0px 6px 10px rgba(112, 26, 75, 0.5)',
                }}>
                    <Outlet /> 
                </Box>
            </Grid2>
        </Grid2>
    );
});

export default AllRecipes;
