import { redirect } from "react-router-dom"

export const loader = () => redirect(`/dashboard/overview`)

export function Dashboard() {
  return null
}
