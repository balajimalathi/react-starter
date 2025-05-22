import { Loader } from "lucide-react";
import { ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { Navigate, useLocation } from "react-router-dom";
import { Label } from "../ui/label";

export default function AuthGuard({
  children,
}: {
  children: ReactNode;
}) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.isLoading) return <div className="grid h-screen place-items-center">
    <div className='flex flex-col items-center'>
      <Loader className="animate-spin h-5 w-5 mr-3" />
      <Label className='mt-4'>Loading...</Label>
    </div>
  </div>;

  if (!auth.isAuthenticated) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  return children;
}