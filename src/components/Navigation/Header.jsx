// Images
import {
    logoImg,
    menuIcon,
} from "../../assets/images/index";

// Componenets
import Menu from "../List/index";
import Button from "../Button/Button";

// Style
import style from "../../styles/Header.module.scss";

/* eslint-disable react/prop-types */
export default function Header({ menu, toggleOpen }) {
    return (
        <header className={style.header}>
            <div className={style["logo-img"]}>
                <img src={logoImg} alt="" />
            </div>

            <Menu
                className={style.menu}
                btnName={"Feature"}
                menu={menu.first} />

            <Menu
                className={style.menu}
                btnName={"Company"}
                menu={menu.second} />

            <a>Careers</a>

            <div className={style.about}><a>About</a></div>

            <a className={style.login}>Login</a>

            <Button type="normal" size="medium" variant="light">
                Register
            </Button>

            <Button toggle={toggleOpen}>{menuIcon}</Button>
        </header>
    );
}