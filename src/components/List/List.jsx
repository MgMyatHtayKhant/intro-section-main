// React
import { createContext } from "react";

// Custome Hooks
import useToggle from "../../hooks/useToggle";

// Create Context
const ListContext = createContext();
export { ListContext };

/* eslint-disable react/prop-types */
export default function List({ className, children }) {

    const [open, toggleOpen] = useToggle();

    let allClasses = className ? `menu ${className}` : "menu";
    return (
        <ListContext.Provider value={{ open, toggleOpen }}>
            <div className={allClasses}>
                {
                    children
                }
            </div>
        </ListContext.Provider>
    );
}
