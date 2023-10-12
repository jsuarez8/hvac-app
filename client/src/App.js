import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      {/* Assuming the router automatically renders the matched element */}
    </RouterProvider>
  );
}

export default App;
