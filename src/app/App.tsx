import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import React from "react";
import {Sidebar} from "widgets/Sidebar";


export default function App() {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-container">
                <Sidebar />
                <AppRouter/>
            </div>



        </div>
    )
}