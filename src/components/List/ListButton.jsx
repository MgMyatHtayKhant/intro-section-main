import { useContext } from "react";
import { ListContext } from "./List";

/* eslint-disable react/prop-types */
export default function ListButton({ children, arrowUp, arrowDown }) {

    const { open, toggleOpen } = useContext(ListContext);

    return (
        <a onClick={toggleOpen}>
            <span>{children}</span>
            <img src={open ? arrowUp : arrowDown} alt="" />
        </a>
    );
}