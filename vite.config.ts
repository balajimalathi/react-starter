// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// resolve: {
//   alias: {
//     "@": path.resolve(__dirname, "./src"),
//   },
// },
// })


import { readFileSync } from "node:fs"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig, loadEnv } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"
import tsconfigPaths from "vite-tsconfig-paths"

const pkg = JSON.parse(readFileSync("package.json", "utf8"))
const readme = readFileSync("README.md", "utf8")

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      tsconfigPaths(),
      react(),
      tailwindcss(),
      createHtmlPlugin({
        template: "index.html",
        inject: {
          data: {
            title: viteEnv.VITE_APP_NAME,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      APP_VERSION: JSON.stringify(pkg.version),
      APP_NAME: JSON.stringify(pkg.name),
      APP_DEV_CWD: JSON.stringify(process.cwd()),
      dependencies: JSON.stringify(pkg.dependencies),
      devDependencies: JSON.stringify(pkg.devDependencies),
      README: JSON.stringify(readme),
      pkg: JSON.stringify(pkg),
    },
    server: {
      port: 5173,
      strictPort: true,
      proxy: {
        "/api/": {
          target: viteEnv.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})
