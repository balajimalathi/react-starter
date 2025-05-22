import { useParams } from "react-router-dom"

export function Component() {
  const { id, vid } = useParams()
  return (
    <div>
      <h1>Id: {id}</h1> 
      <h1>vid: {vid}</h1> 
    </div>
  )
}
