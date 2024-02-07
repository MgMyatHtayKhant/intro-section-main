// Images
import {
    closeIcon,
    arrowDownIcon,
} from "../../assets/images/index";

// Componenets
import List from "../List/index";
import Button from "../Button/Button";

// Style 
import "../../styles/Nav.module.scss";


export default function Nav() {

    return (
        <nav className="navigation">

            <Button>{closeIcon}</Button>

            <List>
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

            <List>
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

            <a>About</a>

            <div className="register">
                <a className="login">
                    Login
                </a>
                <a className="btn btn-register">
                    Register
                </a>
            </div>
        </nav>
    );
}