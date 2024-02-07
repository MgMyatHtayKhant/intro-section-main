
/* eslint-disable react/prop-types */

export default function ListButton({ children, src }) {
    return (
        <a>
            <span>{children}</span>
            <img src={src} alt="" />
        </a>
    );
}