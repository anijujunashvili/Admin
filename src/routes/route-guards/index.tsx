import { PropsWithChildren } from "react";
import { userAtom } from "../../store/auth";
import { useAtom } from "jotai";
import { Outlet, Navigate } from "react-router-dom";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [user] = useAtom(userAtom);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children || <Outlet />;
};

export default AuthGuard;
