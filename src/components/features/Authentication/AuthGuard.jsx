import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {
  const token = localStorage.getItem("userToken");

  if (!token) return <Navigate replace to="/login" />;

  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthGuard;
