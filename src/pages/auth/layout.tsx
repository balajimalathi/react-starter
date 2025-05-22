import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}