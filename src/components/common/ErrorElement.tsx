import { useEffect, useRef } from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
 
import { Logo } from "@/components/icons/logo"
import { attachOpenInEditor } from "@/lib/dev"
import { getNewIssueUrl } from "@/lib/issues"
import { Button } from "../ui/button";

export function ErrorElement() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error) ?
    `${error.status} ${error.statusText}` :
    error instanceof Error ?
      error.message :
      JSON.stringify(error)
  const stack = error instanceof Error ? error.stack : null

  useEffect(() => {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error,
    )
  }, [error])

  const reloadRef = useRef(false)
  if (
    message.startsWith("Failed to fetch dynamically imported module") &&
    window.sessionStorage.getItem("reload") !== "1"
  ) {
    if (reloadRef.current) return null
    // toast.error("Web app has been updated so it needs to be reloaded.")
    window.sessionStorage.setItem("reload", "1")
    window.location.reload()
    reloadRef.current = true
    return null
  }

  return (
    <div className="m-auto flex min-h-full max-w-prose select-text flex-col p-8 pt-12">
      <div className="center flex flex-col">
        <h2 className="mb-4 mt-12 text-2xl">
          Sorry,
          {" "}
         
          {" "}
          has encountered an error
        </h2>
      </div>
      <h3 className="text-xl">{message}</h3>
      {import.meta.env.DEV && stack ? (
        <div className="mt-4 cursor-text overflow-auto whitespace-pre rounded-md bg-red-50 p-4 text-left font-mono text-sm text-red-600">
          {attachOpenInEditor(stack)}
        </div>
      ) : null}

      <p className="my-8">
       
        {" "}
        has a temporary problem, click the button below to try
        reloading the app or another solution?
      </p>

      <div className="center gap-4">
        <Button onClick={() => {
          window.location.reload()
        }}
        >
          Reload
        </Button>
      </div>

      <p className="mt-8">
        Still having this issue? Please give feedback in Github, thanks!
        <a
          className="ml-2 cursor-pointer duration-200"
          href={getNewIssueUrl({
            title: `Error: ${message}`,
            body: `### Error\n\n${message}\n\n### Stack\n\n\`\`\`\n${stack}\n\`\`\``,
            label: "bug",
          })}
          target="_blank"
          rel="noreferrer"
        >
          Submit Issue
        </a>
      </p>
      <div className="grow" />
      <footer className="center mt-12 flex gap-2">
        Powered by
        {" "}
        <Logo className="size-5" />
        {" "}
        {/* <a
          href={pkg.homepage}
          className="cursor-pointer font-bold"
          target="_blank"
          rel="noreferrer"
        >
          {APP_NAME}
        </a> */}
      </footer>
    </div>
  )
}
