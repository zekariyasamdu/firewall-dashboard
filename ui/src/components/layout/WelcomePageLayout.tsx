import { Outlet } from "react-router-dom";

export const WelcomePageLayout = () => {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
};
