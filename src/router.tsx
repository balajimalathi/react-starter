 
import { createBrowserRouter } from "react-router-dom"

import App from "./App"
import { ErrorElement } from "@/components/common/ErrorElement"
import { NotFound } from "@/components/common/NotFound"
import { buildGlobRoutes } from "./lib/route-builder" 

const globTree = import.meta.glob([
  "./pages/**/*.tsx",
  "!./pages/**/components/**/*.tsx",
  "!./pages/**/_components/**/*.tsx",
])

const tree = buildGlobRoutes(globTree)
console.log(tree)
export const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: tree,
    errorElement: <ErrorElement />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import { ErrorElement } from "@/components/common/ErrorElement";
// import { NotFound } from "@/components/common/NotFound";
// import { buildGlobRoutes } from "./lib/route-builder";

// // Import main layout component explicitly as a fallback
// import { MainLayout } from "./pages/(main)/layout";

// const globTree = import.meta.glob([
//   "./pages/**/*.tsx",
//   "!./pages/**/components/**/*.tsx",
//   "!./pages/**/_components/**/*.tsx",
// ]);

// const tree = buildGlobRoutes(globTree);
// console.log("Generated route tree:", tree);

// // Ensure the main layout has a component that renders the Outlet
// const ensureOutletInRoutes = (routes: any) => {
//   return routes.map((route: any) => {
//     // If this is the (main) route and it doesn't have a component/lazy property
//     if (route.handle?.fs === "./pages/(main)" && !route.lazy) {
//       return {
//         ...route,
//         element: <MainLayout />, // Explicitly provide the layout component
//       };
//     }
    
//     // Recursively process children
//     if (route.children) {
//       return {
//         ...route,
//         children: ensureOutletInRoutes(route.children)
//       };
//     }
    
//     return route;
//   });
// };

// const processedTree = ensureOutletInRoutes(tree);

// export const router = createBrowserRouter([
//   {
//     path: "",
//     element: <App />,
//     children: processedTree,
//     errorElement: <ErrorElement />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);