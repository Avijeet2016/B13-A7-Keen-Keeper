import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/timeline",
                Component: Timeline
            }, 
            {
                path: "/stats", 
                Component: Stats
            }
        ]
    }
])