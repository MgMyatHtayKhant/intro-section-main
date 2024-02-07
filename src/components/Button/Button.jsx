import classNames from 'classnames';

/* eslint-disable react/prop-types */
export default function Button({
    type = "",
    toggle,
    children,
    size,
    variant,
    className,
}) {
    let isNormal = type === "normal";
    let sizeClass = size && `btn-${size}`;
    let variantClass = variant && `btn-${variant}`;
    let defaultClass = isNormal ? "btn" : "btn-icon";
    const allClasses = classNames(defaultClass, className, sizeClass, variantClass);

    return (
        isNormal ?
            <button className={allClasses}>{children}</button> :
            <div>
                <button className={allClasses} aria-label="Icon Button" onClick={toggle}>
                    <img src={children} alt="" />
                </button>
            </div>
    );
}