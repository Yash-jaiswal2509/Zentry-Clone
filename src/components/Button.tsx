import React from "react";

type ButtonProps = {
    title?: string;
    id?: string;
    rightIcon?: React.ReactElement;
    leftIcon?: React.ReactElement;
    containerClass?: string;
}

const Button = ({ title, id, rightIcon, leftIcon, containerClass }: ButtonProps) => {

    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
            {leftIcon}

            <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
                <div>
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button