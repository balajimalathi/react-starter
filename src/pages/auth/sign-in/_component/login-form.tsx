import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { z } from "zod"
import { Icons } from "@/components/shared/icons"
import { Link, useLocation } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "react-oidc-context";
import { toast } from "sonner";

// Zod schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin/dashboard/overview";

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    window.sessionStorage.setItem("returnUrl", from);
    auth.signinResourceOwnerCredentials({ username: values.email, password: values.password }).then((response) => {
      if (response.access_token === "error") {
        // show toast
        toast.error("We couldn't log you in, double-check your details and try once more.")
        return;
      }
      window.location.href = '/admin/dashboard/overview';
    }).catch((err) => {
      // show toast
      toast.error("We couldn't log you in, double-check your details and try once more.")
    });
  };

  const loginWithGoogle = () => {
    window.sessionStorage.setItem("returnUrl", from);
    auth.signinRedirect({
      extraQueryParams: { kc_idp_hint: "google" },
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden py-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 md:p-4">
            <div className="flex flex-col items-center text-center">
              <Icons.logo className="size-16" />
              <h1 className="text-2xl font-bold pt-8">Welcome back</h1>
              <p className="text-balance text-muted-foreground">
                Login to your Acme Inc account
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="******" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
            {/* <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="w-full">
                  <Icons.google className="size-4" />
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div> */}
            <Button variant="outline" className="w-full" type="button" onClick={loginWithGoogle}>
              <Icons.google className="size-4" />
              <span className="pl-2">Login with Google</span>
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/auth/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
              {/* <a href="#" className="underline underline-offset-4">
                  
                </a> */}
            </div>
          </div>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 ">
        By clicking continue, you agree to our <a href="#2">Terms of Service</a>{" "}
        and <a href="#w">Privacy Policy</a>.
      </div>
    </div>
  )
}
