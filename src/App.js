import React from "react";
import ReactDOM from 'react-dom/client'
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const App = () => {
    return (
        <div>
            <Head />
            <RouterProvider router={appRouter} />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/watch",
                element: <WatchPage />
            },
            {
                path: "/",
                element: <MainContainer />
            }
        ]
    }
])
root.render(<Provider store={appStore}><App /></Provider>)