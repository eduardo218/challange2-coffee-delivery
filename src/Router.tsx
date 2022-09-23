import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"


const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout/>}>
            
        </Route>
    </Routes>
  )
}

export default Router