import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./routes"

export const App = () => {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  )
}