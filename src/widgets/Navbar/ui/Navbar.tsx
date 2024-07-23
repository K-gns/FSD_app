import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
                    Главная
                </AppLink>
                <AppLink to={'/about'} className={cls.aboutLink} theme={AppLinkTheme.SECONDARY}>
                    О сайте
                </AppLink>
            </div>

        </div>
    );
};

export default Navbar;

