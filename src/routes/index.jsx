import { Routes, Route } from "react-router-dom"

// Pages
import { ErrorPage } from "../pages/ErrorPage"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}