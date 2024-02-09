
/* eslint-disable react/prop-types */
export default function ListItem({ children, src }) {
    return (
        <li className={src ? "icon-item" : null}>
            {
                src ?
                    <>
                        <img src={src} alt="" />
                        <span>{children}</span>
                    </> :
                    children
            }
        </li>
    );
}