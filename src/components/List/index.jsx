// List Components
import List from "./List";
import ListButton from "./ListButton";
import ListDropdown from "./ListDropdown";
import ListItem from "./ListItem";

List.Button = ListButton;
List.Dropdown = ListDropdown;
List.Item = ListItem;

// Images 
import {
    arrowDownIcon,
    arrowUpIcon,
} from "../../assets/images/index";

export default function index({ className, btnName, menu }) {
    return (
        <List className={className}>
            <List.Button arrowDown={arrowDownIcon} arrowUp={arrowUpIcon}>
                {btnName}
            </List.Button>
            <List.Dropdown>
                {
                    menu.map(item => (
                        <List.Item key={item.name} src={item.icon}>
                            {item.name}
                        </List.Item>
                    ))
                }
            </List.Dropdown>
        </List>
    );
}

