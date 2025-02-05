import { createBrowserRouter } from "react-router"
import AppLayout from "./component/AppLayout";
import AllRecipes from "./component/RecipeDetails";
import Recipe from "./component/RecipeList";
import AddRecipe from "./component/AddRecipe";




export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children:
            [
                {
                    path: '/allRecipes', element: <AllRecipes />, children:
                        [{
                            path: ':id', element: <Recipe />
                        }]
                },
                { path: '/addRecipe', element: <AddRecipe /> },

            ]
    }

])
export default myRouter;

