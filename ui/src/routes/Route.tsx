import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../pages/Login";
import { useAuth } from "../hooks/useAuth";
import Signup from "@/pages/Signup";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Dashboard } from "@/pages/Dashboard";
export default function Route() {
  const auth = useAuth();
  console.log(auth.token);
  const protectedRoute = [
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: [{ index:true, element: <Dashboard/> }],
        },
      ],
    },
    { path: "*", element: <div>doesn't exit</div> },
  ];

  const onlyUnauthenticated = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];

  const route = createBrowserRouter([
    ...protectedRoute,
    ...(!auth.token ? onlyUnauthenticated : []),
  ]);

  return <RouterProvider router={route} />;
}
