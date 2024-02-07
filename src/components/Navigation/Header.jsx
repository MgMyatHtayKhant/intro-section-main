// Images
import {
    logoImg,
    menuIcon,
    arrowDownIcon,
} from "../../assets/images/index";

// Componenets
import List from "../List/index";
import Button from "../Button/Button";

// Style
import style from "../../styles/Header.module.scss";


export default function Header() {
    return (
        <header className={style.header}>
            <div className={style["logo-img"]}>
                <img src={logoImg} alt="" />
            </div>

            <List className={style["menu-btn"]}>
                <List.Button src={arrowDownIcon}>
                    Features
                </List.Button>
                {/* <List.Dropdown>
                    <List.Item src="">Todo List</List.Item>
                    <List.Item src="">Calender</List.Item>
                    <List.Item src="">Reminders</List.Item>
                    <List.Item src="">Planing</List.Item>
                </List.Dropdown> */}
            </List>

            <List className={style["menu-btn"]}>
                <List.Button src={arrowDownIcon}>
                    Company
                </List.Button>
                {/* <List.Dropdown>
                    <List.Item src="">History</List.Item>
                    <List.Item src="">Our Team</List.Item>
                    <List.Item src="">Blog</List.Item>
                </List.Dropdown> */}
            </List>

            <a>Careers</a>

            <div className={style.about}><a>About</a></div>

            <a className={style.login}>Login</a>

            <Button type="normal" size={"medium"} className={style.register}>
                Register
            </Button>

            <Button>{menuIcon}</Button>
        </header>
    );
}