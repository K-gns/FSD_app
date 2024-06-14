import {Counter} from "./components/Counter";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useContext, useState} from "react";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export default function App() {
    const {theme, toggleTheme} = useTheme()
    const bool = true;

    return (
        <div className={classNames('app', {}, [theme])} >
            <Link to={'/'}>Главная | </Link>
            <Link to={'/about'}>О сайте</Link>
            <button onClick={toggleTheme}>Toggle theme</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}></Route>
                    <Route path={'/'} element={<MainPageAsync/>}></Route>
                </Routes>
            </Suspense>

        </div>
    )
}