import classNames from "classnames"

const Skeleton = ({times, className}) => {
    const outerClassnames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    )
    const innerClassnames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    )

    const boxes = Array(times).fill(0).map((_,i)=>{
        return <div className={outerClassnames} key={i} >
            <div className={innerClassnames}></div>
        </div>
    })

    return boxes
}

export default Skeleton