import classNames from 'classnames';

/* eslint-disable react/prop-types */
export default function Button({
    type = "",
    toggle,
    children,
    size,
    variant,
    weight,
    className,
}) {

    let isNormal = type === "normal";
    let defaultClass = isNormal ? "btn" : "btn-icon";

    let sizeClass = size && `btn-${size}`;
    let variantClass = variant && `btn-${variant}`;
    let weightClass = weight && `btn-${weight}`;

    const allClasses = classNames(defaultClass, className, sizeClass, variantClass, weightClass);

    return (
        // <button className={allClasses}>{children}</button> :
        <button
            className={allClasses}
            aria-label={isNormal ? "Button" : "Icon Button"}
            onClick={isNormal ? () => { } : toggle} >
            {isNormal ? children : <img src={children} alt="" />}
        </button>
    );
}