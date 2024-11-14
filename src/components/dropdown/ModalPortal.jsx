import React, { useState , useRef, useEffect} from "react"
import Div from "./div"
import ReactDOM from 'react-dom'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    const content = {
        title: "Hello welcome",
        description: "this is an example description of a modal component"
    }

    return (
        <Div>
            <button 
                className="secondary max-w-md"
                onClick={openModal}
            >
                open modal
            </button>
            {isOpen &&
                <CustomModal content={content} onClose={openModal} />
            }
        </Div>
    )
}


const CustomModal = ({ content, onClose }) => {
    const divEl = useRef() 

    useEffect(()=>{
        const handler = (event) => {
            console.log(event.target)
            if(!divEl?.current)
                return

            if(!divEl.current.contains(event.target)){
                onClose()
            }
        }

        document.addEventListener('click',handler, true)

        return () => {
            document.removeEventListener('click', handler, true); // Ensure to call removeEventListener on `document`
        }
    },[])

    return ReactDOM.createPortal(
        <div 
            className="absolute min-w-lg min-h-lg px-8 py-8 rounded"
        >
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                <div ref={divEl}  className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
                    <div className="flex justify-end">
                        <button
                            className="text-gray-500 hover:text-red-500 text-lg font-bold rounded-full p-2 focus:outline-none transition-colors"
                            onClick={() => onClose()}
                            aria-label="Close"
                        >
                            X
                        </button>
                    </div>
                    <h1 className="text-xl font-semibold text-gray-800">{content.title}</h1>
                    <h5 className="text-sm text-gray-600 leading-relaxed">{content.description}</h5>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')

    )
}




export default Modal