import { Routes, Route } from "react-router-dom"

// Pages
import { Home } from "../pages/Home"
import { Admin } from "../pages/Admin"
import { Register } from "../pages/Register"
import { ErrorPage } from "../pages/ErrorPage"
import { Private } from "./Private"

export const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />

            <Route path="/admin" element={
                <Private>
                    <Admin />
                </Private>}
            />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}