// import { createContext } from "react";

// const ListContext = createContext();

/* eslint-disable react/prop-types */
export default function List({ className, children }) {

    console.log(className);
    return (

        <div className={className}>
            {
                children
            }
        </div>

    );
}
