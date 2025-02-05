import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, Modal, TextField, Container, Typography } from "@mui/material";
import RecipesStore, { RecipeType } from "./recipeSlice";
import { UserContext } from "./userContext";
import { useContext, useState } from "react";
const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    ingredients: yup.string().required("Ingredients are required"),
    instructions: yup.string().required("Instructions are required"),
});
const AddRecipe = () => {
    const [isOpen, setIsOpen] = useState(true);
    const context = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: any) => {
        const newRecipe: RecipeType = {
            title: data.title,
            description: data.description,
            ingredients: data.ingredients.split(",").map((i: string) => i.trim()),
            instructions: data.instructions,
            id: "",
            authorId: "",
        };
        if (context && context.user) {
            RecipesStore.addRecipe(newRecipe, context.user.id);
            reset();
            setIsOpen(false);
        }
    };
    return (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <Container maxWidth="sm" sx={{ bgcolor: "background.paper", p: 3, borderRadius: 2, boxShadow: 24 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Add a New Recipe</Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <TextField
                        label="Title"
                        {...register("title")}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                    <TextField
                        label="Description"
                        {...register("description")}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                    <TextField
                        label="Ingredients (comma-separated)"
                        {...register("ingredients")}
                        error={!!errors.ingredients}
                        helperText={errors.ingredients?.message}
                    />
                    <TextField
                        label="Instructions"
                        multiline rows={4}
                        {...register("instructions")}
                        error={!!errors.instructions}
                        helperText={errors.instructions?.message}
                    />
                  <Button 
    type="submit" 
    variant="contained" 
    sx={{ 
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
    }}
>
    Add Recipe
</Button>
                </form>
            </Container>
        </Modal>
    );
};
export default AddRecipe;
