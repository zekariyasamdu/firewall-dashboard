import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { Welcome } from "../pages/Welcome";
import { Login } from "../pages/Login";
import { useAuth } from "../hooks/useAuth";
import { WelcomePageLayout } from "@/components/layout/WelcomePageLayout";

// POST /dashboard/login           -> JSON {username,password} sets dashboard_session cookie (HMAC-signed)
// POST /dashboard/logout          -> clear session cookie

export default function Route() {
  const auth = useAuth();

  const publicRoute = [
    {
      path: "/",
      element: <WelcomePageLayout />,
      children: [
        {
          path: "/",
          element: <Welcome />,
        },
      ],
    },
    { path: "*", element: <div>doesn't exit</div> },
  ];

  const protectedRoute = [
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
      ],
    },
  ];

  const onlyUnauthenticated = [
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const route = createBrowserRouter([
    ...protectedRoute,
    ...publicRoute,
    ...(!auth.token ? onlyUnauthenticated : []),
  ]);

  return <RouterProvider router={route} />;
}
