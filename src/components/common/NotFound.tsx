import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8">
      <span className='bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent'>
        404
      </span>
      <h2 className='my-2 text-2xl font-bold'>
        Something&apos;s missing
      </h2>
      <p className="text-center">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className='mt-8 flex justify-center gap-2'>
        <Button onClick={() => navigate("/")} variant='default' size='lg'>
          Go back
        </Button>
        <Button
          onClick={() => navigate("/dashboard")}
          variant='ghost'
          size='lg'
        >
          Back to Home
        </Button>
      </div>
    </div>
  )
}

