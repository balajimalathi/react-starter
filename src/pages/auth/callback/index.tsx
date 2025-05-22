import { Label } from "@/components/ui/label";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
// import { useNavigate } from "react-router-dom";

export function Component() {

  const auth = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   auth.signinSilent().then(() => {
  //     const returnUrl = window.sessionStorage.getItem("returnUrl") || "/admin/dashboard/overview";
  //     window.sessionStorage.removeItem("returnUrl");
  //     navigate(returnUrl, { replace: true });
  //   }).catch(err => {
  //     console.error("OIDC callback error", err);
  //     navigate("/auth/sign-in");
  //   });
  // }, [auth, navigate]);

  useEffect(() => {
    if (auth.isLoading) return;  
    if (auth.error) {
      console.error("OIDC error:", auth.error);
    } else if (auth.isAuthenticated) {
      window.location.replace("/admin/dashboard/overview");
    }
  }, [auth]);

  return <div className="grid h-screen place-items-center">
    <div className='flex flex-col items-center'>
      <Loader className="animate-spin h-5 w-5 mr-3" />
      <Label className='mt-4'>Authenticating...</Label>
    </div>
  </div>
}
