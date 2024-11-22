import React from "react";

import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => {

    const currentClassName = classNames(
        'border rounded p-3 shadow w-full',
        className
    )

    return(
        <div {...rest} className={currentClassName}>{children}</div>
    )
}


export default Panel