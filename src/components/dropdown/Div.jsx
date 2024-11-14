import React from "react";

import classNames from 'classnames';

const Div = ({ children, className, ...rest }) => {

    const currentClassName = classNames(
        'flex flex-col min-h-screen justify-center align-middle max-w-md mx-auto',
        className
    )

    return(
        <div {...rest} className={currentClassName}>{children}</div>
    )
}


export default Div