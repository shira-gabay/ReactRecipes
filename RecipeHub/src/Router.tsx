import { createBrowserRouter } from "react-router"
import AppLayout from "./component/AppLayout";
import RecipeDetails from "./component/RecipeDetails";
import RecipeList from "./component/RecipeList";
import AddRecipe from "./component/AddRecipe";




export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children:
            [
                {
                    path: '/allRecipes', element: <RecipeDetails />, children:
                        [{
                            path: ':id', element: <RecipeList />
                        }]
                },
                { path: '/addRecipe', element: <AddRecipe /> },

            ]
    }

])
export default myRouter;

