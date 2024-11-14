import React, { useState , useRef, useEffect} from "react"
import Div from "./div"

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    const content = {
        title: "Hello welcome",
        description: "this is an example description of a modal component"
    }

    const children = (
        <div>
            <div className="flex justify-end">
                <button
                    className="text-gray-500 hover:text-red-500 text-lg font-bold rounded-full p-2 focus:outline-none transition-colors"
                    onClick={() => openModal()}
                    aria-label="Close"
                >
                    X
                </button>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">{content.title}</h1>
            <h5 className="text-sm text-gray-600 leading-relaxed">{content.description}</h5>
        </div>
    )

    return (
        <Div>
            <button 
                className="primary max-w-md mt-44"
                onClick={openModal}
            >
                open modal
            </button>
            {isOpen &&
                <CustomModal children={children} onClose={openModal} />
            }

            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            
            <button 
                className="primary max-w-md"
                onClick={openModal}
            >
                open modal
            </button>
            {isOpen &&
                <CustomModal children={children} onClose={openModal} />
            }
        </Div>
    )
}


const CustomModal = ({ children, onClose }) => {
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
        document.body.classList.add('overflow-hidden')
        document.addEventListener('click',handler, true)

        return () => {
            document.removeEventListener('click', handler, true); // Ensure to call removeEventListener on `document`
            document.body.classList.remove('overflow-hidden')
        }
    },[])

    return (
        <div className="fixed min-w-lg min-h-lg px-8 py-8 rounded">
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                <div  ref={divEl} className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}




export default Modal