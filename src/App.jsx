import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import { action as createorderAction } from "./features/order/CreateOrder";
import { action as newOrderAction } from "./features/order/MakePriority";
import Order from "./features/order/Order";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import { loader as MenuLoader } from "./features/menu/Menu";
import { loader as OrderLoader } from "./features/order/Order";
import Error from "./ui/Error";
const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      { path: "cart", element: <Cart /> },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: createorderAction,
      },
      {
        path: "order/:id",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
        action: newOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
