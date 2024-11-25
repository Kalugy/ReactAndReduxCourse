import { GoSync } from "react-icons/go"
import classNames from "classnames"

const Button = ({children, isLoading, className, ...rest}) => {
    const btnClass = classNames(
        className,
        {
            'opacity-80': isLoading
        }
    )


    return <button 
        {...rest}
        className={btnClass} 
        
        disabled={isLoading}
        >
        {isLoading  
            ? <GoSync className="animate-spin" />
            : <div>{children}</div>  
        }
    </button>
}

export default Button