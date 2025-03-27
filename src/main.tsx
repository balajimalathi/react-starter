import * as React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { RootProviders } from "@/providers/root-providers"
import { router } from "./router"

import "./i18n"
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <RootProviders>
      <RouterProvider router={router} />
    </RootProviders>
  </React.StrictMode>,
)