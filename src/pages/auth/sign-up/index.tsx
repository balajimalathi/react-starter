import { RegisterForm } from "./_component/register-form";

export function Component() {
  return <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
    <div className="w-full max-w-md">
      <RegisterForm />
    </div>
  </div>
}