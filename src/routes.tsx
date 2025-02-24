import { createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "./pages";
import { Users, Profile, Settings, Dash, Products } from "./views";
import { Orders } from "./views/Orders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: '',
                element: <Dash />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'products',
                element: <Products />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
]);