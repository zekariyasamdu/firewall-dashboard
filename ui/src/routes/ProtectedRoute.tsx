import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = () => {
  const auth = useAuth();

  if (auth.token) return <Outlet />;
  return <Navigate to="/login" />;
};
