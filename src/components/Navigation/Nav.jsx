// Images
import {
    closeIcon,
} from "../../assets/images/index";

// Componenets
import Menu from "../List/index";
import Button from "../Button/Button";

// Style 
import style from "../../styles/Nav.module.scss";

/* eslint-disable react/prop-types */
export default function Nav({ menu, open, toggleOpen }) {

    const styling = {
        move: {
            transform: open ? "translate(0)" : "translate(100%)"
        },
        display: {
            visibility: open ? "visible" : "hidden",
            opacity: open ? 1 : 0
        }
    };

    return (
        <>
            <nav style={styling.move} className={style.navigation}>

                <div>
                    <Button toggle={toggleOpen} >{closeIcon}</Button>
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

                <a>About</a>

                <div>
                    <a>Login</a>

                    <Button className={style.btn} type="normal" size="medium" variant="light">
                        Register
                    </Button>
                </div>
            </nav>
            <div style={styling.display} className={style.overlay}></div>
        </>
    );
}