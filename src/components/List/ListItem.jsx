
/* eslint-disable react/prop-types */
export default function ListItem({ children, src }) {
    return (
        <li>
            <img src={src} alt="" />
            <span>{children}</span>
        </li>
    );
}