import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home"

interface PageProps {
    path: string,
    element: JSX.Element;
}

// Typescript shenanigans: 
// This means routes is an array where each element must conform to the used interface.
const routes: PageProps[] = [
    {
        path: "/",
        element: <Home/>,
    },
];

const router = createBrowserRouter(routes);

const Routes: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default Routes;