import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home"

interface PageProps {
    path: string,
    element: JSX.Element;
}

const routes: PageProps[] = [
    {
        path: "/",
        element: <Home/>,
    },
];

// Pass routes to the router
const router = createBrowserRouter(routes);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;