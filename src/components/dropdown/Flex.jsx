import React from "react";

const Flex = () =>{
    const items = [
        {id:'1', title: 'cars', description: 'this is an example'},
        {id:'2', title: 'cars2', description: 'this is an example'},
        {id:'3', title: 'cars3', description: 'this is an example'},
        {id:'4', title: 'cars4', description: 'this is an example'},
        {id:'5', title: 'cars5', description: 'this is an example'},
        {id:'6', title: 'cars6', description: 'this is an example'},
        {id:'7', title: 'cars7', description: 'this is an example'},
        {id:'8', title: 'cars8', description: 'this is an example'}
    
    ]
    
    return(
        <div className="min-h-screen bg-slate-800 text-white flex flex-row flex-wrap rounded items-center justify-center gap-2 pt-40">
            {items.length>0 && items.map(item => {
                return <FlexCard 
                    key={item.id} 
                    item={item} 
                />
            })}
            {items.length>0 && items.map(item => {
                return <FlexCard 
                    key={item.id} 
                    item={item} 
                />
            })}
        </div>
    )

}


const FlexCard = ({item}) => {
    return (
        <div className="bg-gray-600 min-w-md min-h-md p-5 hover:bg-slate-800 shadow">
            <div className="font-bold text-right">{item.id}</div>
            <div className="font-bold text-left text-lg">{item.title}</div>
            <div className="font-normal text-md">{item.description}</div>
        </div>
    )
    

}


export default Flex