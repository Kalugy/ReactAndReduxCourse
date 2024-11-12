import React from "react";


const AddBook = ({handleSubmit,text, setText}) => {

    
    const validate = (e) => {
        setText(e)
    }

    return (
        <div className="bg-slate-500 flex flex-col p-6 m-2 rounded shadow">
            <form
                className="max-w-lg"
                onSubmit={handleSubmit}>
                
                <h1 className="font-bold text-left">Create Book</h1>
                <label className="font-bold ">Name</label>
                <input 
                    className="text-black input" 
                    value={text} 
                    onChange={(e)=>validate(e.target.value)}
                />
                <button className="primary max-w-20">Submit</button>
            </form>
        </div>
    )

}

export default AddBook