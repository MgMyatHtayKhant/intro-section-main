import { useContext } from "react";
import { ListContext } from "./List";

/* eslint-disable react/prop-types */
export default function ListDropdown({ children }) {
    const { open } = useContext(ListContext);
    return (
        open &&
        <ul>
            {
                children
            }
        </ul>
    );
}